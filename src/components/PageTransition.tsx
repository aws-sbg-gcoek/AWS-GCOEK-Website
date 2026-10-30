import { motion } from 'motion/react';
import { ReactNode, CSSProperties } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function PageTransition({ children, className = '', style }: PageTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -20, scale: 0.98, filter: 'blur(4px)' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
