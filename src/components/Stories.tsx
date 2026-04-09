import TestimonialCard from './TestimonialCard';
import AnimatedSection, { staggerItemVariants } from './AnimatedSection';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    image:
    '/images/fatema.png',
    name: 'فاطمة',
    age: 38,
    city: 'الإسكندرية',
    story:
      'كنت مطلقة بلا حول ولا قوة، لكن من خلال نون منونة تعلمت صنع المربّى الصحي والعضوي. اليوم أبيع منتجاتي في كل مكان والحمد لله دخلي الشهري تضاعف وأنا فخورة بنفسي.',
    achievement:
      'زيادة الدخل الشهري بنسبة 70% وصرح من الكفاح الذاتي',
  },
  {
    id: 2,
    image:
    '/images/om_alaa.png',
    name: 'أم علاء',
    age: 32,
    city: 'الإسكندرية',
    story:
      'أرملة بثلاث أطفال، كنت أبحث عن عمل يوفق بيني وبينهم. التحقت بدورة التسويق الرقمي والآن أعمل مديرة تسويق بدوام جزئي من البيت.',
    achievement:
      'حصلت على عمل مستقر وأستطيع رعاية أطفالي بكرامة',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    name: 'سارة',
    age: 28,
    city: 'الإسكندرية',
    story:
      'كنت مسؤولة عن أسرتي بعد وفاة والدي. تعلمت التصميم الجرافيكي من الدورات على المنصة وأصبحت مصممة مستقلة براتب شهري ثابت.',
    achievement:
      'استقلال مالي تام وحلم الدراسات العليا أصبح حقيقة',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=150&h=150&fit=crop',
    name: 'نور',
    age: 26,
    city: 'الإسكندرية',
    story:
      'حديجة التخرج وبلا وظائف. بدأت بالعمل كاتبة محتوى عبر المنصة، وبعد شهرين لدي عملاء دائمون وسيارتي الخاصة.',
    achievement:
      'دخل شهري يتجاوز 6000 ج.م وحلم الاستقلالية تحقق',
  },
];

export default function Stories() {
  return (
    <section id="stories" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="section-title">بصمتها حكاية</h2>
          <p className="section-subtitle">
            قصص نجاح ملهمة لنساء مصريات غيّرن حياتهنّ من خلال المنصة
          </p>
        </AnimatedSection>

        <AnimatedSection stagger={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={staggerItemVariants}>
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.3} className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            هل تريدين أن تصبحي نجمة من نجوم نون منونة؟
          </p>
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            شاركي قصتك
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
}
