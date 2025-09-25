import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <motion.div
          className="text-right"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Template by{' '}
            <a
              href="https://github.com/wsuryaningrat/portfolium-template"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
            >
              <Github className="w-4 h-4" />
              @wsuryaningrat
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
