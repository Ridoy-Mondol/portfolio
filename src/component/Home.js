import React, { useEffect, useRef } from 'react';
import img from "../component/images/linkedIn_profile.jpeg";
import useObserver from './useObserver';
import { useMode } from "./context";

const Home = () => {
    const imgRef = useRef(null);
    const h4Ref = useRef(null);
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const h42Ref = useRef(null);
    const pRef = useRef(null);

    const { entries, observe, unobserve } = useObserver({ threshold: 0.5 });

    useEffect(() => {
        observe(imgRef);
        observe(h4Ref);
        observe(h1Ref);
        observe(h2Ref);
        observe(h42Ref);
        observe(pRef);

        return () => {
            unobserve(imgRef);
            unobserve(h4Ref);
            unobserve(h1Ref);
            unobserve(h2Ref);
            unobserve(h42Ref);
            unobserve(pRef);
        };
    }, [observe, unobserve]);

    const imgEntry = entries.find(e => e.id === 'home-img');
    const isImgIntersecting = imgEntry ? imgEntry.isIntersecting : false;

    const h4Entry = entries.find(e => e.id === 'home-h4');
    const isH4Intersecting = h4Entry ? h4Entry.isIntersecting : false;

    const h1Entry = entries.find(e => e.id === 'home-h1');
    const isH1Intersecting = h1Entry ? h1Entry.isIntersecting : false;

    const h2Entry = entries.find(e => e.id === 'home-h2');
    const isH2Intersecting = h2Entry ? h2Entry.isIntersecting : false;

    const h42Entry = entries.find(e => e.id === 'home-h42');
    const isH42Intersecting = h42Entry ? h42Entry.isIntersecting : false;

    const pEntry = entries.find(e => e.id === 'home-p');
    const isPIntersecting = pEntry ? pEntry.isIntersecting : false;

    const { mode } = useMode();

    return (
        <div id="home">
            <div className={`home-bg home-white-txt d-flex align-items-center`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <div className='overflow-hidden'>
                                <div ref={h4Ref} id="home-h4">
                                    <h4 className={`home-text home-margin ${isH4Intersecting ? 'leftIn' : ''}`}>Hi, It's Me</h4>
                                </div>
                                <div ref={h1Ref} id="home-h1">
                                    <h1 className={`hide-item home-white-txt ${isH1Intersecting ? 'leftIn' : ''} ${mode ? "dark" : ""}`}>Md. RIDOY MONDOL</h1>
                                </div>
                                <div ref={h2Ref} id="home-h2">
                                    <h2 className={`hide-laptop home-white-txt ${isH2Intersecting ? 'leftIn' : ''} ${mode ? "dark" : ""}`}>Md. RIDOY MONDOL</h2>
                                </div>
                                <div ref={h42Ref} id="home-h42">
                                    <h4 className={`home-white-txt ${isH42Intersecting ? 'leftIn' : ''} ${mode ? "dark" : ""}`}>And I'm a <span className="home-text">Full Stack Developer</span></h4>
                                </div>
                                <div ref={pRef} id="home-p">
                                    <p className={`my-description ${isPIntersecting ? 'leftIn' : ''} ${mode ? "dark" : "light-color"}`}>specializing in the MERN stack. I build dynamic web applications with expertise in <span className="text-orange-2">React.js</span>,
                                        <span className="text-orange-2"> Next.js</span>,
                                        <span className="text-orange-2"> Node.js</span>,
                                        <span className="text-orange-2"> Express.js</span> and
                                        <span className="text-orange-2"> MongoDB</span>, ensuring seamless user experiences from concept to deployment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center overflow-hidden" ref={imgRef} id="home-img">
                            <img src={img} alt="" width="350" className={`img-fluid home-img ${isImgIntersecting ? 'rightIn' : ''}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;



