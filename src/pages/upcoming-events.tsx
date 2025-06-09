import React from 'react';
import { Card, CardBody, Button, Chip, Divider } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface Event {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  category: string;
  categoryColor: "primary" | "secondary" | "success" | "warning";
  registrationOpen: boolean;
  featured: boolean;
}

const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "National Science Day Celebration",
    description: "Join us for a day filled with exciting experiments, demonstrations, and interactive sessions celebrating the spirit of scientific inquiry.",
    image: "https://img.heroui.chat/image/ai?w=800&h=400&u=science-day",
    date: "February 28, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Science Center, Chennai",
    category: "Exhibition",
    categoryColor: "primary",
    registrationOpen: true,
    featured: true
  },
  {
    id: 2,
    title: "Young Innovators Challenge",
    description: "A competition for students to showcase their innovative ideas and solutions to real-world problems using science and technology.",
    image: "https://img.heroui.chat/image/ai?w=800&h=400&u=innovators-challenge",
    date: "March 15-16, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Convention Center, Bangalore",
    category: "Competition",
    categoryColor: "secondary",
    registrationOpen: true,
    featured: true
  },
  {
    id: 3,
    title: "Space Week 2025",
    description: "A week-long celebration of space exploration with workshops, talks by scientists, stargazing sessions, and interactive exhibits.",
    image: "https://img.heroui.chat/image/ai?w=800&h=400&u=space-week",
    date: "April 10-17, 2025",
    time: "Various timings",
    location: "Planetarium, Delhi",
    category: "Festival",
    categoryColor: "success",
    registrationOpen: false,
    featured: true
  },
  {
    id: 4,
    title: "Robotics Summer Camp",
    description: "A two-week intensive camp where children learn to design, build, and program robots while having fun and making friends.",
    image: "https://img.heroui.chat/image/ai?w=600&h=400&u=robotics-camp",
    date: "May 5-19, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "Tech Hub, Mumbai",
    category: "Camp",
    categoryColor: "warning",
    registrationOpen: true,
    featured: false
  },
  {
    id: 5,
    title: "Environmental Science Workshop",
    description: "Learn about ecosystems, conservation, and sustainable practices through hands-on activities and field trips.",
    image: "https://img.heroui.chat/image/ai?w=600&h=400&u=environmental-workshop",
    date: "June 5, 2025",
    time: "10:00 AM - 3:00 PM",
    location: "Botanical Gardens, Kolkata",
    category: "Workshop",
    categoryColor: "primary",
    registrationOpen: false,
    featured: false
  },
  {
    id: 6,
    title: "Coding Bootcamp for Teens",
    description: "An intensive weekend program teaching the basics of programming and app development for students aged 13-16.",
    image: "https://img.heroui.chat/image/ai?w=600&h=400&u=coding-bootcamp",
    date: "July 12-13, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Digital Learning Center, Hyderabad",
    category: "Bootcamp",
    categoryColor: "secondary",
    registrationOpen: true,
    featured: false
  }
];

const UpcomingEventsPage: React.FC = () => {
  const featuredEvents = upcomingEvents.filter(event => event.featured);
  const regularEvents = upcomingEvents.filter(event => !event.featured);
  
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
            <p className="text-xl text-default-600">
              Discover our exciting lineup of upcoming workshops, exhibitions, and programs for young minds
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Featured Events */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-2">Featured Events</h2>
            <div className="section-divider"></div>
            <p className="text-default-600">
              Don't miss these special upcoming programs and exhibitions
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {featuredEvents.map((event) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <CardBody className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                      <div className="lg:col-span-2">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="lg:col-span-3 p-6 md:p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Chip color={event.categoryColor} variant="shadow">
                            {event.category}
                          </Chip>
                          {event.registrationOpen ? (
                            <Chip color="success" variant="dot">
                              Registration Open
                            </Chip>
                          ) : (
                            <Chip color="warning" variant="dot">
                              Coming Soon
                            </Chip>
                          )}
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">{event.title}</h3>
                        <p className="text-default-600 mb-6">{event.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center gap-2">
                            <Icon icon="lucide:calendar" className="text-primary" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Icon icon="lucide:clock" className="text-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2 md:col-span-2">
                            <Icon icon="lucide:map-pin" className="text-primary" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          <Button 
                            color="primary"
                            size="lg"
                            endContent={<Icon icon="lucide:arrow-right" />}
                          >
                            Event Details
                          </Button>
                          
                          {event.registrationOpen ? (
                            <Button 
                              color="secondary"
                              size="lg"
                              variant="flat"
                            >
                              Register Now
                            </Button>
                          ) : (
                            <Button 
                              color="default"
                              size="lg"
                              variant="flat"
                              isDisabled
                            >
                              Registration Coming Soon
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* More Upcoming Events */}
      <section className="py-16 bg-content2">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-2">More Upcoming Events</h2>
            <div className="section-divider"></div>
            <p className="text-default-600">
              Browse our complete calendar of upcoming activities and programs
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularEvents.map((event) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardBody className="p-0">
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
                      <div className="absolute top-3 right-3">
                        {event.registrationOpen ? (
                          <Chip color="success" variant="dot" size="sm">
                            Registration Open
                          </Chip>
                        ) : (
                          <Chip color="warning" variant="dot" size="sm">
                            Coming Soon
                          </Chip>
                        )}
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-default-600 mb-4">{event.description}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Icon icon="lucide:calendar" className="text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Icon icon="lucide:clock" className="text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Icon icon="lucide:map-pin" className="text-primary" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <Divider className="my-4" />
                      
                      <div className="flex gap-2">
                        <Button 
                          color="primary"
                          variant="flat"
                          className="flex-1"
                        >
                          Details
                        </Button>
                        
                        {event.registrationOpen ? (
                          <Button 
                            color="secondary"
                            className="flex-1"
                          >
                            Register
                          </Button>
                        ) : (
                          <Button 
                            color="default"
                            isDisabled
                            className="flex-1"
                          >
                            Soon
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Calendar Download */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardBody className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Never Miss an Event</h3>
                  <p className="text-white/80">
                    Download our complete events calendar to stay updated on all our upcoming programs and activities
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button 
                    color="warning"
                    variant="shadow"
                    size="lg"
                    startContent={<Icon icon="lucide:calendar" />}
                  >
                    Download Calendar
                  </Button>
                  <Button 
                    color="default"
                    variant="flat"
                    size="lg"
                    startContent={<Icon icon="lucide:bell" />}
                  >
                    Set Reminders
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEventsPage;