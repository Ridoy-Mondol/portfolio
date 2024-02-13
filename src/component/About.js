import img from "../component/images/My_profile.jpeg";
import React,{ useState } from "react";
const About = () => {
    const[display, setDisplay] = useState(false);
    const showText = () => {
       setDisplay(!display);
    }
    return (
      <div id="about">
        <div className="about-div text-white">
          <div className="container about-container">
            <div className="row">
            <h3 className="text-center about-heading"><span className="border-heading">About <span className="home-text">Me</span></span></h3> 
            <div className="col-md-6 img-div">
                  <img src = {img} alt = "" width="350" className="img-fluid about-img"/>
                </div>
                <div className="col-md-6">
                  <h4 className="text-white">Frontend Web Developer &<br/> designer</h4>
                  <p className="my-description">Hey there! I'm Md. RIDOY MONDOL, a passionate frontend web developer and designer. With a keen eye for aesthetics and a knack for crafting seamless user experiences, I specialize in creating visually appealing and highly functional websites.

<h5 className="margin-heading">What I Do:</h5>

<p className=""><span className="text-orange">✨ Frontend Magic:</span> I breathe life into designs by seamlessly integrating HTML, CSS, Bootstrap, and JavaScript to create stunning frontend interfaces.</p>

<p className=""><span className="text-orange">🚀 React.js Expertise:</span> I am proficient in React.js, harnessing its power to build dynamic and responsive web applications that captivate users.</p>

<p className=""><span className="text-orange">🎨 Design Wizardry:</span> Beyond code, I possess a flair for design. I transform ideas into captivating visuals, ensuring the perfect marriage of form and function.</p>
<div className={display ? "show-text" : "hide-text"}>
<h5 className="margin-heading">Why Choose Me:</h5>

<p><span className="text-orange">✅ Responsive Design:</span> Every website I create is responsive, ensuring a flawless experience across various devices and screen sizes.</p>

<p><span className="text-orange">✅ Attention to Detail:</span> I obsess over every pixel, ensuring that the design is pixel-perfect and the user interface is seamless.</p>

<p><span className="text-orange">✅ Innovation at Heart:</span> I love experimenting with new technologies and trends, ensuring your website is not just modern but also future-proof.</p>

<h5 className="margin-heading">Let's Create Something Beautiful Together!</h5>

<p className="margin-text">Whether you're a business in need of a captivating online presence or a fellow developer looking to collaborate, I'm here to turn your visions into reality. Explore my portfolio to witness my creative journey and get in touch to discuss your next project.</p>
<p>Ready to embark on a digital adventure? Let's chat!</p>
</div>
<button className= "about-btn mt-4" onClick={showText}>{display ? "See Less" : "See More"}</button>
</p>

                </div>
            </div>
          </div>
        </div>
        
</div>

    )
}
export default About;