import React, { useEffect, useRef } from 'react';
import img from "../component/images/linkedIn_profile.jpeg";
import useObserver from './useObserver';
import { useMode } from "./context";
const Home = () => {

  const imgRef = useRef(null);
    const textRef = useRef(null);
    const { entries, observe, unobserve } = useObserver({ threshold: 0.5 });

    useEffect(() => {
        observe(imgRef);
        observe(textRef);
        return () => {
            unobserve(imgRef);
            unobserve(textRef);
        };
    }, [observe, unobserve]);

    const imgEntry = entries.find(e => e.id === 'home-img');
    const textEntry = entries.find(e => e.id === 'home-text');
    const isImgIntersecting = imgEntry ? imgEntry.isIntersecting : false;
    const isTextIntersecting = textEntry ? textEntry.isIntersecting : false;

  const {mode} = useMode ();

    return (
      <div id="home">
        <div className={`home-bg home-white-txt d-flex align-items-center`}>
          <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                  <div className='overflow-hidden'  ref={textRef} id="home-text">
                  <h4 className={`home-text home-margin ${isTextIntersecting ? 'bottomIn' : ''}`}>Hi,It's Me</h4>
                  <h1 className={`hide-item home-white-txt ${isTextIntersecting ? 'bottomIn' : ''} ${mode ? "dark" : ""}`}>Md. RIDOY MONDOL</h1>
                  <h2 className={`hide-laptop home-white-txt ${isTextIntersecting ? 'bottomIn' : ''} ${mode ? "dark" : ""}`}>Md. RIDOY MONDOL</h2>
                  <h4 className={`home-white-txt  ${isTextIntersecting ? 'bottomIn' : ''} ${mode ? "dark" : ""}`}>And I'm a <span className="home-text">Full Stack Developer</span></h4>
                  <p className={`my-description ${isTextIntersecting ? 'bottomIn' : ''} ${mode ? "dark" : "light-color"}`}>specializing in the MERN stack. I build dynamic web applications with expertise in <span className="text-orange-2">React.js</span>, 
                  <span className="text-orange-2"> Next.js</span>,
                  <span className="text-orange-2"> Node.js</span>, 
                  <span className="text-orange-2"> Express.js</span> and 
                  <span className="text-orange-2"> MongoDB</span>, ensuring seamless user experiences from concept to deployment.</p>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center overflow-hidden" ref={imgRef} id="home-img">
                    <img src = {img} alt = "" width="350" className={`img-fluid home-img ${isImgIntersecting ? 'topIn' : ''}`}/>
                </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default Home;


