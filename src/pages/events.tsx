import React from 'react';
import { Card, CardBody, CardFooter, Button, Chip, Input, Select, SelectItem } from '@heroui/react';
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
  tags: string[];
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
    categoryColor: "primary",
    tags: ["Physics", "Engineering", "Hands-on"]
  },
  {
    id: 2,
    title: "Robotics for Beginners",
    description: "Introduction to robotics where children learn to build and program simple robots.",
    image: "https://img.heroui.chat/image/ai?w=600&h=400&u=robotics-kids",
    date: "July 8, 2024",
    location: "Tech Hub, Bangalore",
    category: "Hands-on",
    categoryColor: "secondary",
    tags: ["Robotics", "Programming", "Engineering"]
  },
  {
    id: 3,
    title: "Science of Flight Exhibition",
    description: "Interactive exhibition explaining the principles of flight with live demonstrations.",
    image: "https://img.heroui.chat/image/ai?w=600&h=400&u=flight-science",
    date: "August 22, 2024",
    location: "Aviation Museum, Delhi",
    category: "Exhibition",
    categoryColor: "success",
    tags: ["Physics", "Aviation", "Interactive"]
  },
  {
    id: 4,
    title: "Coding Camp for Kids",
    description: "A fun-filled 3-day camp teaching basic programming concepts through games and activities.",
    image: "https://img.heroui.chat/image/ai?w=600&h=400&u=coding-kids",
    date: "September 5-7, 2024",
    location: "Digital Learning Center, Mumbai",
    category: "Camp",
    categoryColor: "warning",
    tags: ["Coding", "Computer Science", "Games"]
  },
  {
    id: 5,
    title: "Chemistry Magic Show",
    description: "Exciting demonstrations of chemical reactions that seem like magic but teach important scientific principles.",
    image: "https://img.heroui.chat/image/ai?w=600&h=400&u=chemistry-magic",
    date: "October 12, 2024",
    location: "Central School, Hyderabad",
    category: "Show",
    categoryColor: "primary",
    tags: ["Chemistry", "Demonstrations", "Interactive"]
  },
  {
    id: 6,
    title: "Space Exploration Day",
    description: "Learn about planets, stars, and space missions with interactive models and virtual reality experiences.",
    image: "https://img.heroui.chat/image/ai?w=600&h=400&u=space-exploration",
    date: "November 20, 2024",
    location: "Planetarium, Kolkata",
    category: "Exhibition",
    categoryColor: "secondary",
    tags: ["Astronomy", "Space", "VR"]
  },
  {
    id: 7,
    title: "Environmental Science Project",
    description: "Hands-on activities focused on sustainability, recycling, and understanding our impact on the environment.",
    image: "https://img.heroui.chat/image/ai?w=600&h=400&u=environmental-science",
    date: "December 5, 2024",
    location: "Green Park, Pune",
    category: "Workshop",
    categoryColor: "success",
    tags: ["Environment", "Sustainability", "Biology"]
  },
  {
    id: 8,
    title: "Math Olympiad Preparation",
    description: "Special training sessions for students interested in participating in mathematics competitions.",
    image: "https://img.heroui.chat/image/ai?w=600&h=400&u=math-olympiad",
    date: "January 15, 2025",
    location: "Mathematics Academy, Chennai",
    category: "Training",
    categoryColor: "warning",
    tags: ["Mathematics", "Competition", "Problem Solving"]
  }
];

const categories = [
  { value: "all", label: "All Categories" },
  { value: "Workshop", label: "Workshops" },
  { value: "Exhibition", label: "Exhibitions" },
  { value: "Camp", label: "Camps" },
  { value: "Show", label: "Shows" },
  { value: "Training", label: "Training" },
  { value: "Hands-on", label: "Hands-on" }
];

const locations = [
  { value: "all", label: "All Locations" },
  { value: "Chennai", label: "Chennai" },
  { value: "Bangalore", label: "Bangalore" },
  { value: "Delhi", label: "Delhi" },
  { value: "Mumbai", label: "Mumbai" },
  { value: "Hyderabad", label: "Hyderabad" },
  { value: "Kolkata", label: "Kolkata" },
  { value: "Pune", label: "Pune" }
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

const EventsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [selectedLocation, setSelectedLocation] = React.useState("all");
  
  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    
    const matchesLocation = selectedLocation === "all" || event.location.includes(selectedLocation);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });
  
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Events</h1>
            <p className="text-xl text-default-600">
              Explore our interactive workshops, exhibitions, and programs designed to make learning science and technology fun for children
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Events Listing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <Card className="mb-8">
            <CardBody className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input
                  placeholder="Search events..."
                  value={searchTerm}
                  onValueChange={setSearchTerm}
                  startContent={<Icon icon="lucide:search" className="text-default-400" />}
                />
                
                <Select
                  label="Category"
                  placeholder="Select category"
                  selectedKeys={[selectedCategory]}
                  onSelectionChange={(keys) => {
                    const selected = Array.from(keys)[0] as string;
                    setSelectedCategory(selected);
                  }}
                >
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </Select>
                
                <Select
                  label="Location"
                  placeholder="Select location"
                  selectedKeys={[selectedLocation]}
                  onSelectionChange={(keys) => {
                    const selected = Array.from(keys)[0] as string;
                    setSelectedLocation(selected);
                  }}
                >
                  {locations.map((location) => (
                    <SelectItem key={location.value} value={location.value}>
                      {location.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            </CardBody>
          </Card>
          
          {/* Results */}
          {filteredEvents.length > 0 ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {filteredEvents.map((event) => (
                <motion.div key={event.id} variants={item} id={`event-${event.id}`}>
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
                        <div className="flex items-center gap-2 text-sm text-default-500 mb-4">
                          <Icon icon="lucide:map-pin" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {event.tags.map((tag, index) => (
                            <Chip key={index} size="sm" variant="flat">
                              {tag}
                            </Chip>
                          ))}
                        </div>
                      </div>
                    </CardBody>
                    <CardFooter className="flex justify-between items-center">
                      <Button 
                        color="primary" 
                        variant="flat"
                        className="w-full"
                        endContent={<Icon icon="lucide:arrow-right" />}
                      >
                        Event Details
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <Icon icon="lucide:search-x" className="text-5xl text-default-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">No Events Found</h3>
              <p className="text-default-600 mb-6">
                We couldn't find any events matching your search criteria. Please try different filters.
              </p>
              <Button 
                color="primary" 
                variant="flat"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedLocation("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventsPage;