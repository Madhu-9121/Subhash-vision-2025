const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const validator = require("validator");
const DOMPurify = require("isomorphic-dompurify");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
const NODE_ENV = process.env.NODE_ENV || "development";

// Security middleware
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
      },
    },
  }),
);

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(",")
    : ["http://localhost:3000"],
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Rate limiting
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: "Too many contact form submissions. Please try again later.",
    retryAfter: "15 minutes",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api/", generalLimiter);
app.use("/api/contact", contactLimiter);

// Logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path} - IP: ${req.ip}`);
  next();
});

// Health check endpoint (no sensitive info exposed)
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    environment: NODE_ENV,
    uptime: process.uptime(),
  });
});

// Configuration validation
const validateConfig = () => {
  const requiredVars = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASS",
    "CONTACT_RECEIVER",
  ];
  const missing = requiredVars.filter((varName) => !process.env[varName]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`,
    );
  }

  // Validate email addresses
  if (!validator.isEmail(process.env.SMTP_USER)) {
    throw new Error("SMTP_USER must be a valid email address");
  }

  if (!validator.isEmail(process.env.CONTACT_RECEIVER)) {
    throw new Error("CONTACT_RECEIVER must be a valid email address");
  }

  // Validate port
  const port = parseInt(process.env.SMTP_PORT, 10);
  if (isNaN(port) || port < 1 || port > 65535) {
    throw new Error("SMTP_PORT must be a valid port number (1-65535)");
  }
};

// Input validation and sanitization
const validateContactForm = (data) => {
  const errors = [];
  const sanitized = {};

  // Required fields validation
  const requiredFields = [
    "name",
    "country",
    "orgType",
    "orgName",
    "email",
    "phoneCode",
    "phone",
  ];

  for (const field of requiredFields) {
    if (
      !data[field] ||
      typeof data[field] !== "string" ||
      !data[field].trim()
    ) {
      errors.push(`${field} is required`);
      continue;
    }

    // Length validation
    const maxLengths = {
      name: 100,
      country: 100,
      orgType: 50,
      orgName: 200,
      email: 254,
      phoneCode: 10,
      phone: 20,
    };

    if (data[field].length > maxLengths[field]) {
      errors.push(`${field} is too long (max ${maxLengths[field]} characters)`);
      continue;
    }

    // Sanitize and trim
    sanitized[field] = DOMPurify.sanitize(data[field].trim());
  }

  // Email validation
  if (sanitized.email && !validator.isEmail(sanitized.email)) {
    errors.push("Please enter a valid email address");
  }

  // Phone validation
  if (
    sanitized.phoneCode &&
    !validator.isNumeric(sanitized.phoneCode.replace("+", ""))
  ) {
    errors.push("Phone code must contain only numbers");
  }

  if (
    sanitized.phone &&
    !validator.isMobilePhone(sanitized.phone, "any", { strictMode: false })
  ) {
    errors.push("Please enter a valid phone number");
  }

  // Organization type validation
  const validOrgTypes = [
    "school",
    "university",
    "nonprofit",
    "government",
    "corporate",
    "individual",
  ];
  if (sanitized.orgType && !validOrgTypes.includes(sanitized.orgType)) {
    errors.push("Invalid organization type");
  }

  // Optional message field
  if (data.message) {
    if (data.message.length > 2000) {
      errors.push("Message is too long (max 2000 characters)");
    } else {
      sanitized.message = DOMPurify.sanitize(data.message.trim());
    }
  }

  return { errors, sanitized };
};

// Email template generator
const generateEmailTemplate = (data) => {
  const orgTypeLabels = {
    school: "School",
    university: "University",
    nonprofit: "Non-Profit Organization",
    government: "Government Agency",
    corporate: "Corporate",
    individual: "Individual",
  };

  const orgTypeLabel = orgTypeLabels[data.orgType] || data.orgType;
  const timestamp = new Date().toLocaleString();

  return {
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8f9fa;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 15px; margin-bottom: 25px;">
              📧 New Contact Form Submission
            </h2>

            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: white; margin-top: 0; margin-bottom: 15px;">👤 Personal Information</h3>
              <table style="width: 100%; color: white;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 30%;">Name:</td>
                  <td style="padding: 8px 0;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                  <td style="padding: 8px 0;">${data.email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
                  <td style="padding: 8px 0;">+${data.phoneCode} ${data.phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Country:</td>
                  <td style="padding: 8px 0;">${data.country}</td>
                </tr>
              </table>
            </div>

            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: white; margin-top: 0; margin-bottom: 15px;">🏢 Organization Details</h3>
              <table style="width: 100%; color: white;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; width: 30%;">Type:</td>
                  <td style="padding: 8px 0;">${orgTypeLabel}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold;">Name:</td>
                  <td style="padding: 8px 0;">${data.orgName}</td>
                </tr>
              </table>
            </div>

            ${
              data.message
                ? `
            <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: white; margin-top: 0; margin-bottom: 15px;">💬 Message</h3>
              <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 5px; color: white; white-space: pre-wrap;">${data.message}</div>
            </div>
            `
                : `
            <div style="background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%); padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #2d3436; margin-top: 0; margin-bottom: 10px;">💬 Message</h3>
              <p style="margin: 0; color: #2d3436; font-style: italic;">No message provided</p>
            </div>
            `
            }

            <div style="margin-top: 30px; padding: 20px; background-color: #ecf0f1; border-radius: 8px; border-left: 4px solid #3498db;">
              <h4 style="color: #2c3e50; margin-top: 0;">📋 Quick Actions</h4>
              <p style="margin: 10px 0; color: #34495e;">
                <strong>Reply to:</strong> <a href="mailto:${data.email}" style="color: #3498db; text-decoration: none;">${data.email}</a>
              </p>
              <p style="margin: 10px 0; color: #34495e;">
                <strong>Call:</strong> <a href="tel:+${data.phoneCode}${data.phone}" style="color: #3498db; text-decoration: none;">+${data.phoneCode} ${data.phone}</a>
              </p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #bdc3c7; color: #7f8c8d; font-size: 12px; text-align: center;">
              <p style="margin: 0;">This email was sent from your website contact form</p>
              <p style="margin: 5px 0 0 0;">📅 ${timestamp}</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
New Contact Form Submission

Personal Information:
- Name: ${data.name}
- Email: ${data.email}
- Phone: +${data.phoneCode} ${data.phone}
- Country: ${data.country}

Organization Details:
- Type: ${orgTypeLabel}
- Name: ${data.orgName}

Message:
${data.message || "No message provided"}

Quick Actions:
- Reply to: ${data.email}
- Call: +${data.phoneCode}${data.phone}

Timestamp: ${timestamp}
    `,
  };
};

