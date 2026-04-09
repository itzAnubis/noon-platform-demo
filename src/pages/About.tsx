import { Target, Lightbulb, Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#7b2145] text-white py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#7b2145]/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#c3a248]/30 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#6e0d34]/40 rounded-full blur-[100px] animate-pulse-slow animation-delay-2000"></div>

        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
          variants={heroVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#c3a248] to-[#deb946] drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            مِنْ نَحْنُ
          </motion.h1>
          <motion.p 
            className="text-xl md:text-3xl max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            تُعَدُّ نُونُ مُبادَرَةً مُجْتَمَعِيَّةً تَسْتَهْدِفُ السَّيِّداتِ فِي المُجْتَمَعِ المِصْرِيِّ، لِتَمْكِينِهِنَّ مِنْ مُواكَبَةِ مُتَطَلَّباتِ سُوقِ العَمَلِ، وَمُساعَدَتِهِنَّ فِي اسْتِخْدامِ خِدْمَتِنا لِتَحْقِيقِ التَّطْوِيرِ المُسْتَمِرِّ فِي مُخْتَلِفِ مَناحِي المَجالاتِ بِصُورَةٍ أَفْضَلَ.
          </motion.p>
        </motion.div>
      </section>

      {/* Cards Section */}
      <section className="py-20 -mt-24 sm:-mt-32 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Mission */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-8 group border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c3a248]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-20 h-20 bg-[#c3a248]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#c3a248] group-hover:shadow-[0_0_30px_rgba(195,162,72,0.4)] transition-all duration-500 relative z-10">
                <Heart className="w-10 h-10 text-[#c3a248] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4 group-hover:text-[#7b2145] transition-colors relative z-10">الرِّسَالَةُ</h3>
              <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                تَقْدِيمُ فُرْصَةٍ مُتَمَيِّزَةٍ وَداعِمَةٍ تُمَكِّنُ المَرْأَةَ المِصْرِيَّةَ مِنَ الوُصُولِ إِلَى خَلْقِ فُرَصِ عَمَلٍ مُلائِمَةٍ تُواكِبُ مُتَطَلَّباتِ سُوقِ العَمَلِ، مَعَ تَوْفِيرِ الدَّعْمِ وَالإِرْشَادِ لِتَطْوِيرِ مَهارَاتِها، لِلْحُصُولِ عَلَى رُؤْيَةٍ تُحَقِّقُ لِلْمَرْأَةِ المِصْرِيَّةِ خُطُواتِ نَجاحٍ تَمَيُّزٍ وَاسْتِثْناءٍ.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-8 group border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7b2145]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-20 h-20 bg-[#7b2145]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#7b2145] group-hover:shadow-[0_0_30px_rgba(123,33,69,0.4)] transition-all duration-500 relative z-10">
                <Lightbulb className="w-10 h-10 text-[#7b2145] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4 group-hover:text-[#7b2145] transition-colors relative z-10">الرُّؤْيَةُ</h3>
              <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                تَعْزِيزُ المُجْتَمَعِ المِصْرِيِّ لِيُصْبِحَ فِيهِ كُلُّ امْرَأَةٍ قادِرَةً عَلَى اسْتِثْمَارِ مَهارَاتِها وَتَحْوِيلِها إِلَى مَصْدَرِ دَخْلٍ مُسْتَدامٍ، بِما يَدْعَمُ مَكانَتَها المِهْنِيَّةَ وَالاقْتِصادِيَّةَ، وَيُمَكِّنُها مِنَ المُشارَكَةِ الفَعّالَةِ فِي سُوقِ العَمَلِ، إِسْهامًا فِي تَحْقِيقِ مُجْتَمَعٍ أَكْثَرَ عَدْلًا وَتَوازُنًا بَيْنَ الجِنْسَيْنِ.
              </p>
            </motion.div>

            {/* Goal */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl p-8 group border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6e0d34]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-20 h-20 bg-[#6e0d34]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#6e0d34] group-hover:shadow-[0_0_30px_rgba(110,13,52,0.4)] transition-all duration-500 relative z-10">
                <Target className="w-10 h-10 text-[#6e0d34] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-4 group-hover:text-[#7b2145] transition-colors relative z-10">الهَدَفُ</h3>
              <p className="text-gray-600 leading-relaxed text-lg relative z-10">
                تَمْكِينُ المَرْأَةِ المِصْرِيَّةِ اجْتِماعِيًّا وَاقْتِصادِيًّا عَبْرَ مِنَصَّةٍ رَقْمِيَّةٍ آمِنَةٍ وَشامِلَةٍ، تُتِيحُ لَها فُرَصَ العَمَلِ المَرِنِ وَالتَّعَلُّمِ المُسْتَمِرِّ، وَتَسْوِيقَ مُنْتَجاتِها وَخِدْماتِها بِفَعالِيَّةٍ، بِما يُسْهِمُ فِي تَحْقِيقِ مَكانَةٍ اجْتِماعِيَّةٍ مُتَمَيِّزَةٍ، وَيُعَزِّزُ دَوْرَ المَرْأَةِ المِصْرِيَّةِ فِي المُجْتَمَعِ.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-white py-20 relative overflow-hidden border-t border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7b2145]/5 to-transparent"></div>
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7b2145] to-rose-700 mb-6 drop-shadow-sm">
            انضمي إلينا في رحلة التميز
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-medium">
            نحن هنا لنكون جزءاً من قصة نجاحك وتمكينك. ابدئي رحلتك معنا اليوم.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              to="/signup"
              className="group relative overflow-hidden bg-[#c3a248] text-white px-10 py-5 rounded-2xl font-bold text-xl inline-flex items-center justify-center gap-3 transition-all hover:shadow-[0_0_40px_rgba(195,162,72,0.5)]"
            >
              <span className="relative z-10 transition-transform group-hover:-translate-x-2">سجلي الآن</span>
              <ArrowLeft className="relative z-10 transition-transform group-hover:-translate-x-4" size={24} />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-[#c3a248] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
