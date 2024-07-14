import React, { useRef } from "react";
import useIntersectionObserver from './useIntersectionObserver';
import { useMode } from "./context";

const Heading = (props) => {
    const sectionRef = useRef(null);
    const isIntersecting = useIntersectionObserver(sectionRef, { threshold: 0.5 });

    const {mode} = useMode ();

  return (
    <h3 className={`text-center about-heading ${mode ? "dark" : ""}`}>
                            <p className={`border-heading ${isIntersecting ? 'topIn' : ''} ${mode ? "dark-border" : ""}`}  ref={sectionRef}>{props.title1} <span className="home-text">{props.title2}</span></p></h3>
  )
}

export default Heading
