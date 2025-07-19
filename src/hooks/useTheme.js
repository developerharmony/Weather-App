import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('weatherTheme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('weatherTheme', newTheme);
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white';
      case 'custom':
        return 'bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 text-white';
      default:
        return 'bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 text-gray-800';
    }
  };

  return { theme, changeTheme, getThemeClasses };
};