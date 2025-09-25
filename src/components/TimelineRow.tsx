import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface TimelineRowProps {
  left: {
    primary: string;
    secondary: string;
  };
  right: string;
  description?: string;
  logo?: string;
  className?: string;
}

export default function TimelineRow({ left, right, description, logo, className = '' }: TimelineRowProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`border-b border-gray-200/60 dark:border-gray-700/60 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex items-center justify-between py-1.5 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ x: 2 }}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {logo && (
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
              <img 
                src={logo} 
                alt={left.primary} 
                className="w-5 h-5 object-contain" 
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm md:text-[15px] text-gray-900 dark:text-gray-100 truncate">
              {left.primary}
            </div>
            <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400 truncate">
              {left.secondary}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
            {right}
          </span>
          {description && (
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </motion.div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && description && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-0 pb-2">
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
