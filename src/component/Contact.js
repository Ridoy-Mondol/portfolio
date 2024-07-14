import React, { useState, useEffect, useRef } from "react";
import useObserver from './useObserver';
import Heading from "./heading";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useMode } from "./context";
const Contact = () => {
    const [data,setData] = useState({
        name:"",
        email:"",
        phone:"",
        subject:"",
        message:""
    })
    const userData = (event) => {
        const {name,value} = event.target;
    
    setData((prev) => {
        return( 
        {
            ...prev,
           [name] : value,
        }
        )
    })
}

const getData = async (elem) => {
    elem.preventDefault();
    if(data.name.length > 0 && data.phone.length > 0 && data.email.length > 0 && data.subject.length > 0 && data.message.length > 0 ) {
    toast.success(`Thank you.
    Your fullname is ${data.name},Your phone no. is ${data.phone},Your email is ${data.email},Your subject is ${data.subject},Your message is ${data.message},`);

    setData({
       name: "",
       email: "",
       phone: "",
       subject: "",
       message: ""
    });

//   await fetch(`http://localhost:5000`, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body:JSON.stringify(data),
//   })
}
 else {
    toast.error("All fields are required");
 }
}

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

    const imgEntry = entries.find(e => e.id === 'contact-link');
    const textEntry = entries.find(e => e.id === 'contact-form');
    const isImgIntersecting = imgEntry ? imgEntry.isIntersecting : false;
    const isTextIntersecting = textEntry ? textEntry.isIntersecting : false;

const {mode} = useMode ();

    return (
        <div className="about-div" id="contact">
        <div className="container">
        <Heading title1 = "Contact" title2 = "Me"/>
        <div className="row">
            <div className="col-md-6 contact-info">
            <div className="ms-md-5 mt-5 mt-sm-0" ref={imgRef} id="contact-link">

            <Link target="_black" to= "https://www.linkedin.com/in/md-ridoy-mondol-885555297/" className={`d-flex align-items-center text-decoration-none linkedin ${isImgIntersecting ? 'leftIn' : ''} ${mode ? "dark" : ""}`}>
              <i className="fa-brands fa-linkedin contact-icon"></i>
              <span className="contact-text">Md. Ridoy Mondol</span>
            </Link>

            <Link target="_black" to="https://www.facebook.com/profile.php?id=100015131225530" className={`d-flex align-items-center text-decoration-none my-4 linkedin ${isImgIntersecting ? 'leftIn' : ''} ${mode ? "dark" : ""}`}>
              <i className="fa-brands fa-facebook contact-icon"></i>
              <span className="contact-text">Ridoy Mondol</span>
            </Link>
            
             <Link target="_black" to= "https://wa.me/8801319118383" className={`text-decoration-none d-flex align-items-center my-4 linkedin ${isImgIntersecting ? 'leftIn' : ''} ${mode ? "dark" : ""}`}>   
            <i className="fa-brands fa-whatsapp contact-icon"></i>
            <span className="contact-text">+8801319118383</span>
            </Link>

            <Link target="_black" to="mailto:ridoymondol140@gmail.com" className={`text-decoration-none my-4 d-flex align-items-center gmail ${isImgIntersecting ? 'leftIn' : ''} ${mode ? "dark" : ""}`}>
            <i className="fa-solid fa-envelope contact-icon"></i>
            <span className="contact-text">ridoymondol140@gmail.com</span>
            </Link>
            
            <Link target="_black" to="https://github.com/Ridoy-Mondol" className={`text-decoration-none my-4 d-flex align-items-center linkedin ${isImgIntersecting ? 'leftIn' : ''} ${mode ? "dark" : ""}`}>
            <i className="fa-brands fa-github contact-icon"></i>
            <span className="contact-text">Ridoy Mondol</span>
            </Link>

            <div className={`d-flex align-items-center gmail ${isImgIntersecting ? 'leftIn' : ''} ${mode ? "dark" : ""}`}>
            <i className="fa-solid fa-location-arrow contact-icon"></i>
            <span className="contact-text">Rajshahi, Bangladesh</span>
            </div>
            </div>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
                <form action= "https://formspree.io/f/xkndrzjn" method="POST" ref={textRef} id="contact-form">
                    <div className={`mx-auto ${isTextIntersecting ? 'rightIn' : ''}`}>
                    <input 
                    type="text" 
                    placeholder="Full Name" 
                    name="name" 
                    value={data.name}
                    autoComplete='off' 
                    required= "required"
                    onChange={userData}
                    className={`input-div ${mode ? "input-light" : ""}`} />
                    </div>
                    <div className={`${isTextIntersecting ? 'rightIn' : ''}`}>
                    <input 
                    type="email" 
                    placeholder="Email Address" name="email" 
                    value={data.email} 
                    autoComplete='off'
                    required= "required"
                    onChange={userData}  
                    className={`input-div mt-3  ${mode ? "input-light" : ""}`} />
                    </div>
                    <div className="input-flex mt-3">
                    <input 
                    type="number" 
                    placeholder="Phone Number" name="phone" 
                    value={data.phone}
                    autoComplete='off'
                    required= "required" 
                    onChange={userData} 
                    className={`input-inline ${isTextIntersecting ? 'rightIn' : ''} ${mode ? "input-light" : ""}`} />
                    <input 
                    type="text" placeholder="Subject" 
                    name="subject" 
                    value={data.subject}
                    autoComplete='off'
                    required= "required" 
                    onChange={userData} 
                    className={`input-inline ${isTextIntersecting ? 'rightIn' : ''} ${mode ? "input-light" : ""}`} />
                    </div>
                    <div className={`${isTextIntersecting ? 'rightIn' : ''}`}>
                    <textarea 
                    type="text" 
                    placeholder="Your Message" name="message" 
                    value={data.message}
                    autoComplete='off'
                    required= "required" 
                    onChange={userData} className={`input-div input-msg mt-3  ${mode ? "input-light" : ""}`} >
                    </textarea>
                    </div>
                    <div className="text-center">
                    <button
                    type = "submit" 
                    className={`contact-btn nav-btn mt-3 ${isTextIntersecting ? 'rightIn' : ''} ${mode ? "btn-light" : ""}`}
                    onSubmit={getData} 
                    >
                       Send
                    </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Contact;








