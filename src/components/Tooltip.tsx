import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: string;
  show: boolean;
}

export default function Tooltip({ children, content, show }: TooltipProps) {
  return (
    <div className="relative">
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap shadow-lg">
              {content}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
