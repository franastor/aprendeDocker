import React, { createContext, useContext, useState } from 'react';

type OSType = 'windows' | 'macos' | 'linux';

interface AppContextType {
  selectedOS: OSType | null;
  setSelectedOS: (os: OSType) => void;
  completedLessons: string[];
  markLessonAsComplete: (lessonId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedOS, setSelectedOS] = useState<OSType | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const markLessonAsComplete = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  return (
    <AppContext.Provider 
      value={{ 
        selectedOS, 
        setSelectedOS, 
        completedLessons, 
        markLessonAsComplete 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}; 