import { motion } from 'framer-motion';
import TimelineRow from '../components/TimelineRow';
import { useLanguage } from '../contexts/LanguageContext';

export default function Education() {
  const { t } = useLanguage();
  
  return (
    <section id="education" className="section">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
            {t('sections.education.title')}
          </h2>
          <div className="space-y-0">
            {t('education').map((edu: any, index: number) => (
              <TimelineRow
                key={`${edu.institution}-${edu.degree}-${index}`}
                left={{
                  primary: edu.institution,
                  secondary: edu.degree
                }}
                right={edu.period}
                description={edu.description}
                logo={edu.logo}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
