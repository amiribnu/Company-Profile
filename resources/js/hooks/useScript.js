import { useEffect } from 'react';

const useScript = url => {
  useEffect(() => {
    const script = document.createElement('script');
    const reviews = document.getElementById('reviews')

    script.src = url;
    script.async = true;
    script.defer = true;

    reviews.appendChild(script);

    return () => {
      reviews.removeChild(script);
    }
  }, [url]);
};

export default useScript;