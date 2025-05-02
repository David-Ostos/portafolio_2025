// react-split-text.d.ts
declare module "@cyriacbr/react-split-text" {
  import React from "react";
  
  interface LetterWrapperProp {
    children: React.ReactNode;
    countIndex: number;
  }

  interface SplitTextProps {
    children: string;
    LetterWrapper?: React.ComponentType<LetterWrapperProp>;
  }

  export const SplitText: React.FC<SplitTextProps>;
  export type LetterWrapperProp = LetterWrapperProp;
}