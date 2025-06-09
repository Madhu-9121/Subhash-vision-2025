import React from 'react';
import { Card, CardBody, Avatar } from '@heroui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "My daughter used to find science boring until she attended Kalam's Vision workshop. Now she can't stop talking about becoming a scientist!",
    name: "Priya Sharma",
    role: "Parent",
    image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=parent1"
  },
  {
    id: 2,
    text: "The hands-on approach to teaching complex concepts makes all the difference. My students are more engaged and curious after your school visit.",
    name: "Rajesh Kumar",
    role: "Science Teacher",
    image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=teacher1"
  },
  {
    id: 3,
    text: "I never thought I could build a robot by myself! The workshop was super fun and now I want to learn more about programming.",
    name: "Arjun Singh",
    role: "Student, Grade 7",
    image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=student1"
  },
  {
    id: 4,
    text: "Partnering with Kalam's Vision has significantly improved our students' interest in STEM subjects. Their programs are exceptional.",
    name: "Dr. Meenakshi Iyer",
    role: "School Principal",
    image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=principal1"
  },
  {
    id: 5,
    text: "The rocket science workshop was amazing! I learned so much and my rocket flew higher than anyone else's!",
    name: "Zara Patel",
    role: "Student, Grade 5",
    image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=student2"
  }
];

export const Testimonials: React.FC = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-2">What People Say</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-default-600 max-w-2xl mx-auto">
            Hear from students, parents, and educators about their experiences with our programs
          </p>
        </motion.div>
        
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Card className="quote-card h-full">
                <CardBody className="p-6 flex flex-col">
                  <div className="mb-4 text-secondary">
                    <Icon icon="lucide:message-circle" className="text-2xl" />
                  </div>
                  <p className="text-default-700 mb-6 flex-grow">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar src={testimonial.image} size="md" />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-tiny text-default-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};