'use client';

import React, { createContext, useState } from 'react';

export interface QuizLockContextType {
  locked: boolean;
  setLocked: (v: boolean) => void;
}

export const QuizLockContext = createContext<QuizLockContextType>({
  locked: false,
  setLocked: () => {},
});

export function QuizLockProvider({ children }: { children: React.ReactNode }) {
  const [locked, setLocked] = useState(false);
  return (
    <QuizLockContext.Provider value={{ locked, setLocked }}>
      {children}
    </QuizLockContext.Provider>
  );
}