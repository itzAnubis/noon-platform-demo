import { ArrowLeft, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { events } from '../data/eventsData';
import EventCard from './EventCard';
import AnimatedSection, { staggerItemVariants } from './AnimatedSection';
import { motion } from 'framer-motion';

export default function UpcomingEvents() {
  // Show only the first 3 upcoming events
  const upcomingEvents = events.slice(0, 3);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="up" className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-[#7b2145] bg-opacity-10 rounded-full mb-4">
            <CalendarDays size={28} className="text-[#7b2145]" />
          </div>
          <h2 className="section-title">الفعاليات القادمة</h2>
          <p className="section-subtitle">
            انضمي إلى فعالياتنا وورش العمل القادمة وكوني جزءاً من مجتمع نون
          </p>
        </AnimatedSection>

        <AnimatedSection stagger={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event) => (
            <motion.div key={event.id} variants={staggerItemVariants}>
              <EventCard {...event} />
            </motion.div>
          ))}
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2} className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 bg-white border-2 border-[#7b2145] text-[#7b2145] px-8 py-3 rounded-lg font-semibold hover:bg-[#7b2145] hover:text-white transition-all duration-300"
            >
              <span>عرض جميع الفعاليات</span>
              <ArrowLeft size={18} />
            </Link>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
