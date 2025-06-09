import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface Stat {
  id: number;
  value: string;
  label: string;
  icon: string;
  color: string;
}

const stats: Stat[] = [
  {
    id: 1,
    value: "10,000+",
    label: "Students Inspired",
    icon: "lucide:users",
    color: "text-primary"
  },
  {
    id: 2,
    value: "250+",
    label: "Workshops Conducted",
    icon: "lucide:presentation",
    color: "text-secondary"
  },
  {
    id: 3,
    value: "50+",
    label: "Schools Partnered",
    icon: "lucide:school",
    color: "text-success"
  },
  {
    id: 4,
    value: "15+",
    label: "Cities Covered",
    icon: "lucide:map",
    color: "text-warning"
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

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-content2">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Impact</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-default-600 max-w-2xl mx-auto">
            Making a difference in children's lives through science and technology education
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.id} variants={item}>
              <Card className="h-full">
                <CardBody className="p-6 flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-full bg-content1 flex items-center justify-center mb-4 ${stat.color}`}>
                    <Icon icon={stat.icon} className="text-3xl" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-default-600">{stat.label}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};