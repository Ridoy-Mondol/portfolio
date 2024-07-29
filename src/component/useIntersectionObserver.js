// import { useEffect, useState } from 'react';

// const useIntersectionObserver = (targetRef, options) => {
//   const [isIntersecting, setIsIntersecting] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setIsIntersecting(entry.isIntersecting);
//     }, {
//       ...options,
//       rootMargin: '-72px 0px 0px 0px'
//     });

//     const currentTarget = targetRef.current;
//     if (currentTarget) {
//       observer.observe(currentTarget);
//     }

//     return () => {
//       if (currentTarget) {
//         observer.unobserve(currentTarget);
//       }
//     };
//   }, [targetRef, options]);

//   return isIntersecting;
// };

// export default useIntersectionObserver;










import { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = (targetRef, options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const hasIntersected = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasIntersected.current) {
        setIsIntersecting(true);
        hasIntersected.current = true;
      }
    }, {
      ...options,
      rootMargin: '-72px 0px 0px 0px'
    });

    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [targetRef, options]);

  return isIntersecting;
};

export default useIntersectionObserver;


