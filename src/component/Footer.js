import React, { useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import { useMode } from "./context";
const Footer = () => {
  const sectionRef = useRef(null);
  const isIntersecting = useIntersectionObserver(sectionRef, {
    threshold: 0.2,
  });

  const { mode } = useMode();

  return (
    <footer ref={sectionRef}>
      <span
        className={`${isIntersecting ? "rightIn" : ""} ${
          mode ? "dark" : "light-color"
        }`}
      >
        Copyright &copy; : {new Date().getFullYear()} | All Rights Reserved By
        Ahatashamul Islam
      </span>
    </footer>
  );
};
export default Footer;
