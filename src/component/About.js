import img from "../component/images/My_newprofile.jpg";
import React, { useState, useRef, useEffect } from "react";
import useObserver from './useObserver';
import Heading from "./heading";
import { useMode } from "./context";

const About = () => {
    const [display, setDisplay] = useState(false);
    const showText = () => {
        setDisplay(!display);
    };

    const imgRef = useRef(null);
    const h4Ref = useRef(null);
    const h51Ref = useRef(null);
    const p1Ref = useRef(null);
    const p2Ref = useRef(null);
    const p3Ref = useRef(null);
    const p4Ref = useRef(null);
    const h52Ref = useRef(null);
    const p5Ref = useRef(null);
    const p6Ref = useRef(null);
    const p7Ref = useRef(null);
    const h53Ref = useRef(null);
    const p8Ref = useRef(null);
    const p9Ref = useRef(null);
    const btnRef = useRef(null);

    const { entries, observe, unobserve } = useObserver({ threshold: 0.5 });

    useEffect(() => {
        observe(imgRef);
        observe(h4Ref);
        observe(h51Ref);
        observe(p1Ref);
        observe(p2Ref);
        observe(p3Ref);
        observe(p4Ref);
        observe(h52Ref);
        observe(p5Ref);
        observe(p6Ref);
        observe(p7Ref);
        observe(h53Ref);
        observe(p8Ref);
        observe(p9Ref);
        observe(btnRef);

        return () => {
            unobserve(imgRef);
            unobserve(h4Ref);
            unobserve(h51Ref);
            unobserve(p1Ref);
            unobserve(p2Ref);
            unobserve(p3Ref);
            unobserve(p4Ref);
            unobserve(h52Ref);
            unobserve(p5Ref);
            unobserve(p6Ref);
            unobserve(p7Ref);
            unobserve(h53Ref);
            unobserve(p8Ref);
            unobserve(p9Ref);
            unobserve(btnRef);
        };
    }, [observe, unobserve]);

    const imgEntry = entries.find(e => e.id === 'about-img');
    const isImgIntersecting = imgEntry ? imgEntry.isIntersecting : false;

    const h4Entry = entries.find(e => e.id === 'about-h4');
    const isH4Intersecting = h4Entry ? h4Entry.isIntersecting : false;

    const h51Entry = entries.find(e => e.id === 'about-h51');
    const isH51Intersecting = h51Entry ? h51Entry.isIntersecting : false;

    const p1Entry = entries.find(e => e.id === 'about-p1');
    const isP1Intersecting = p1Entry ? p1Entry.isIntersecting : false;

    const p2Entry = entries.find(e => e.id === 'about-p2');
    const isP2Intersecting = p2Entry ? p2Entry.isIntersecting : false;

    const p3Entry = entries.find(e => e.id === 'about-p3');
    const isP3Intersecting = p3Entry ? p3Entry.isIntersecting : false;

    const p4Entry = entries.find(e => e.id === 'about-p4');
    const isP4Intersecting = p4Entry ? p4Entry.isIntersecting : false;

    const h52Entry = entries.find(e => e.id === 'about-h52');
    const isH52Intersecting = h52Entry ? h52Entry.isIntersecting : false;

    const p5Entry = entries.find(e => e.id === 'about-p5');
    const isP5Intersecting = p5Entry ? p5Entry.isIntersecting : false;

    const p6Entry = entries.find(e => e.id === 'about-p6');
    const isP6Intersecting = p6Entry ? p6Entry.isIntersecting : false;

    const p7Entry = entries.find(e => e.id === 'about-p7');
    const isP7Intersecting = p7Entry ? p7Entry.isIntersecting : false;

    const h53Entry = entries.find(e => e.id === 'about-h53');
    const isH53Intersecting = h53Entry ? h53Entry.isIntersecting : false;

    const p8Entry = entries.find(e => e.id === 'about-p8');
    const isP8Intersecting = p8Entry ? p8Entry.isIntersecting : false;

    const p9Entry = entries.find(e => e.id === 'about-p9');
    const isP9Intersecting = p9Entry ? p9Entry.isIntersecting : false;

    const btnEntry = entries.find(e => e.id === 'about-btn');
    const isBtnIntersecting = btnEntry ? btnEntry.isIntersecting : false;

    const { mode } = useMode();

    return (
        <div id="about">
            <div className="about-div text-white">
                <div className="container about-container">
                    <div className="row">
                        <Heading title1="About" title2="Me" />
                        <div className="col-md-6 img-div mt-2" ref={imgRef} id="about-img">
                            <img src={img} alt="" className={`img-fluid about-img ${isImgIntersecting ? 'leftIn' : ''}`} />
                        </div>
                        <div className={`col-md-6 overflow-hidden ${mode ? "dark" : "light-color"}`}>
                            <div ref={h4Ref} id="about-h4">
                                <h4 className={`${isH4Intersecting ? 'rightIn' : ''}`}>Full Stack Web Developer</h4>
                            </div>
                            <div ref={h51Ref} id="about-h51">
                                <h5 className={`${isH51Intersecting ? 'rightIn' : ''}`}>What I Do:</h5>
                            </div>
                            <div ref={p1Ref} id="about-p1">
                                <p className={`my-description ${isP1Intersecting ? 'rightIn' : ''}`}>
                                    Hey there! I'm Md. RIDOY MONDOL, a passionate full-stack developer specializing in the MERN stack. With a background in frontend design and a deep understanding of backend development, I bring a holistic approach to creating robust web applications.
                                </p>
                            </div>
                            <div ref={p2Ref} id="about-p2">
                                <p className={`${isP2Intersecting ? 'rightIn' : ''}`}>
                                    <span className="text-orange">🌐 Full-Stack Mastery:</span> I excel in building end-to-end web solutions using MongoDB, Express.js, React.js, and Node.js (MERN stack), ensuring both frontend elegance and backend efficiency.
                                </p>
                            </div>
                            <div ref={p3Ref} id="about-p3">
                                <p className={`${isP3Intersecting ? 'rightIn' : ''}`}>
                                    <span className="text-orange">🚀 Frontend Magic:</span> Leveraging React.js, Next.js, JavaScript, HTML, CSS, Bootstrap and Tailwind CSS I develop responsive and interactive interfaces that engage users and enhance usability.
                                </p>
                            </div>
                            <div ref={p4Ref} id="about-p4">
                                <p className={`${isP4Intersecting ? 'rightIn' : ''}`}>
                                    <span className="text-orange">⚙️ Backend Expertise:</span> From database management to server-side logic, I implement CRUD operations, REST APIs, authentication, authorization, and caching to optimize performance and security.
                                </p>
                            </div>
                            {display && (
                                <div className="overflow-hidden">
                                    <div ref={h52Ref} id="about-h52">
                                        <h5 className={`${isH52Intersecting ? 'rightIn' : ''}`}>Why Choose Me:</h5>
                                    </div>
                                    <div ref={p5Ref} id="about-p5">
                                        <p className={`${isP5Intersecting ? 'rightIn' : ''}`}><span className="text-orange">✅ Seamless Integration:</span> I ensure seamless integration of frontend designs with backend functionalities, delivering cohesive and scalable web applications.</p>
                                    </div>
                                    <div ref={p6Ref} id="about-p6">
                                        <p className={`${isP6Intersecting ? 'rightIn' : ''}`}><span className="text-orange">✅ Future-Proof Solutions:</span> I stay ahead by exploring new technologies and methodologies, ensuring your project remains modern and adaptable to future demands.</p>
                                    </div>
                                    <div ref={p7Ref} id="about-p7">
                                        <p className={`${isP7Intersecting ? 'rightIn' : ''}`}><span className="text-orange">✅ Collaborative Approach:</span> Whether you're a business seeking a robust online presence or a developer looking to partner on projects, I'm dedicated to turning ideas into impactful digital solutions.</p>
                                    </div>
                                    <div ref={h53Ref} id="about-h53">
                                        <h5 className={`${isH53Intersecting ? 'rightIn' : ''}`}>Let's Create Something Beautiful Together!</h5>
                                    </div>
                                    <div ref={p8Ref} id="about-p8">
                                        <p className={`margin-text ${isP8Intersecting ? 'rightIn' : ''}`}>Let's collaborate and bring your vision to life. Explore my portfolio to see examples of my work and reach out to discuss how we can create something exceptional together.</p>
                                    </div>
                                    <div ref={p9Ref} id="about-p9">
                                        <p className={`${isP9Intersecting ? 'topIn' : ''}`}>Ready to innovate? Let's connect!</p>
                                    </div>
                                </div>
                            )}
                            <button className={`nav-btn mt-4 ${isBtnIntersecting ? 'rightIn' : ''} ${mode ? "dark-btn about-btn-hover" : ""}`} onClick={showText} ref={btnRef} id="about-btn">
                                {display ? "See Less" : "See More"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
