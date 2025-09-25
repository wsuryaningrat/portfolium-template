import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import Toast from '../components/Toast';
import { useClipboardToast } from '../hooks/useClipboardToast';
import { useLanguage } from '../contexts/LanguageContext';
import { site } from '../config/site';

export default function Contact() {
  const { toast, copy } = useClipboardToast();
  const { t } = useLanguage();

  const handleEmailClick = () => {
    copy(site.social.email);
  };

  return (
    <section id="contact" className="section pb-32">
      <div className="container mx-auto px-4">
        <SectionTitle>{t('sections.contact.title')}</SectionTitle>
        
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Looking to chat? Feel free to reach out via{' '}
            <a 
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors duration-200 underline decoration-dotted underline-offset-4"
            >
              LinkedIn
            </a>
            {' '}or{' '}
            <button
              onClick={handleEmailClick}
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors duration-200 underline decoration-dotted underline-offset-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 rounded"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleEmailClick();
                }
              }}
            >
              email
            </button>
            {' '}me directly with your question — I'll get back when I can.
          </p>
        </motion.div>
        
        <Toast message={toast} />
      </div>
    </section>
  );
}
