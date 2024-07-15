import React, { useRef, useEffect } from "react";
import useObserver from './useObserver';
import Heading from "./heading";
import { Api_2 } from "./Api";
import { useMode } from "./context";

const Skill = () => {
  const refs = useRef([]);
  const { entries, observe, unobserve } = useObserver({ threshold: 1 });

  useEffect(() => {
    const currentRefs = refs.current;
    currentRefs.forEach(ref => observe(ref));

    return () => {
      currentRefs.forEach(ref => unobserve(ref));
    };
  }, [observe, unobserve]);

  const { mode } = useMode();

  return (
    <div className="about-div" id="skills">
      <div className="container">
        <Heading title1="My" title2="Skills" />

        {Api_2.map((elem, ind) => {
          const entry = entries.find(e => e.id === `skill-${ind}`);
          const isIntersecting = entry ? entry.isIntersecting : false;

          return (
            <div className={`row d-flex align-items-center ${mode ? "dark" : ""}`} key={ind} ref={el => refs.current[ind] = { current: el }} id={`skill-${ind}`}>
              <div className={`col-5 col-md-2 col-lg-1 ${isIntersecting ? 'leftIn' : ''}`}>
                <span className={mode ? "dark-text" : "light-color"}>{elem.language}</span>
              </div>
              <div className="col-10 col-md-8 col-lg-10 text-center overflow-hidden">
                <div className={`progress-bar d-flex justify-content-center ${isIntersecting ? 'topIn' : ''} ${mode ? "progress-border" : ""}`}>
                  <div className={elem.class}></div>
                </div>
              </div>
              <div className={`col-2 col-md-2 col-lg-1 text-center ${isIntersecting ? 'rightIn' : ''}`}>
                <span className={mode ? "dark-text" : "light-color"}>{elem.percentage}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Skill;

