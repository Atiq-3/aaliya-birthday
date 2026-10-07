import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function ScreenTransition({
  children,
  screenKey,
}: {
  children: ReactNode;
  screenKey: string;
}) {
  return (
    <motion.div
      key={screenKey}
      initial={{ opacity: 0, scale: 1.05, filter: 'blur(20px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 0.95, filter: 'blur(20px)' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen w-full"
    >
      {children}
    </motion.div>
  );
}