import React from 'react';
import { Button, Link } from '@heroui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary"></div>
        <div className="absolute top-40 right-20 w-32 h-32 rounded-full bg-secondary"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 rounded-full bg-success"></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 rounded-full bg-warning"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="flex-1 mb-10 md:mb-0 md:pr-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Inspiring Young Minds with <span className="text-gradient">Science & Technology</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-default-700 max-w-2xl">
              Following Dr. APJ Abdul Kalam's vision, we're nurturing curiosity and innovation in children through interactive learning experiences that make complex concepts simple and exciting.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                as={RouterLink}
                to="/events"
                color="primary"
                size="lg"
                variant="shadow"
                className="font-semibold"
              >
                Explore Our Programs
              </Button>
              <Button
                as={RouterLink}
                to="/contact"
                color="secondary"
                size="lg"
                variant="bordered"
                className="font-semibold"
              >
                Get Involved
              </Button>
            </div>
            
            <div className="flex items-center gap-2 mt-8">
              <Icon icon="lucide:users" className="text-primary" />
              <span className="text-default-600">
                Inspiring over <strong>10,000+</strong> young minds across India
              </span>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-full rounded-xl bg-primary opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl bg-secondary opacity-20"></div>
              <img
                src="https://img.heroui.chat/image/ai?w=600&h=500&u=kalam-vision-hero"
                alt="Children learning with technology"
                className="w-full h-auto rounded-xl shadow-xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-content1 p-3 rounded-lg shadow-lg z-20 animate-float">
                <div className="flex items-center gap-2">
                  <Icon icon="lucide:rocket" className="text-primary text-xl" />
                  <span className="font-semibold">Dream Big, Achieve Bigger!</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            className="text-background"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};