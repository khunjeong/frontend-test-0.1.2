import { RefObject, useEffect } from 'react';

const useClickOutside = (target: RefObject<HTMLDivElement>, callback: () => void): void => {
  const handleClickAway = (event: MouseEvent) => {
    if (target.current && !target.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickAway);
    return () => {
      document.removeEventListener('mousedown', handleClickAway);
    };
  });
};

export default useClickOutside;
