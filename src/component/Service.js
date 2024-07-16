import React, { useRef, useEffect } from "react";
import useObserver from './useObserver';
import Heading from "./heading";
import Api from "./Api";
import { useMode } from "./context";

const Service = () => {
  const refs = useRef([]);
  const { entries, observe, unobserve } = useObserver({ threshold: 0.5 });

  useEffect(() => {
    const currentRefs = refs.current;
    currentRefs.forEach(ref => observe(ref));
    return () => {
      currentRefs.forEach(ref => unobserve(ref));
    };
  }, [observe, unobserve]);

  const { mode } = useMode();

  return (
    <div className="service-div" id="services">
      <div className="container">
        <div className="row my-auto">
          <Heading title1="My" title2="Services" />
          {Api.map((elem, index) => {
            const entry = entries.find(e => e.id === `card-${index}`);
            const isIntersecting = entry ? entry.isIntersecting : false;

            return (
              <div
                className="col-lg-4 col-md-6 card-main"
                key={elem.id}
                ref={(el) => (refs.current[index] = { current: el })}
                id={`card-${index}`}
              >
                <div className={`card-div text-center mx-auto animated overflow-hidden ${mode ? "light-card" : ""}`}>
                  <i className={`${elem.icon} ${isIntersecting ? 'leftIn' : ''}`}></i>
                  <h5 className={`${isIntersecting ? 'leftIn' : ''}`}>{elem.category}</h5>
                  <p className={`description ${isIntersecting ? 'rightIn' : ''}`}>{elem.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;



