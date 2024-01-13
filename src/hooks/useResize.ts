'use client'

import { useState, useEffect} from 'react';

interface IEvent {
  target: {
    innerWidth: number
  };
}

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: IEvent) => {
      if (event.target.innerWidth) setWidth(event.target.innerWidth)
    };
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, []);

  return width;
};
