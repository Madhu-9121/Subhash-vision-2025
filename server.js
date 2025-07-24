
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables first
dotenv.config();

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Log environment variables on startup
console.log('=== ENVIRONMENT VARIABLES CHECK ===');
console.log('SMTP_HOST:', process.env.SMTP_HOST || 'NOT SET');
console.log('SMTP_PORT:', process.env.SMTP_PORT || 'NOT SET');
console.log('SMTP_USER:', process.env.SMTP_USER || 'NOT SET');
console.log('SMTP_PASS:', process.env.SMTP_PASS ? '***CONFIGURED***' : 'NOT SET');
console.log('CONTACT_RECEIVER:', process.env.CONTACT_RECEIVER || 'NOT SET');
console.log('===================================');

// Test endpoint to check server status and environment variables
app.get('/api/test', (req, res) => {
  console.log('=== TEST ENDPOINT CALLED ===');
  res.json({
    status: 'Server is running',
    timestamp: new Date().toISOString(),
    envCheck: {
      SMTP_HOST: process.env.SMTP_HOST || 'NOT SET',
      SMTP_PORT: process.env.SMTP_PORT || 'NOT SET',
      SMTP_USER: process.env.SMTP_USER || 'NOT SET',
      SMTP_PASS: process.env.SMTP_PASS ? 'CONFIGURED' : 'NOT SET',
      CONTACT_RECEIVER: process.env.CONTACT_RECEIVER || 'NOT SET'
    }
  });
});

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

