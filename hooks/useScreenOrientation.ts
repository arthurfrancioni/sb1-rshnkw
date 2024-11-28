import { useEffect } from 'react';

export function useScreenOrientation() {
  useEffect(() => {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape').catch((err) => {
        console.error('Failed to lock orientation:', err);
      });
    }

    return () => {
      if (screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock();
      }
    };
  }, []);
}