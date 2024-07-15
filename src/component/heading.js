import React, { useRef } from "react";
import useIntersectionObserver from './useIntersectionObserver';
import { useMode } from "./context";

const Heading = (props) => {
    const sectionRef = useRef(null);
    const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 1 });

    const {mode} = useMode ();

  return (
    <h3 className={`about-heading ${mode ? "dark" : ""}`} ref={sectionRef}>
                            <p className={`text-center border-heading ${isIntersecting ? 'topIn' : ''} ${mode ? "dark-border" : ""}`}>{props.title1} <span className="home-text">{props.title2}</span></p></h3>
  )
}

export default Heading
