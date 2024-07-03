import React, { useState } from 'react';
import { accordionItems as items } from '../component/Api';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion" id='faq'>
      <h3 className="text-center faq-heading port-heading"><span className="border-heading text-white">Frequently Asked <span className="home-text">Questions</span></span></h3>
      {items.map((item, index) => (
        <div className="faq-card" key={index}>
          <div className="card-header">
            <button
              className={`accordion-btn ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleToggle(index)}
              aria-expanded={activeIndex === index ? 'true' : 'false'}
            >
              <div>{item.title}</div>
              <div className='faq-icon-div'>
              <i className={`fa ${activeIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'} faq-icon`}></i>
              </div>
            </button>
          </div>
          <div
            className={`${activeIndex === index ? 'open' : 'card-body'}`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;

