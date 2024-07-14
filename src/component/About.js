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

    const imgEntry = entries.find(e => e.id === 'about-img');
    const textEntry = entries.find(e => e.id === 'about-text');
    const isImgIntersecting = imgEntry ? imgEntry.isIntersecting : false;
    const isTextIntersecting = textEntry ? textEntry.isIntersecting : false;

    const { mode } = useMode();

    return (
        <div id="about">
            <div className="about-div text-white">
                <div className="container about-container">
                    <div className="row">
                        <Heading title1="About" title2="Me" />
                        <div className="col-md-6 img-div mt-2" ref={imgRef} id="about-img">
                            <img src={img} alt="" className={`img-fluid about-img ${isImgIntersecting ? 'topIn' : ''}`} />
                        </div>
                        <div className={`col-md-6 overflow-hidden ${mode ? "dark" : "light-color"}`} ref={textRef} id="about-text">
                            <h4 className={`${isTextIntersecting ? 'bottomIn' : ''}`}>Full Stack Web Developer</h4>
                            <p className={`my-description ${isTextIntersecting ? 'bottomIn' : ''}`}>
                                Hey there! I'm Md. RIDOY MONDOL, a passionate full-stack developer specializing in the MERN stack. With a background in frontend design and a deep understanding of backend development, I bring a holistic approach to creating robust web applications.
                            </p>
                            <h5 className={`margin-heading ${isTextIntersecting ? 'bottomIn' : ''}`}>What I Do:</h5>
                            <p className={`${isTextIntersecting ? 'bottomIn' : ''}`}>
                                <span className="text-orange">🌐 Full-Stack Mastery:</span> I excel in building end-to-end web solutions using MongoDB, Express.js, React.js, and Node.js (MERN stack), ensuring both frontend elegance and backend efficiency.
                            </p>
                            <p className={`${isTextIntersecting ? 'bottomIn' : ''}`}>
                                <span className="text-orange">🚀 Frontend Magic:</span> Leveraging React.js, Next.js, JavaScript, HTML, CSS, Bootstrap and Tailwind CSS I develop responsive and interactive interfaces that engage users and enhance usability.
                            </p>
                            <p className={`${isTextIntersecting ? 'bottomIn' : ''}`}>
                                <span className="text-orange">⚙️ Backend Expertise:</span> From database management to server-side logic, I implement CRUD operations, REST APIs, authentication, authorization, and caching to optimize performance and security.
                            </p>
                            {display && (
                                <div className="overflow-hidden">
                                    <h5 className={`margin-heading ${isTextIntersecting ? 'bottomIn' : ''}`}>Why Choose Me:</h5>
                                    <p className={`${isTextIntersecting ? 'bottomIn' : ''}`}><span className="text-orange">✅ Seamless Integration:</span> I ensure seamless integration of frontend designs with backend functionalities, delivering cohesive and scalable web applications.</p>
                                    <p className={`${isTextIntersecting ? 'bottomIn' : ''}`}><span className="text-orange">✅ Future-Proof Solutions:</span> I stay ahead by exploring new technologies and methodologies, ensuring your project remains modern and adaptable to future demands.</p>
                                    <p className={`${isTextIntersecting ? 'bottomIn' : ''}`}><span className="text-orange">✅ Collaborative Approach:</span> Whether you're a business seeking a robust online presence or a developer looking to partner on projects, I'm dedicated to turning ideas into impactful digital solutions.</p>
                                    <h5 className={`margin-heading ${isTextIntersecting ? 'bottomIn' : ''}`}>Let's Create Something Beautiful Together!</h5>
                                    <p className={`margin-text ${isTextIntersecting ? 'bottomIn' : ''}`}>Let's collaborate and bring your vision to life. Explore my portfolio to see examples of my work and reach out to discuss how we can create something exceptional together.</p>
                                    <p className={`${isTextIntersecting ? 'bottomIn' : ''}`}>Ready to innovate? Let's connect!</p>
                                </div>
                            )}
                            <button className={`nav-btn mt-4 ${isTextIntersecting ? 'bottomIn' : ''} ${mode ? "dark-btn about-btn-hover" : ""}`} onClick={showText}>
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

