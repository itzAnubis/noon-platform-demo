import { Heart, Users, Scale, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection, { staggerItemVariants } from './AnimatedSection';

interface SupportServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

function SupportServiceCard({
  icon,
  title,
  description,
  features,
}: SupportServiceProps) {
  return (
    <motion.div 
      className="card-base p-6 text-center"
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
    >
      <div className="flex justify-center mb-4">
        <motion.div 
          className="p-3 bg-[#c3a248] bg-opacity-20 rounded-full"
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {icon}
        </motion.div>
      </div>
      <h3 className="text-xl font-bold text-[#7b2145] mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <ul className="text-sm text-gray-600 space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-[#c3a248]">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <motion.button 
        className="btn-primary w-full"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        ابدئي الآن
      </motion.button>
    </motion.div>
  );
}

export default function Support() {
  const services = [
    {
      icon: <Heart size={32} className="text-[#7b2145]" />,
      title: 'استشارات نفسية فردية',
      description:
        'جلسات فردية مع متخصصين نفسيين معتمدين لحل مشاكلك الشخصية',
      features: [
        'متخصصون معتمدون',
        'سرية تامة وأمان',
        'مرونة في المواعيد',
        'جلسات عبر الفيديو',
      ],
    },
    {
      icon: <Users size={32} className="text-[#7b2145]" />,
      title: 'مجموعات دعم مجتمعية',
      description:
        'تجمعات داعمة لتبادل التجارب والدعم النفسي المتبادل بين الأخوات',
      features: [
        'لقاءات دورية',
        'بيئة آمنة وداعمة',
        'تبادل الخبرات',
        'تشجيع مستمر',
      ],
    },
    {
      icon: <Scale size={32} className="text-[#7b2145]" />,
      title: 'استشارات قانونية',
      description:
        'استشارات قانونية في الأمور الزوجية والميراث والحقوق الشرعية',
      features: [
        'محاميات متخصصات',
        'استشارات قانونية حرة',
        'توثيق وتوكيلات',
        'متابعة القضايا',
      ],
    },
    {
      icon: <Phone size={32} className="text-[#7b2145]" />,
      title: 'خط الأزمات',
      description:
        'خط ساخن لحالات الأزمات والطوارئ النفسية والاجتماعية',
      features: [
        'متاح 24/7',
        'فريق متدرب',
        'استجابة فورية',
        'سري وآمن تماماً',
      ],
    },
  ];

  return (
    <section id="support" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="section-title">الدعم النفسي والمجتمعي</h2>
          <p className="section-subtitle">
            لستِ وحدك - نحن هنا لدعمك في كل خطواتك
          </p>
        </AnimatedSection>

        <AnimatedSection stagger={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, idx) => (
            <motion.div key={idx} variants={staggerItemVariants}>
              <SupportServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            </motion.div>
          ))}
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.2}>
          <motion.div 
            className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl p-8 text-center"
            whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
          >
            <h3 className="text-2xl font-bold text-[#7b2145] mb-4">
              احجزي جلستك الآن
            </h3>
            <p className="text-gray-700 mb-6">
              اختاري من بين آلاف المتخصصين والمدربين والداعمين
            </p>
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ابدئي بجلستك الأولى
            </motion.button>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
