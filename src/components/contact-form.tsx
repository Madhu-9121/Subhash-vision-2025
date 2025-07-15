import React from 'react';
import { Card, CardBody, Input, Textarea, Button, Select, SelectItem } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phoneCode: '',
    phone: '',
    country: '',
    orgType: '',
    orgName: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (error) setError(null);
  };
  
  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phoneCode', 'phone', 'country', 'orgType', 'orgName'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      setError(`Please fill in all required fields: ${missingFields.join(', ')}`);
      setIsLoading(false);
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }
    
    try {
      // Send to Vercel serverless function
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phoneCode: '',
          phone: '',
          country: '',
          orgType: '',
          orgName: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setError(result.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
      console.error('Contact form error:', err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const countries = [
    { value: "United States", label: "United States" },
    { value: "Canada", label: "Canada" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "Australia", label: "Australia" },
    { value: "India", label: "India" },
    { value: "Germany", label: "Germany" },
    { value: "France", label: "France" },
    { value: "Other", label: "Other" }
  ];
  
  const organizationTypes = [
    { value: "school", label: "School" },
    { value: "university", label: "University" },
    { value: "nonprofit", label: "Non-Profit Organization" },
    { value: "government", label: "Government Agency" },
    { value: "corporate", label: "Corporate" },
    { value: "individual", label: "Individual" }
  ];
  
  const phoneCodes = [
    { value: "1", label: "+1 (US/CA)" },
    { value: "44", label: "+44 (UK)" },
    { value: "91", label: "+91 (IN)" },
    { value: "61", label: "+61 (AU)" },
    { value: "49", label: "+49 (DE)" },
    { value: "33", label: "+33 (FR)" }
  ];
  
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Setup Instructions */}
      <Card className="mb-6 border-blue-200 bg-blue-50">
        <CardBody className="p-4">
          <div className="flex items-start gap-3">
            <Icon icon="lucide:info" className="text-blue-600 text-xl flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-blue-800 font-semibold mb-2">Vercel Deployment Setup</h3>
              <div className="text-blue-700 text-sm space-y-2">
                <p>To make this form work on Vercel, you need to:</p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>Create an <code className="bg-blue-100 px-1 rounded">api/contact.js</code> file in your project root</li>
                  <li>Add environment variables in Vercel dashboard</li>
                  <li>Configure your email provider settings</li>
                  <li>Deploy to Vercel</li>
                </ol>
                <p className="mt-2">
                  <strong>Required Environment Variables:</strong><br/>
                  <code className="bg-blue-100 px-1 rounded text-xs">
                    SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_RECEIVER
                  </code>
                </p>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      
      <Card className="w-full">
        <CardBody className="p-6">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon="lucide:check" className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
              <p className="text-default-600">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-danger-50 border border-danger-200 rounded-lg p-4 flex items-center gap-3"
                >
                  <Icon icon="lucide:alert-circle" className="text-danger text-xl flex-shrink-0" />
                  <p className="text-danger text-sm">{error}</p>
                </motion.div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onValueChange={(value) => handleChange('name', value)}
                  variant="bordered"
                  isRequired
                  startContent={
                    <Icon icon="lucide:user" className="text-default-400 text-sm" />
                  }
                />
                
                <Input
                  label="Email Address"
                  placeholder="Enter your email"
                  value={formData.email}
                  onValueChange={(value) => handleChange('email', value)}
                  variant="bordered"
                  type="email"
                  isRequired
                  startContent={
                    <Icon icon="lucide:mail" className="text-default-400 text-sm" />
                  }
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Select
                  label="Phone Code"
                  placeholder="Select code"
                  selectedKeys={formData.phoneCode ? [formData.phoneCode] : []}
                  onSelectionChange={(keys) => {
                    const selected = Array.from(keys)[0] as string;
                    handleChange('phoneCode', selected);
                  }}
                  variant="bordered"
                  isRequired
                  startContent={
                    <Icon icon="lucide:phone" className="text-default-400 text-sm" />
                  }
                >
                  {phoneCodes.map((code) => (
                    <SelectItem key={code.value} value={code.value}>
                      {code.label}
                    </SelectItem>
                  ))}
                </Select>
                
                <Input
                  label="Phone Number"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onValueChange={(value) => handleChange('phone', value)}
                  variant="bordered"
                  isRequired
                  className="md:col-span-2"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select
                  label="Country"
                  placeholder="Select your country"
                  selectedKeys={formData.country ? [formData.country] : []}
                  onSelectionChange={(keys) => {
                    const selected = Array.from(keys)[0] as string;
                    handleChange('country', selected);
                  }}
                  variant="bordered"
                  isRequired
                  startContent={
                    <Icon icon="lucide:globe" className="text-default-400 text-sm" />
                  }
                >
                  {countries.map((country) => (
                    <SelectItem key={country.value} value={country.value}>
                      {country.label}
                    </SelectItem>
                  ))}
                </Select>
                
                <Select
                  label="Organization Type"
                  placeholder="Select organization type"
                  selectedKeys={formData.orgType ? [formData.orgType] : []}
                  onSelectionChange={(keys) => {
                    const selected = Array.from(keys)[0] as string;
                    handleChange('orgType', selected);
                  }}
                  variant="bordered"
                  isRequired
                  startContent={
                    <Icon icon="lucide:building" className="text-default-400 text-sm" />
                  }
                >
                  {organizationTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              
              <Input
                label="Organization Name"
                placeholder="Enter your organization name"
                value={formData.orgName}
                onValueChange={(value) => handleChange('orgName', value)}
                variant="bordered"
                isRequired
                startContent={
                  <Icon icon="lucide:building-2" className="text-default-400 text-sm" />
                }
              />
              
              <Textarea
                label="Message"
                placeholder="Enter your message (optional)"
                value={formData.message}
                onValueChange={(value) => handleChange('message', value)}
                variant="bordered"
                minRows={4}
              />
              
              <div className="flex justify-end">
                <Button 
                  onClick={handleSubmit}
                  color="primary"
                  size="lg"
                  className="font-medium"
                  isLoading={isLoading}
                  disabled={isLoading}
                  endContent={!isLoading && <Icon icon="lucide:send" />}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};