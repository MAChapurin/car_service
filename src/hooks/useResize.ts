import { useState, useEffect, SetStateAction } from 'react';

interface IEvent {
  target: any;
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
