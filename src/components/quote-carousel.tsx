import React from 'react';
import { Card, CardBody, Avatar } from '@heroui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

interface Quote {
  id: number;
  text: string;
  author: string;
  image: string;
}

const quotes: Quote[] = [
  {
    id: 1,
    text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    author: "Dr. APJ Abdul Kalam",
    image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=kalam1"
  },
  {
    id: 2,
    text: "If you want to shine like a sun, first burn like a sun.",
    author: "Dr. APJ Abdul Kalam",
    image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=kalam2"
  },
  {
    id: 3,
    text: "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.",
    author: "Dr. APJ Abdul Kalam",
    image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=kalam3"
  },
  {
    id: 4,
    text: "All Birds find shelter during a rain. But Eagle avoids rain by flying above the Clouds.",
    author: "Dr. APJ Abdul Kalam",
    image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=kalam4"
  },
  {
    id: 5,
    text: "You have to dream before your dreams can come true.",
    author: "Dr. APJ Abdul Kalam",
    image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=kalam5"
  },
  {
    id: 6,
    text: "Excellence is a continuous process and not an accident.",
    author: "Dr. APJ Abdul Kalam",
    image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=kalam6"
  },
  {
    id: 7,
    text: "Man needs difficulties in life because they are necessary to enjoy success.",
    author: "Dr. APJ Abdul Kalam",
    image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=kalam7"
  },
  {
    id: 8,
    text: "If you fail, never give up because F.A.I.L. means 'First Attempt In Learning'.",
    author: "Dr. APJ Abdul Kalam",
    image: "https://img.heroui.chat/image/avatar?w=200&h=200&u=kalam8"
  }
];

export const QuoteCarousel: React.FC = () => {
  return (
    <section className="py-16 bg-content1">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Wisdom from Dr. Kalam</h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-default-600 max-w-2xl mx-auto">
            Inspiring quotes from the Missile Man of India that continue to guide our mission and vision
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
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="pb-12"
        >
          {quotes.map((quote) => (
            <SwiperSlide key={quote.id}>
              <Card className="quote-card h-full">
                <CardBody className="p-6 flex flex-col">
                  <div className="mb-4 text-primary">
                    <Icon icon="lucide:quote" className="text-3xl" />
                  </div>
                  <p className="text-default-700 mb-6 flex-grow">"{quote.text}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar src={quote.image} size="md" />
                    <div>
                      <p className="font-semibold">{quote.author}</p>
                      <p className="text-tiny text-default-500">Former President of India</p>
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