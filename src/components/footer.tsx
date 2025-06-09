import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import { Logo } from './logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-content2 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <Logo size={40} />
              <div className="flex flex-col">
                <p className="font-bold text-lg">Kalam's Vision</p>
                <p className="text-tiny text-default-500">Ignite curiosity, build tomorrow</p>
              </div>
            </div>
            <p className="text-default-600 mb-4">
              Inspiring young minds through interactive science and technology education, following the vision of Dr. APJ Abdul Kalam.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="#" isExternal aria-label="Facebook">
                <Icon icon="lucide:facebook" className="text-2xl text-default-600 hover:text-primary transition-colors" />
              </Link>
              <Link href="#" isExternal aria-label="Twitter">
                <Icon icon="lucide:twitter" className="text-2xl text-default-600 hover:text-primary transition-colors" />
              </Link>
              <Link href="#" isExternal aria-label="Instagram">
                <Icon icon="lucide:instagram" className="text-2xl text-default-600 hover:text-primary transition-colors" />
              </Link>
              <Link href="#" isExternal aria-label="YouTube">
                <Icon icon="lucide:youtube" className="text-2xl text-default-600 hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link as={RouterLink} to="/" color="foreground" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link as={RouterLink} to="/about" color="foreground" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link as={RouterLink} to="/events" color="foreground" className="hover:text-primary transition-colors">
                  Our Events
                </Link>
              </li>
              <li>
                <Link as={RouterLink} to="/upcoming-events" color="foreground" className="hover:text-primary transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link as={RouterLink} to="/contact" color="foreground" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" color="foreground" className="hover:text-primary transition-colors">
                  Science Projects
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" className="hover:text-primary transition-colors">
                  Technology Workshops
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" className="hover:text-primary transition-colors">
                  Educational Videos
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" className="hover:text-primary transition-colors">
                  Dr. Kalam's Books
                </Link>
              </li>
              <li>
                <Link href="#" color="foreground" className="hover:text-primary transition-colors">
                  Learning Materials
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon icon="lucide:map-pin" className="text-primary mt-1" />
                <span>123 Education Street, Innovation City, 600001</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:phone" className="text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:mail" className="text-primary" />
                <span>info@kalamsvision.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:clock" className="text-primary" />
                <span>Mon-Fri: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Divider className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-default-500 text-sm">
            © {new Date().getFullYear()} Kalam's Vision. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="#" color="foreground" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" color="foreground" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" color="foreground" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};