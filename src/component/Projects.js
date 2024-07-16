import React, { useRef, useEffect } from "react";
import useObserver from './useObserver';
import Heading from "./heading";
import { Portfolio_Api } from "./Api";
import { Link } from "react-router-dom";
import { useMode } from "./context";

const Projects = () => {
  const refs = useRef([]);
  const { entries, observe, unobserve } = useObserver({ threshold: 0.6 });

  useEffect(() => {
    const currentRefs = refs.current;
    currentRefs.forEach(ref => observe(ref));

    return () => {
      currentRefs.forEach(ref => unobserve(ref));
    };
  }, [observe, unobserve]);

  const { mode } = useMode();

  return (
    <div id="projects">
      <div className="container-fluid portfolio-div">
        <div className="container">
          <Heading title1="My" title2="Projects" />
        </div>
        <div className="container">
          <div className="row">
            {Portfolio_Api.map((elem, index) => {
              const entry = entries.find(e => e.id === `card-${index}`);
              const isIntersecting = entry ? entry.isIntersecting : false;

              return (
                <div className="col-lg-4 col-md-6 d-flex justify-content-center port-card-outer" key={index}>
                  <div
                    className={`card port-card ${mode ? "port-card-light" : ""}`}
                    ref={(el) => (refs.current[index] = { current: el })}
                    id={`card-${index}`}
                  >
                    <h4 className={`${isIntersecting ? 'leftIn' : ''}`}>{elem.title}</h4>
                    <Link className="overflow-hidden" to={elem.link} target="_blank">
                      <img src={elem.img_src} className={`port-img img-fluid ${isIntersecting ? 'leftIn' : ''}`} height="190" alt="" />
                    </Link>
                    <span className={`port-desc ${isIntersecting ? 'rightIn' : ''}`}>{elem.description}</span>
                    <Link to={elem.link} target="_blank" className="overflow-hidden">
                      <button className={`port-btn ${isIntersecting ? 'rightIn' : ''} ${mode ? "port-btn-light" : ""}`}>View Project</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
