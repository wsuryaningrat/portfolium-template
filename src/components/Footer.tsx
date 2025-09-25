import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="fixed bottom-4 right-4 z-30">
      <motion.div
        className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg rounded-lg px-3 py-2 border border-gray-200/50 dark:border-gray-700/50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Template by{' '}
          <a
            href="https://github.com/wsuryaningrat/portfolium-template"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
          >
            <Github className="w-3 h-3" />
            @wsuryaningrat
          </a>
        </p>
      </motion.div>
    </footer>
  );
}