app.post('/api/contact', async (req, res) => {
  console.log('=== CONTACT FORM SUBMISSION START ===');
  console.log('Request body:', JSON.stringify(req.body, null, 2));
  console.log('Environment variables check:');
  console.log('SMTP_HOST:', process.env.SMTP_HOST);
  console.log('SMTP_PORT:', process.env.SMTP_PORT);
  console.log('SMTP_USER:', process.env.SMTP_USER);
  console.log('SMTP_PASS:', process.env.SMTP_PASS ? '***configured***' : 'NOT SET');
  console.log('CONTACT_RECEIVER:', process.env.CONTACT_RECEIVER);

  const { name, country, orgType, orgName, email, phoneCode, phone, message } = req.body;

  // Validate required fields
  const missingFields = [];
  if (!name) missingFields.push("name");
  if (!country) missingFields.push("country");
  if (!orgType) missingFields.push("orgType");
  if (!orgName) missingFields.push("orgName");
  if (!email) missingFields.push("email");
  if (!phoneCode) missingFields.push("phoneCode");
  if (!phone) missingFields.push("phone");

  if (missingFields.length > 0) {
    console.log('=== VALIDATION ERROR ===');
    console.log('Missing fields:', missingFields);
    return res.status(400).json({
      error: `Missing required field(s): ${missingFields.join(", ")}`,
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log('=== EMAIL VALIDATION ERROR ===');
    console.log('Invalid email:', email);
    return res.status(400).json({
      error: 'Please enter a valid email address',
    });
  }

  // Check if all required environment variables are set
  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_RECEIVER) {
    console.log('=== ENVIRONMENT VARIABLES ERROR ===');
    console.log('Missing environment variables');
    return res.status(500).json({ 
      error: "Email server configuration error. Missing environment variables." 
    });
  }

  // Create transporter with environment variables
  let transporter;
  try {
    console.log('=== CREATING TRANSPORTER ===');
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    console.log('Transporter created successfully');
  } catch (err) {
    console.error("=== TRANSPORTER CREATION ERROR ===");
    console.error(err);
    return res.status(500).json({ error: "Email server configuration error." });
  }

  // Verify SMTP connection
  try {
    console.log('=== VERIFYING SMTP CONNECTION ===');
    await transporter.verify();
    console.log("SMTP connection verified successfully");
  } catch (err) {
    console.error("=== SMTP VERIFICATION FAILED ===");
    console.error(err);
    return res.status(500).json({
      error: "Unable to connect to mail server. Please check SMTP settings.",
    });
  }

  // Sanitize input data
  const safeName = escapeHtml(name.trim());
  const safeCountry = escapeHtml(country.trim());
  const safeOrgType = escapeHtml(orgType.trim());
  const safeOrgName = escapeHtml(orgName.trim());
  const safeEmail = escapeHtml(email.trim());
  const safePhoneCode = escapeHtml(phoneCode.trim());
  const safePhone = escapeHtml(phone.trim());
  const safeMessage = escapeHtml(message?.trim() || "");

  // Get organization type label
  const orgTypeLabels = {
    school: "School",
    university: "University",
    nonprofit: "Non-Profit Organization",
    government: "Government Agency",
    corporate: "Corporate",
    individual: "Individual"
  };

  const orgTypeLabel = orgTypeLabels[safeOrgType] || safeOrgType;

  // Email options
  const mailOptions = {
    from: `"${safeName}" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER,
    replyTo: safeEmail,
    subject: `New Contact Form Submission from ${safeName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 15px; margin-bottom: 25px;">
            📧 New Contact Form Submission
          </h2>

          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: white; margin-top: 0; margin-bottom: 15px;">👤 Personal Information</h3>
            <table style="width: 100%; color: white;">
              <tr>
                <td style="padding: 5px 0; font-weight: bold;">Name:</td>
                <td style="padding: 5px 0;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 5px 0; font-weight: bold;">Email:</td>
                <td style="padding: 5px 0;">${safeEmail}</td>
              </tr>
              <tr>
                <td style="padding: 5px 0; font-weight: bold;">Phone:</td>
                <td style="padding: 5px 0;">+${safePhoneCode} ${safePhone}</td>
              </tr>
              <tr>
                <td style="padding: 5px 0; font-weight: bold;">Country:</td>
                <td style="padding: 5px 0;">${safeCountry}</td>
              </tr>
            </table>
          </div>

          <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: white; margin-top: 0; margin-bottom: 15px;">🏢 Organization Details</h3>
            <table style="width: 100%; color: white;">
              <tr>
                <td style="padding: 5px 0; font-weight: bold;">Organization Type:</td>
                <td style="padding: 5px 0;">${orgTypeLabel}</td>
              </tr>
              <tr>
                <td style="padding: 5px 0; font-weight: bold;">Organization Name:</td>
                <td style="padding: 5px 0;">${safeOrgName}</td>
              </tr>
            </table>
          </div>

          ${safeMessage ? `
          <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: white; margin-top: 0; margin-bottom: 15px;">💬 Message</h3>
            <div style="background: rgba(255,255,255,0.2); padding: 15px; border-radius: 5px; color: white; white-space: pre-wrap; font-family: inherit;">${safeMessage}</div>
          </div>
          ` : `
          <div style="background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%); padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2d3436; margin-top: 0; margin-bottom: 10px;">💬 Message</h3>
            <p style="margin: 0; color: #2d3436; font-style: italic;">No message provided</p>
          </div>
          `}

          <div style="margin-top: 30px; padding: 20px; background-color: #ecf0f1; border-radius: 8px; border-left: 4px solid #3498db;">
            <h4 style="color: #2c3e50; margin-top: 0;">📋 Quick Actions</h4>
            <p style="margin: 10px 0; color: #34495e;">
              <strong>Reply to:</strong> <a href="mailto:${safeEmail}" style="color: #3498db; text-decoration: none;">${safeEmail}</a>
            </p>
            <p style="margin: 10px 0; color: #34495e;">
              <strong>Call:</strong> <a href="tel:+${safePhoneCode}${safePhone}" style="color: #3498db; text-decoration: none;">+${safePhoneCode} ${safePhone}</a>
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #bdc3c7; color: #7f8c8d; font-size: 12px; text-align: center;">
            <p style="margin: 0;">This email was sent from your website contact form</p>
            <p style="margin: 5px 0 0 0;">📅 ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </div>
    `,
  };

  // Send email
  try {
    console.log('=== SENDING EMAIL ===');
    console.log('Mail options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      replyTo: mailOptions.replyTo,
      subject: mailOptions.subject
    });
    
    const info = await transporter.sendMail(mailOptions);
    console.log("=== EMAIL SENT SUCCESSFULLY ===");
    console.log("Message ID:", info.messageId);
    console.log("Response:", info.response);
    
    return res.status(200).json({ 
      success: true, 
      message: "Email sent successfully",
      messageId: info.messageId 
    });
  } catch (error) {
    console.error("=== ERROR SENDING EMAIL ===");
    console.error(error);
    return res.status(500).json({
      error: "Failed to send email. Please try again later.",
      details: error.message
    });
  }
});

// Add error handling for the server
process.on('uncaughtException', (err) => {
  console.error('=== UNCAUGHT EXCEPTION ===');
  console.error(err);
  process.exit(1);
});

process.on('unhandledRejection', (err) => {
  console.error('=== UNHANDLED REJECTION ===');
  console.error(err);
});

console.log('=== STARTING SERVER ===');
console.log('Setting up server to listen on port:', PORT);

app.listen(PORT, '0.0.0.0', (err) => {
  if (err) {
    console.error('=== SERVER FAILED TO START ===');
    console.error(err);
    return;
  }

  console.log(`=== EXPRESS SERVER STARTED SUCCESSFULLY ===`);
  console.log(`API server running on http://0.0.0.0:${PORT}`);
  console.log('Available endpoints:');
  console.log(`- GET  http://0.0.0.0:${PORT}/api/test`);
  console.log(`- POST http://0.0.0.0:${PORT}/api/contact`);
  console.log(`Environment configuration:`);
  console.log(`- SMTP_HOST: ${process.env.SMTP_HOST || 'NOT SET'}`);
  console.log(`- SMTP_PORT: ${process.env.SMTP_PORT || 'NOT SET'}`);
  console.log(`- SMTP_USER: ${process.env.SMTP_USER || 'NOT SET'}`);
  console.log(`- SMTP_PASS: ${process.env.SMTP_PASS ? 'CONFIGURED' : 'NOT SET'}`);
  console.log(`- CONTACT_RECEIVER: ${process.env.CONTACT_RECEIVER || 'NOT SET'}`);
  console.log(`=== SERVER READY TO ACCEPT REQUESTS ===`);
});
