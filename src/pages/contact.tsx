import React from 'react';
import { Card, CardBody, Divider } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { ContactForm } from '../components/contact-form';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-default-600">
              Have questions or want to get involved? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
              <div className="section-divider"></div>
              <p className="text-default-600 mb-8">
                We're here to answer any questions you may have about our events, programs, or how you can contribute to our mission.
              </p>
              
              <div className="space-y-6">
                <Card>
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-800 text-primary">
                        <Icon icon="lucide:map-pin" className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                        <p className="text-default-600">
                          123 Education Street<br />
                          Innovation City, 600001<br />
                          Tamil Nadu, India
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card>
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary">
                        <Icon icon="lucide:phone" className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Phone</h3>
                        <p className="text-default-600">
                          Main: +91 98765 43210<br />
                          Support: +91 98765 43211
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card>
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-success-100 dark:bg-success-800 text-success">
                        <Icon icon="lucide:mail" className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Email</h3>
                        <p className="text-default-600">
                          General: info@kalamsvision.org<br />
                          Programs: programs@kalamsvision.org<br />
                          Support: support@kalamsvision.org
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                
                <Card>
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-warning-100 dark:bg-warning-800 text-warning">
                        <Icon icon="lucide:clock" className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Office Hours</h3>
                        <p className="text-default-600">
                          Monday - Friday: 9:00 AM - 5:00 PM<br />
                          Saturday: 10:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
              
              <Divider className="my-8" />
              
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="p-3 rounded-full bg-content2 hover:bg-primary/20 transition-colors">
                  <Icon icon="lucide:facebook" className="text-xl text-primary" />
                </a>
                <a href="#" className="p-3 rounded-full bg-content2 hover:bg-primary/20 transition-colors">
                  <Icon icon="lucide:twitter" className="text-xl text-primary" />
                </a>
                <a href="#" className="p-3 rounded-full bg-content2 hover:bg-primary/20 transition-colors">
                  <Icon icon="lucide:instagram" className="text-xl text-primary" />
                </a>
                <a href="#" className="p-3 rounded-full bg-content2 hover:bg-primary/20 transition-colors">
                  <Icon icon="lucide:youtube" className="text-xl text-primary" />
                </a>
                <a href="#" className="p-3 rounded-full bg-content2 hover:bg-primary/20 transition-colors">
                  <Icon icon="lucide:linkedin" className="text-xl text-primary" />
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
              <div className="section-divider"></div>
              <p className="text-default-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-2">Find Us</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-default-600 max-w-2xl mx-auto">
              Visit our office to learn more about our programs or to attend one of our events
            </p>
          </motion.div>
          
          <Card className="overflow-hidden">
            <CardBody className="p-0 h-[400px]">
              {/* Placeholder for an actual map implementation */}
              <div className="w-full h-full bg-default-100 flex items-center justify-center">
                <div className="text-center">
                  <Icon icon="lucide:map" className="text-5xl text-default-400 mb-4" />
                  <p className="text-default-600">Interactive map will be displayed here</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-default-600 max-w-2xl mx-auto">
              Find answers to common questions about our programs and organization
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold mb-2">How can schools partner with Kalam's Vision?</h3>
                <p className="text-default-600">
                  Schools can partner with us by reaching out through our contact form or emailing us at partnerships@kalamsvision.org. We offer various programs that can be tailored to your school's needs.
                </p>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold mb-2">Are your programs suitable for all age groups?</h3>
                <p className="text-default-600">
                  Yes, we design programs for students from grades 1 through 10, with content and activities tailored to different age groups and learning levels.
                </p>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold mb-2">How can I volunteer with Kalam's Vision?</h3>
                <p className="text-default-600">
                  We welcome volunteers who are passionate about science education! Please fill out our volunteer form on the contact page, and our team will reach out to discuss opportunities.
                </p>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold mb-2">Do you offer scholarships for your programs?</h3>
                <p className="text-default-600">
                  Yes, we have scholarship programs for students from underprivileged backgrounds. Please contact us for more information about eligibility and application process.
                </p>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold mb-2">Can you bring your programs to our location?</h3>
                <p className="text-default-600">
                  Absolutely! Many of our programs are mobile and can be conducted at schools, community centers, or other venues. Contact us to discuss logistics and requirements.
                </p>
              </CardBody>
            </Card>
            
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold mb-2">How can I support Kalam's Vision?</h3>
                <p className="text-default-600">
                  You can support us through donations, volunteering, spreading awareness about our programs, or partnering with us as a sponsor. Every contribution helps us reach more children.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;