import React from 'react';
import { Card, CardBody, Image, Button, Divider } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const AboutPage: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Kalam's Vision</h1>
            <p className="text-xl text-default-600 mb-8">
              Inspired by Dr. APJ Abdul Kalam's dream of empowering young minds through education and innovation
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-2">Our Story</h2>
              <div className="section-divider"></div>
              <p className="text-default-600 mb-6">
                Kalam's Vision was founded in 2018 with a simple yet powerful mission: to bring the joy of scientific discovery to children across India, inspired by Dr. APJ Abdul Kalam's vision of a developed nation powered by knowledge and innovation.
              </p>
              <p className="text-default-600 mb-6">
                Just as Dr. Kalam was inspired by a flying bird to dream of flying himself, we aim to spark that same curiosity and wonder in children. Our organization began with small workshops in local schools and has since grown to reach thousands of students across multiple cities.
              </p>
              <p className="text-default-600 mb-6">
                We believe that every child, regardless of background or resources, deserves access to quality science and technology education that inspires them to dream big and achieve bigger.
              </p>
              <div className="flex items-center gap-3 text-primary">
                <Icon icon="lucide:quote" className="text-2xl" />
                <p className="text-lg font-medium italic">
                  "Dream is not what you see in sleep, dream is something which doesn't let you sleep."
                </p>
              </div>
              <p className="text-right text-default-500">- Dr. APJ Abdul Kalam</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-full h-full rounded-xl bg-primary opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl bg-secondary opacity-20"></div>
              <Image
                src="https://img.heroui.chat/image/ai?w=600&h=500&u=kalam-vision-story"
                alt="Children in a science workshop"
                className="w-full h-auto rounded-xl shadow-xl relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Core Values</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-default-600 max-w-2xl mx-auto">
              The principles that guide our work and inspire our commitment to education
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="h-full">
              <CardBody className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center mb-4">
                  <Icon icon="lucide:lightbulb" className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-default-600">
                  We embrace creative approaches to education, constantly seeking new ways to make learning engaging and effective.
                </p>
              </CardBody>
            </Card>
            
            <Card className="h-full">
              <CardBody className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-secondary-100 dark:bg-secondary-800 flex items-center justify-center mb-4">
                  <Icon icon="lucide:users" className="text-3xl text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
                <p className="text-default-600">
                  We believe in providing equal opportunities for all children, regardless of their background or circumstances.
                </p>
              </CardBody>
            </Card>
            
            <Card className="h-full">
              <CardBody className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-success-100 dark:bg-success-800 flex items-center justify-center mb-4">
                  <Icon icon="lucide:book-open" className="text-3xl text-success" />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-default-600">
                  We strive for the highest quality in all our educational programs, materials, and interactions.
                </p>
              </CardBody>
            </Card>
            
            <Card className="h-full">
              <CardBody className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-warning-100 dark:bg-warning-800 flex items-center justify-center mb-4">
                  <Icon icon="lucide:heart" className="text-3xl text-warning" />
                </div>
                <h3 className="text-xl font-bold mb-2">Passion</h3>
                <p className="text-default-600">
                  We approach our mission with enthusiasm and dedication, inspired by Dr. Kalam's own passion for education.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Team</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-default-600 max-w-2xl mx-auto">
              Meet the passionate educators, scientists, and innovators behind Kalam's Vision
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((member) => (
              <Card key={member} className="h-full">
                <CardBody className="p-0">
                  <Image
                    src={`https://img.heroui.chat/image/avatar?w=400&h=400&u=team${member}`}
                    alt={`Team Member ${member}`}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">Team Member {member}</h3>
                    <p className="text-primary mb-3">Position Title</p>
                    <p className="text-default-600 mb-4">
                      Brief description about the team member's background, expertise, and passion for education.
                    </p>
                    <div className="flex gap-3">
                      <Button isIconOnly variant="light" size="sm" aria-label="LinkedIn">
                        <Icon icon="lucide:linkedin" />
                      </Button>
                      <Button isIconOnly variant="light" size="sm" aria-label="Twitter">
                        <Icon icon="lucide:twitter" />
                      </Button>
                      <Button isIconOnly variant="light" size="sm" aria-label="Email">
                        <Icon icon="lucide:mail" />
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              color="primary" 
              variant="bordered"
              size="lg"
              endContent={<Icon icon="lucide:users" />}
            >
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
      
      {/* Partners */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Partners</h2>
            <div className="section-divider mx-auto"></div>
            <p className="text-default-600 max-w-2xl mx-auto">
              Organizations and institutions that collaborate with us to make our mission possible
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {[1, 2, 3, 4, 5, 6].map((partner) => (
              <Card key={partner} className="h-full">
                <CardBody className="p-6 flex items-center justify-center">
                  <div className="w-24 h-24 flex items-center justify-center">
                    <Icon icon={`logos:${['google', 'microsoft', 'apple', 'amazon', 'facebook', 'twitter'][partner - 1]}`} className="text-6xl" />
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
          
          <Divider className="my-12" />
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Become a Partner</h3>
            <p className="text-default-600 max-w-2xl mx-auto mb-8">
              Join us in our mission to inspire the next generation of scientists, engineers, and innovators. Together, we can make a difference.
            </p>
            <Button 
              color="secondary" 
              size="lg"
              endContent={<Icon icon="lucide:handshake" />}
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;