import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section pb-1">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Title */}
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          {/* About Content - Always visible */}
          <motion.p 
            className="text-center text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('about')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}