import { useState, useLayoutEffect } from 'react';

export const useResize = () => {
  const [width, setWidth] = useState<number | null>(null);

  useLayoutEffect(() => {
    const setWidthScreens = () => {
      setWidth(window?.innerWidth);
    };
    setWidthScreens();
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      const size = window?.innerWidth;
      if (size) setWidth(size);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};
