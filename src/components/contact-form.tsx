import React from 'react';
import { Card, CardBody, Input, Textarea, Button, Select, SelectItem } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation would go here
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset the form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };
  
  const subjects = [
    { value: "general", label: "General Inquiry" },
    { value: "partnership", label: "School Partnership" },
    { value: "volunteer", label: "Volunteer Opportunities" },
    { value: "donation", label: "Donations & Sponsorships" },
    { value: "workshop", label: "Workshop Request" }
  ];
  
  return (
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
            <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
            <p className="text-default-600">
              Thank you for reaching out. We'll get back to you as soon as possible.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                placeholder="Enter your name"
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Phone Number"
                placeholder="Enter your phone number"
                value={formData.phone}
                onValueChange={(value) => handleChange('phone', value)}
                variant="bordered"
                startContent={
                  <Icon icon="lucide:phone" className="text-default-400 text-sm" />
                }
              />
              
              <Select
                label="Subject"
                placeholder="Select a subject"
                selectedKeys={formData.subject ? [formData.subject] : []}
                onSelectionChange={(keys) => {
                  const selected = Array.from(keys)[0] as string;
                  handleChange('subject', selected);
                }}
                variant="bordered"
                isRequired
                startContent={
                  <Icon icon="lucide:list" className="text-default-400 text-sm" />
                }
              >
                {subjects.map((subject) => (
                  <SelectItem key={subject.value} value={subject.value}>
                    {subject.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            
            <Textarea
              label="Message"
              placeholder="Enter your message"
              value={formData.message}
              onValueChange={(value) => handleChange('message', value)}
              variant="bordered"
              minRows={4}
              isRequired
            />
            
            <div className="flex justify-end">
              <Button 
                type="submit" 
                color="primary"
                size="lg"
                className="font-medium"
                endContent={<Icon icon="lucide:send" />}
              >
                Send Message
              </Button>
            </div>
          </form>
        )}
      </CardBody>
    </Card>
  );
};