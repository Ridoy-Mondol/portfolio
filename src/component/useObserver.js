import { useEffect, useState, useRef } from 'react';

const useObserver = (options) => {
  const [entries, setEntries] = useState([]);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setEntries(entries.map(entry => ({
        id: entry.target.id,
        isIntersecting: entry.isIntersecting
      })));
    }, {
      ...options,
      rootMargin: '-72px 0px 0px 0px'
    });

    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, [options]);

  const observe = (ref) => {
    if (ref && ref.current) {
      observerRef.current.observe(ref.current);
    }
  };

  const unobserve = (ref) => {
    if (ref && ref.current) {
      observerRef.current.unobserve(ref.current);
    }
  };

  return { entries, observe, unobserve };
};

export default useObserver;

