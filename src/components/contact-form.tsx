import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardBody, Input, Select, SelectItem, Textarea, Button } from '@heroui/react';
import { Icon } from '@iconify/react';

interface ToastState {
  show: boolean;
  type: 'success' | 'error' | 'info';
  message: string;
  title?: string;
}

export const ContactForm = () => {
  const [toast, setToast] = useState<ToastState>({ show: false, type: 'info', message: '' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneCode: '91',
    phone: '',
    country: '',
    orgType: '',
    orgName: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const showToast = (type: 'success' | 'error' | 'info', message: string, title?: string) => {
    setToast({ show: true, type, message, title });
    setTimeout(() => {
      setToast({ show: false, type: 'info', message: '' });
    }, 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      console.log('Sending contact form data:', formData);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (response.ok) {
        const result = await response.json();
        console.log('Success response:', result);

        setIsSubmitted(true);
        showToast('success', "Thank you for reaching out. We'll get back to you soon.", "Message Sent Successfully!");

        // Reset form
        setFormData({
          name: '',
          email: '',
          phoneCode: '91',
          phone: '',
          country: '',
          orgType: '',
          orgName: '',
          message: ''
        });
      } else {
        let errorMessage = 'Failed to send message. Please try again.';
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch (jsonError) {
          console.error('Error parsing error response:', jsonError);
          errorMessage = `Server error (${response.status}). Please try again later.`;
        }

        console.error('Server error:', errorMessage);
        setError(errorMessage);
        showToast('error', errorMessage, "Failed to Send Message");
      }
    } catch (error) {
      console.error('Contact form error:', error);
      const networkError = 'Network error. Please check your connection and try again.';
      setError(networkError);
      showToast('error', networkError, "Connection Error");
    } finally {
      setIsSubmitting(false);
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
      {/* Toast Notification */}
      {toast.show && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center gap-3 ${
            toast.type === 'success' 
              ? 'bg-success text-success-foreground' 
              : toast.type === 'error' 
              ? 'bg-danger text-danger-foreground' 
              : 'bg-primary text-primary-foreground'
          }`}
        >
          <Icon 
            icon={
              toast.type === 'success' 
                ? 'lucide:check-circle' 
                : toast.type === 'error' 
                ? 'lucide:alert-circle' 
                : 'lucide:info'
            } 
            className="text-xl" 
          />
          <div>
            {toast.title && <p className="font-bold">{toast.title}</p>}
            <p className={toast.title ? "text-sm" : "font-medium"}>{toast.message}</p>
          </div>
        </motion.div>
      )}

      {/* Environment Variables Check */}
      <Card className="mb-6 border-orange-200 bg-orange-50">
        <CardBody className="p-4">
          <div className="flex items-start gap-3">
            <Icon icon="lucide:settings" className="text-orange-600 text-xl flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-orange-800 font-semibold mb-2">Email Configuration Status</h3>
              <div className="text-orange-700 text-sm space-y-2">
                <p>Current environment variables in .env file:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>SMTP_HOST:</strong> smtp.hostinger.com</li>
                  <li><strong>SMTP_PORT:</strong> 587</li>
                  <li><strong>SMTP_USER:</strong> info@kalamvision.com</li>
                  <li><strong>CONTACT_RECEIVER:</strong> info@kalamvision.com</li>
                </ul>
                <p className="mt-2 text-xs">
                  <strong>Note:</strong> Make sure your Express server (server.js) is running on port 3001 and accessible.
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
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  endContent={!isSubmitting && <Icon icon="lucide:send" />}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
};