// Create SMTP transporter with connection pooling
let transporter;
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
    rateDelta: 1000,
    rateLimit: 5,
  });
};

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  const requestId = `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  try {
    console.log(`[${requestId}] Contact form submission received`);

    // Validate and sanitize input
    const { errors, sanitized } = validateContactForm(req.body);

    if (errors.length > 0) {
      console.log(`[${requestId}] Validation errors:`, errors);
      return res.status(400).json({
        success: false,
        errors: errors,
        message: "Please correct the following errors and try again.",
      });
    }

    // Create transporter if not exists
    if (!transporter) {
      transporter = createTransporter();
    }

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log(`[${requestId}] SMTP connection verified`);
    } catch (error) {
      console.error(`[${requestId}] SMTP verification failed:`, error.message);
      return res.status(503).json({
        success: false,
        message:
          "Email service is temporarily unavailable. Please try again later.",
        error: NODE_ENV === "development" ? error.message : undefined,
      });
    }

    // Generate email content
    const emailContent = generateEmailTemplate(sanitized);

    // Email options
    const mailOptions = {
      from: `"Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: sanitized.email,
      subject: `New Contact: ${sanitized.name} - ${sanitized.orgName}`,
      html: emailContent.html,
      text: emailContent.text,
      headers: {
        "X-Request-ID": requestId,
        "X-Originating-IP": req.ip,
        "X-User-Agent": req.get("User-Agent") || "Unknown",
      },
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log(`[${requestId}] Email sent successfully:`, info.messageId);

    res.status(200).json({
      success: true,
      message: "Thank you for your message. We will get back to you soon!",
      messageId: info.messageId,
      requestId: requestId,
    });
  } catch (error) {
    console.error(`[${requestId}] Error processing contact form:`, error);

    res.status(500).json({
      success: false,
      message:
        "An error occurred while processing your request. Please try again later.",
      error: NODE_ENV === "development" ? error.message : undefined,
      requestId: requestId,
    });
  }
});

// Global error handlers
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
    error: NODE_ENV === "development" ? err.message : undefined,
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
  });
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  if (transporter) {
    transporter.close();
  }
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("SIGINT received. Shutting down gracefully...");
  if (transporter) {
    transporter.close();
  }
  process.exit(0);
});

// Start server
const startServer = async () => {
  try {
    // Validate configuration
    validateConfig();
    console.log("✅ Configuration validated successfully");

    // Start the server
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
      console.log(`📧 Environment: ${NODE_ENV}`);
      console.log(`📧 SMTP Host: ${process.env.SMTP_HOST}`);
      console.log(`📧 Contact Receiver: ${process.env.CONTACT_RECEIVER}`);
      console.log("✅ Server ready to accept connections");
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
