import React, { useState, useRef, useEffect } from "react";
import useObserver from './useObserver';
import Heading from "./heading";
import { accordionItems as items } from '../component/Api';
import { useMode } from "./context";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
    <div className="accordion" id='faq'>
      <div className="container">
        <Heading title1="Frequently Asked" title2="Questions" />
      </div>
      {items.map((item, index) => {
        const entry = entries.find(e => e.id === `faq-card-${index}`);
        const isIntersecting = entry ? entry.isIntersecting : false;

        return (
          <div className="faq-card" key={index} ref={el => refs.current[index] = { current: el }} id={`faq-card-${index}`}>
            <div className="card-header">
              <button
                className={`accordion-btn ${activeIndex === index ? 'active' : ''} ${mode ? "btn-light" : ""}`}
                onClick={() => handleToggle(index)}
                aria-expanded={activeIndex === index ? 'true' : 'false'}
              >
                <div className={`${isIntersecting ? 'leftIn' : ''}`}>{item.title}</div>
                <div className='faq-icon-div'>
                  <i className={`fa ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'} faq-icon`}></i>
                </div>
              </button>
            </div>
            <div
              className={`card-body ${activeIndex === index ? 'open' : ''} ${isIntersecting ? 'rightIn' : ''} ${mode ? "dark" : ""}`}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;


