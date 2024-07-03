import img from "../component/images/My_newprofile.jpg";
import React, { useState } from "react";

const About = () => {
    const [display, setDisplay] = useState(false);
    const showText = () => {
        setDisplay(!display);
    }

    return (
        <div id="about">
            <div className="about-div text-white">
                <div className="container about-container">
                    <div className="row">
                        <h3 className="text-center about-heading">
                            <span className="border-heading text-white">About <span className="home-text">Me</span></span>
                        </h3>
                        <div className="col-md-6 img-div mt-2">
                            <img src={img} alt="" width="600" className="img-fluid about-img" style={{ height: "40rem" }} />
                        </div>
                        <div className="col-md-6">
                            <h4 className="text-white">Full Stack Web Developer</h4>
                            <p className="my-description">
                                Hey there! I'm Md. RIDOY MONDOL, a passionate full-stack developer specializing in the MERN stack. With a background in frontend design and a deep understanding of backend development, I bring a holistic approach to creating robust web applications.
                            </p>

                            <h5 className="margin-heading">What I Do:</h5>

                            <p className="">
                                <span className="text-orange">🌐 Full-Stack Mastery:</span> I excel in building end-to-end web solutions using MongoDB, Express.js, React.js, and Node.js (MERN stack), ensuring both frontend elegance and backend efficiency.
                            </p>
                            <p className="">
                                <span className="text-orange">🚀 Frontend Magic:</span> Leveraging React.js, Next.js, JavaScript, HTML, CSS, Bootstrap and Tailwind CSS I develop responsive and interactive interfaces that engage users and enhance usability.
                            </p>
                            <p className="">
                                <span className="text-orange">⚙️ Backend Expertise:</span> From database management to server-side logic, I implement CRUD operations, REST APIs, authentication, authorization, and caching to optimize performance and security.
                            </p>

                            {display && (
                                <div>
                                    <h5 className="margin-heading">Why Choose Me:</h5>
                                    <p><span className="text-orange">✅ Seamless Integration:</span> I ensure seamless integration of frontend designs with backend functionalities, delivering cohesive and scalable web applications.</p>
                                    <p><span className="text-orange">✅ Future-Proof Solutions:</span> I stay ahead by exploring new technologies and methodologies, ensuring your project remains modern and adaptable to future demands.</p>
                                    <p><span className="text-orange">✅ Collaborative Approach:</span> Whether you're a business seeking a robust online presence or a developer looking to partner on projects, I'm dedicated to turning ideas into impactful digital solutions.</p>
                                    <h5 className="margin-heading">Let's Create Something Beautiful Together!</h5>
                                    <p className="margin-text">Let's collaborate and bring your vision to life. Explore my portfolio to see examples of my work and reach out to discuss how we can create something exceptional together.</p>
                                    <p>Ready to innovate? Let's connect!</p>
                                </div>
                            )}
                            <button className="nav-btn mt-4" onClick={showText}>
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
