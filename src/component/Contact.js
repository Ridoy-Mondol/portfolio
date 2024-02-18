import {useState} from "react";
import { Link } from "react-router-dom";
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

const getData = (elem) => {
    elem.preventDefault();
    if(data.name.length > 0 && data.phone.length > 0 && data.email.length > 0 && data.subject.length > 0 && data.message.length > 0 ) {
    alert(`Thank you.
Your fullname is ${data.name},Your phone no. is ${data.phone},Your email is ${data.email},Your subject is ${data.subject},Your message is ${data.message},`);

setData({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
}
 else {
    alert("All fields are required");
 }
}
    return (
        <div className="about-div" id="contact">
        <div className="container">
        <h3 className="text-center contact-heading"><span className="border-heading">Contact <span className="home-text">Me</span></span></h3>
        <div className="row">
            <div className="col-md-6 contact-info">
            <div className="ms-md-5 mt-5 mt-sm-0">

            <Link to="https://www.linkedin.com/in/md-ridoy-mondol-885555297/" className="d-flex align-items-center text-decoration-none text-white linkedin">
              <i className="fa-brands fa-linkedin contact-icon"></i>
              <span className="contact-text">Md. Ridoy Mondol</span>
            </Link>

            <Link to="https://www.facebook.com/profile.php?id=100015131225530" className="d-flex align-items-center text-decoration-none text-white my-4">
              <i className="fa-brands fa-facebook contact-icon"></i>
              <span className="contact-text">Ridoy Mondol</span>
            </Link>
            
             <div className="d-flex align-items-center my-4">   
            <i className="fa-brands fa-whatsapp contact-icon"></i>
            <span className="contact-text">+8801319118383</span>
            </div>
            <div className="my-4 d-flex align-items-center">
            <i className="fa-solid fa-envelope contact-icon"></i>
            <span className="contact-text">ridoymondol140@gmail.com</span>
            </div>
            <div className="d-flex align-items-center">
            <i className="fa-solid fa-location-arrow contact-icon"></i>
            <span className="contact-text">Rajshahi, Bangladesh</span>
            </div>
            </div>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
                <form action="https://formspree.io/f/xkndrzjn" method="POST" onSubmit={getData}>
                    <div className="mx-auto">
                    <input type="text" placeholder="Full Name" name="name" value={data.name} onChange={userData} className="input-div" />
                    </div>
                    <div>
                    <input type="email" placeholder="Email Address" name="email" value={data.email} onChange={userData}  className="input-div mt-3" />
                    </div>
                    <div className="input-flex mt-3">
                    <input type="number" placeholder="Phone Number" name="phone" value={data.phone} onChange={userData} className="input-inline" />
                    <input type="text" placeholder="Subject" name="subject" value={data.subject} onChange={userData} className="input-inline" />
                    </div>
                    <div>
                    <input type="text" placeholder="Your Message" name="message" value={data.message} onChange={userData} className="input-div input-msg mt-3" />
                    </div>
                    <div className="text-center">
                    <button type = "submit" className="contact-btn nav-btn mt-3">Send</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Contact;