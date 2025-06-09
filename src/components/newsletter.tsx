import React from 'react';
import { Input, Button } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };
  
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Stay Updated</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on upcoming events, workshops, and educational resources
          </p>
        </motion.div>
        
        <div className="max-w-md mx-auto">
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon="lucide:check" className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Thank You!</h3>
              <p>You've successfully subscribed to our newsletter.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onValueChange={setEmail}
                variant="bordered"
                radius="full"
                classNames={{
                  input: "text-white",
                  inputWrapper: "bg-white/20 backdrop-blur-sm border-white/30 hover:border-white focus-within:border-white"
                }}
                startContent={
                  <Icon icon="lucide:mail" className="text-white/70" />
                }
                required
              />
              <Button 
                type="submit" 
                color="warning" 
                radius="full"
                className="font-medium"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};