import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import TimelineRow from '../components/TimelineRow';
import IntroText from '../components/IntroText';
import { useLanguage } from '../contexts/LanguageContext';

export default function Achievements() {
  const { t } = useLanguage();
  
  return (
    <section id="achievements" className="section bg-gray-50/50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <SectionTitle>{t('sections.achievements.title')}</SectionTitle>
        
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <IntroText sectionKey="achievements" />
          
          <div className="space-y-0">
            {t('achievements').map((achievement: any, index: number) => (
              <TimelineRow
                key={`${achievement.organizer}-${achievement.title}-${index}`}
                left={{
                  primary: achievement.organizer,
                  secondary: achievement.title
                }}
                right={achievement.date}
                description={achievement.description}
                logo={achievement.logo}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
