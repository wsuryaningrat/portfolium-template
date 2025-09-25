import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface IntroTextProps {
  sectionKey: string;
  className?: string;
}

export default function IntroText({ sectionKey, className = "text-center text-gray-600 dark:text-gray-400 mb-8" }: IntroTextProps) {
  const { t } = useLanguage();
  
  const introText = t(`sections.${sectionKey}.introText`);
  
  if (introText === 'NA' || !introText) {
    return null;
  }
  
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {introText}
    </motion.p>
  );
}
