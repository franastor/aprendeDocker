import React, { createContext, useContext, useState, useEffect } from 'react';

type OSType = 'windows' | 'macos' | 'linux';

interface AppContextType {
  selectedOS: OSType | null;
  setSelectedOS: (os: OSType) => void;
  completedLessons: string[];
  markLessonComplete: (lessonId: string) => void;
  isLessonComplete: (lessonId: string) => boolean;
  visitCount: number;
  incrementVisitCount: () => void;
}

const AppContext = createContext<AppContextType>({
  selectedOS: null,
  setSelectedOS: () => {},
  completedLessons: [],
  markLessonComplete: () => {},
  isLessonComplete: () => false,
  visitCount: 0,
  incrementVisitCount: () => {},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedOS, setSelectedOS] = useState<OSType | null>(null);
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('completedLessons');
    return saved ? JSON.parse(saved) : [];
  });
  const [visitCount, setVisitCount] = useState<number>(() => {
    const saved = localStorage.getItem('visitCount');
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    localStorage.setItem('visitCount', visitCount.toString());
  }, [visitCount]);

  const markLessonComplete = (lessonId: string) => {
    setCompletedLessons(prev => [...prev, lessonId]);
  };

  const isLessonComplete = (lessonId: string) => {
    return completedLessons.includes(lessonId);
  };

  const incrementVisitCount = () => {
    setVisitCount(prev => prev + 1);
  };

  return (
    <AppContext.Provider value={{ 
      selectedOS, 
      setSelectedOS, 
      completedLessons, 
      markLessonComplete, 
      isLessonComplete,
      visitCount,
      incrementVisitCount
    }}>
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