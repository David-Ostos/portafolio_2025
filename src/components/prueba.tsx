import * as React from 'react';
import { SplitText, LetterWrapperProp } from '@cyriacbr/react-split-text';
import { motion } from 'framer-motion';

// Define los props del wrapper para letras
const LetterWrapper: React.FC<LetterWrapperProp> = ({ children, countIndex }) => {
  return (
    <motion.span
      transition={{
        ease: 'easeOut',
        duration: 1,
        delay: 0.025 * countIndex,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.span>
  );
};

// Memoiza con el tipo correcto
const MemoizedLetterWrapper = React.memo(LetterWrapper);

// Define los props del componente
interface FadeInProps {
  children?: string; // ¡El texto debe ser string!
}

export const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  return (
    <SplitText LetterWrapper={MemoizedLetterWrapper}>
      {children || "Hello world from the FadeIn Component!"}
    </SplitText>
  );
};