// usePreventImageDownload.js
import { useEffect } from 'react';

const usePreventImageDownload = () => {
  useEffect(() => {
    const handleRightClick = event => {
      if (event.target.nodeName === 'IMG') {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleRightClick);

    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
    };
  }, []);
};

export default usePreventImageDownload;
