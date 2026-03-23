import { ArrowLeft, CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { events } from '../data/eventsData';
import EventCard from './EventCard';

export default function UpcomingEvents() {
  // Show only the first 3 upcoming events
  const upcomingEvents = events.slice(0, 3);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-[#C2185B] bg-opacity-10 rounded-full mb-4">
            <CalendarDays size={28} className="text-[#C2185B]" />
          </div>
          <h2 className="section-title">الفعاليات القادمة</h2>
          <p className="section-subtitle">
            انضمي إلى فعالياتنا وورش العمل القادمة وكوني جزءاً من مجتمع نون
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 bg-white border-2 border-[#C2185B] text-[#C2185B] px-8 py-3 rounded-lg font-semibold hover:bg-[#C2185B] hover:text-white transition-all duration-300"
          >
            <span>عرض جميع الفعاليات</span>
            <ArrowLeft size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
