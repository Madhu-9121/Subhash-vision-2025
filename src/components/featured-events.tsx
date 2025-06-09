import React from 'react';
import { Card, CardBody, CardFooter, Button, Chip } from '@heroui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  category: string;
  categoryColor: "primary" | "secondary" | "success" | "warning";
}

const events: Event[] = [
  {
    id: 1,
    title: "Rocket Science Workshop",
    description: "Learn the basics of rocket science and build your own model rocket that actually flies!",
    image: "https://img.heroui.chat/image/ai?w=600&h=400&u=rocket-workshop",
    date: "June 15, 2024",
    location: "Science Center, Chennai",
    category: "Workshop",
    categoryColor: "primary"
  },
  {
    id: 2,
    title: "Robotics for Beginners",
    description: "Introduction to robotics where children learn to build and program simple robots.",
    image: "https://img.heroui.chat/image/ai?w=600&h=400&u=robotics-kids",
    date: "July 8, 2024",
    location: "Tech Hub, Bangalore",
    category: "Hands-on",
    categoryColor: "secondary"
  },
  {
    id: 3,
    title: "Science of Flight Exhibition",
    description: "Interactive exhibition explaining the principles of flight with live demonstrations.",
    image: "https://img.heroui.chat/image/ai?w=600&h=400&u=flight-science",
    date: "August 22, 2024",
    location: "Aviation Museum, Delhi",
    category: "Exhibition",
    categoryColor: "success"
  },
  {
    id: 4,
    title: "Coding Camp for Kids",
    description: "A fun-filled 3-day camp teaching basic programming concepts through games and activities.",
    image: "https://img.heroui.chat/image/ai?w=600&h=400&u=coding-kids",
    date: "September 5-7, 2024",
    location: "Digital Learning Center, Mumbai",
    category: "Camp",
    categoryColor: "warning"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const FeaturedEvents: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Events</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-default-600 max-w-2xl mx-auto">
            Explore our interactive programs designed to make learning science and technology fun and engaging for children
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {events.map((event) => (
            <motion.div key={event.id} variants={item}>
              <Card className="event-card h-full">
                <CardBody className="p-0 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <Chip color={event.categoryColor} variant="shadow" size="sm">
                        {event.category}
                      </Chip>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-default-600 mb-4">{event.description}</p>
                    <div className="flex items-center gap-2 text-sm text-default-500 mb-2">
                      <Icon icon="lucide:calendar" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-default-500">
                      <Icon icon="lucide:map-pin" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="flex justify-between items-center">
                  <Button 
                    as={RouterLink} 
                    to={`/events#event-${event.id}`}
                    color="primary" 
                    variant="flat"
                    className="w-full"
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-12">
          <Button 
            as={RouterLink} 
            to="/events"
            color="secondary" 
            variant="bordered"
            size="lg"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};