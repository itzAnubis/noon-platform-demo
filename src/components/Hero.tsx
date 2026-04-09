import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from './CountUp';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.3 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.85)), url('/images/home_background.jpeg')`,
      }}
    >
      {/* Animated decorative gradient orbs */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#7b2145]/20 rounded-full blur-[120px] mix-blend-multiply"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#c3a248]/30 rounded-full blur-[100px] mix-blend-multiply"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      {/* Third subtle orb */}
      <motion.div
        className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-rose-300/10 rounded-full blur-[80px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          variants={itemVariants} 
          className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-l from-[#7b2145] to-rose-700 leading-tight drop-shadow-sm"
        >
          نُمكّن، نُدعم، نُبادر
        </motion.h2>
        
        <motion.h3 
          variants={itemVariants} 
          className="text-2xl md:text-3xl font-bold mb-8 text-[#c3a248] tracking-wide drop-shadow-sm"
        >
          منصتكِ لبداية جديدة
        </motion.h3>

        <motion.p 
          variants={itemVariants} 
          className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto font-medium"
        >
          منصة متكاملة لتمكين المرأة المصرية اقتصادياً واجتماعياً. نوفر لكِ سوقاً للبيع، فرص عمل عن بُعد، دورات تدريبية، والدعم النفسي والمجتمعي. <span className="text-[#7b2145] font-bold">سوياً، نبني مستقبلاً أفضل.</span>
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/marketplace"
              className="group relative overflow-hidden bg-[#7b2145] text-white px-10 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_40px_rgba(123,33,69,0.4)]"
            >
              <span className="relative z-10">تصفحي السوق</span>
              <ArrowLeft className="relative z-10 group-hover:-translate-x-2 transition-transform duration-300" size={24} />
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-rose-800 to-[#7b2145] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right duration-500 rounded-xl"></div>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/training"
              className="group bg-white/50 backdrop-blur-sm border-2 border-[#c3a248] text-[#c3a248] px-10 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-3 transition-all hover:bg-[#c3a248] hover:text-white hover:shadow-[0_0_40px_rgba(195,162,72,0.4)]"
            >
              <span>انضمي إلينا</span>
              <ArrowLeft className="group-hover:-translate-x-2 transition-transform duration-300" size={24} />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="grid grid-cols-3 gap-4 md:gap-12 mt-8 text-center bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50"
        >
          <motion.div 
            className="cursor-default"
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
          >
            <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#c3a248] to-[#9b8138] mb-2">
              <CountUp end={500} suffix="+" className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#c3a248] to-[#9b8138]" />
            </div>
            <p className="text-gray-800 font-bold text-base md:text-lg">امرأة تم تمكينها</p>
          </motion.div>
          <motion.div 
            className="cursor-default border-x border-gray-200/60"
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
          >
            <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#c3a248] to-[#9b8138] mb-2">
              <CountUp end={1000} suffix="+" className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#c3a248] to-[#9b8138]" />
            </div>
            <p className="text-gray-800 font-bold text-base md:text-lg">منتج للبيع</p>
          </motion.div>
          <motion.div 
            className="cursor-default"
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
          >
            <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#c3a248] to-[#9b8138] mb-2">
              <CountUp end={100} suffix="+" className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#c3a248] to-[#9b8138]" />
            </div>
            <p className="text-gray-800 font-bold text-base md:text-lg">فرصة عمل</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}