import { motion } from 'framer-motion';
import TimelineRow from '../components/TimelineRow';
import IntroText from '../components/IntroText';
import { useLanguage } from '../contexts/LanguageContext';

export default function Work() {
  const { t } = useLanguage();
  
  return (
    <section id="work" className="section bg-gray-50/50 dark:bg-gray-900/50 pt-1">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
            {t('sections.work.title')}
          </h2>
          <IntroText sectionKey="work" />
          <div className="space-y-0">
            {t('workExperience').map((job: any, index: number) => (
              <TimelineRow
                key={`${job.company}-${job.position}-${index}`}
                left={{
                  primary: job.company,
                  secondary: job.position
                }}
                right={job.period}
                description={job.description}
                logo={job.logo}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
