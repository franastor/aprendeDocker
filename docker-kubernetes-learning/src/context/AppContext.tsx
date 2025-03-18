import React, { createContext, useContext, useState, ReactNode } from 'react';

type OS = 'windows' | 'macos' | 'linux' | null;
type Progress = {
  [key: string]: boolean;
};

export type AppContextType = {
  selectedOS: OS;
  setSelectedOS: (os: OS) => void;
  progress: Progress;
  completedLessons: string[];
  markLessonComplete: (lessonId: string) => void;
  isLessonComplete: (lessonId: string) => boolean;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedOS, setSelectedOS] = useState<OS>(null);
  const [progress, setProgress] = useState<Progress>({});
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const markLessonComplete = (lessonId: string) => {
    setProgress(prev => ({
      ...prev,
      [lessonId]: true
    }));
    setCompletedLessons(prev => [...prev, lessonId]);
  };

  const isLessonComplete = (lessonId: string) => {
    return progress[lessonId] || false;
  };

  return (
    <AppContext.Provider
      value={{
        selectedOS,
        setSelectedOS,
        progress,
        completedLessons,
        markLessonComplete,
        isLessonComplete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}; 