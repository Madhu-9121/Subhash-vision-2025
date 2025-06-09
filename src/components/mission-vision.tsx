import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const MissionVision: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Mission & Vision</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-default-600 max-w-2xl mx-auto">
            Following Dr. APJ Abdul Kalam's footsteps to inspire and educate the next generation
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardBody className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center">
                    <Icon icon="lucide:target" className="text-3xl text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Our Mission</h3>
                <p className="text-default-600 text-center mb-6">
                  To make science and technology education accessible, engaging, and fun for children across all backgrounds, fostering a generation of innovative thinkers who will shape the future of our nation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <Icon icon="lucide:check-circle" className="text-lg" />
                    </div>
                    <p>Create hands-on learning experiences that simplify complex concepts</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <Icon icon="lucide:check-circle" className="text-lg" />
                    </div>
                    <p>Develop curiosity and problem-solving skills in young minds</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <Icon icon="lucide:check-circle" className="text-lg" />
                    </div>
                    <p>Bridge the gap between theoretical knowledge and practical application</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-primary">
                      <Icon icon="lucide:check-circle" className="text-lg" />
                    </div>
                    <p>Reach underserved communities with quality STEM education</p>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardBody className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary-100 dark:bg-secondary-800 flex items-center justify-center">
                    <Icon icon="lucide:eye" className="text-3xl text-secondary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Our Vision</h3>
                <p className="text-default-600 text-center mb-6">
                  To create a nation of curious, creative, and capable young minds who are equipped to tackle the challenges of tomorrow through scientific thinking and technological innovation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-secondary">
                      <Icon icon="lucide:star" className="text-lg" />
                    </div>
                    <p>A scientifically literate society where innovation thrives</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-secondary">
                      <Icon icon="lucide:star" className="text-lg" />
                    </div>
                    <p>Equal opportunities for all children to explore STEM fields</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-secondary">
                      <Icon icon="lucide:star" className="text-lg" />
                    </div>
                    <p>A generation inspired by Dr. Kalam's vision of a developed India</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-secondary">
                      <Icon icon="lucide:star" className="text-lg" />
                    </div>
                    <p>Young leaders who combine technical knowledge with ethical values</p>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};