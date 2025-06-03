import React, { useState, useEffect, useRef } from "react";
import useObserver from "./useObserver";
import Heading from "./heading";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useMode } from "./context";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const userData = (event) => {
    const { name, value } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getData = async (elem) => {
    elem.preventDefault();
    if (
      data.name.length > 0 &&
      data.phone.length > 0 &&
      data.email.length > 0 &&
      data.subject.length > 0 &&
      data.message.length > 0
    ) {
      toast.success(
        `Thank you. Your fullname is ${data.name}, Your phone no. is ${data.phone}, Your email is ${data.email}, Your subject is ${data.subject}, Your message is ${data.message}`
      );

      setData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // await fetch(`http://localhost:5000`, {
      //     method: "POST",
      //     headers: {
      //         "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify(data),
      // });
    } else {
      toast.error("All fields are required");
    }
  };

  const linkedInRef = useRef(null);
  const facebookRef = useRef(null);
  const whatsappRef = useRef(null);
  const emailRef = useRef(null);
  const githubRef = useRef(null);
  const locationRef = useRef(null);

  const nameRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const btnRef = useRef(null);

  const { entries, observe, unobserve } = useObserver({ threshold: 0.6 });

  useEffect(() => {
    observe(linkedInRef);
    observe(facebookRef);
    observe(whatsappRef);
    observe(emailRef);
    observe(githubRef);
    observe(locationRef);
    observe(nameRef);
    observe(emailInputRef);
    observe(phoneRef);
    observe(messageRef);
    observe(btnRef);

    return () => {
      unobserve(linkedInRef);
      unobserve(facebookRef);
      unobserve(whatsappRef);
      unobserve(emailRef);
      unobserve(githubRef);
      unobserve(locationRef);
      unobserve(nameRef);
      unobserve(emailInputRef);
      unobserve(phoneRef);
      unobserve(messageRef);
      unobserve(btnRef);
    };
  }, [observe, unobserve]);

  const linkedInEntry = entries.find((e) => e.id === "contact-linkedin");
  const facebookEntry = entries.find((e) => e.id === "contact-facebook");
  const whatsappEntry = entries.find((e) => e.id === "contact-whatsapp");
  const emailEntry = entries.find((e) => e.id === "contact-email");
  const githubEntry = entries.find((e) => e.id === "contact-github");
  const locationEntry = entries.find((e) => e.id === "contact-location");

  const nameEntry = entries.find((e) => e.id === "contact-name");
  const emailInputEntry = entries.find((e) => e.id === "contact-email-input");
  const phoneEntry = entries.find((e) => e.id === "contact-phone");
  const messageEntry = entries.find((e) => e.id === "contact-message");
  const btnEntry = entries.find((e) => e.id === "contact-btn");

  const isLinkedInIntersecting = linkedInEntry
    ? linkedInEntry.isIntersecting
    : false;
  const isFacebookIntersecting = facebookEntry
    ? facebookEntry.isIntersecting
    : false;
  const isWhatsappIntersecting = whatsappEntry
    ? whatsappEntry.isIntersecting
    : false;
  const isEmailIntersecting = emailEntry ? emailEntry.isIntersecting : false;
  const isGithubIntersecting = githubEntry ? githubEntry.isIntersecting : false;
  const isLocationIntersecting = locationEntry
    ? locationEntry.isIntersecting
    : false;

  const isNameIntersecting = nameEntry ? nameEntry.isIntersecting : false;
  const isEmailInputIntersecting = emailInputEntry
    ? emailInputEntry.isIntersecting
    : false;
  const isPhoneIntersecting = phoneEntry ? phoneEntry.isIntersecting : false;
  const isMessageIntersecting = messageEntry
    ? messageEntry.isIntersecting
    : false;
  const isBtnIntersecting = btnEntry ? btnEntry.isIntersecting : false;

  const { mode } = useMode();

  return (
    <div className="about-div" id="contact">
      <div className="container">
        <Heading title1="Contact" title2="Me" />
        <div className="row">
          <div className="col-md-6 contact-info">
            <div className="mt-5 mt-sm-0">
              <div ref={linkedInRef} id="contact-linkedin">
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/md-ridoy-mondol-885555297/"
                  className={`d-flex align-items-center text-decoration-none linkedin ${
                    isLinkedInIntersecting ? "leftIn" : ""
                  } ${mode ? "dark light-link" : ""}`}
                >
                  <i className="fa-brands fa-linkedin contact-icon"></i>
                  <span className="contact-text">Md. Ridoy Mondol</span>
                </Link>
              </div>

              <div ref={facebookRef} id="contact-facebook">
                <Link
                  target="_blank"
                  to="https://www.facebook.com/profile.php?id=100015131225530"
                  className={`d-flex align-items-center text-decoration-none my-4 linkedin ${
                    isFacebookIntersecting ? "leftIn" : ""
                  } ${mode ? "dark light-link" : ""}`}
                >
                  <i className="fa-brands fa-facebook contact-icon"></i>
                  <span className="contact-text">Ridoy Mondol</span>
                </Link>
              </div>

              <div ref={whatsappRef} id="contact-whatsapp">
                <Link
                  target="_blank"
                  to="https://wa.me/8801319118383"
                  className={`text-decoration-none d-flex align-items-center linkedin ${
                    isWhatsappIntersecting ? "leftIn" : ""
                  } ${mode ? "dark light-link" : ""}`}
                >
                  <i className="fa-brands fa-whatsapp contact-icon"></i>
                  <span className="contact-text">+8801319118383</span>
                </Link>
              </div>

              <div ref={emailRef} id="contact-email">
                <Link
                  target="_blank"
                  to="mailto:ahatashamul140@gmail.com"
                  className={`text-decoration-none my-4 d-flex align-items-center gmail ${
                    isEmailIntersecting ? "leftIn" : ""
                  } ${mode ? "dark light-link" : ""}`}
                >
                  <i className="fa-solid fa-envelope contact-icon"></i>
                  <span className="contact-text">ahatashamul140@gmail.com</span>
                </Link>
              </div>

              <div ref={githubRef} id="contact-github">
                <Link
                  target="_blank"
                  to="https://github.com/Ridoy-Mondol"
                  className={`text-decoration-none d-flex align-items-center linkedin ${
                    isGithubIntersecting ? "leftIn" : ""
                  } ${mode ? "dark light-link" : ""}`}
                >
                  <i className="fa-brands fa-github contact-icon"></i>
                  <span className="contact-text">Ridoy Mondol</span>
                </Link>
              </div>

              <div ref={locationRef} id="contact-location">
                <Link
                  target="_blank"
                  to="https://www.google.com/maps/place/Rajshahi/@24.3795917,88.6061601,13z/data=!3m1!4b1!4m6!3m5!1s0x39fbefa96a38d031:0x10f93a950ed6f410!8m2!3d24.3746497!4d88.6003665!16zL20vMDR2MDc2?entry=ttu"
                  className={`d-flex text-decoration-none align-items-center my-4 gmail location ${
                    isLocationIntersecting ? "leftIn" : ""
                  } ${mode ? "dark light-link" : ""}`}
                >
                  <i className="fa-solid fa-location-arrow contact-icon"></i>
                  <span className="contact-text">Rajshahi, Bangladesh</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0">
            <form action="https://formspree.io/f/xkndrzjn" method="POST">
              <div ref={nameRef} id="contact-name">
                <div
                  className={`mx-auto ${isNameIntersecting ? "rightIn" : ""}`}
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={data.name}
                    autoComplete="off"
                    required="required"
                    onChange={userData}
                    className={`input-div ${mode ? "input-light" : ""}`}
                  />
                </div>
              </div>

              <div ref={emailInputRef} id="contact-email-input">
                <div className={`${isEmailInputIntersecting ? "rightIn" : ""}`}>
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={data.email}
                    autoComplete="off"
                    required="required"
                    onChange={userData}
                    className={`input-div mt-3 ${mode ? "input-light" : ""}`}
                  />
                </div>
              </div>

              <div ref={phoneRef} id="contact-phone">
                <div className="input-flex mt-3">
                  <input
                    type="number"
                    placeholder="Phone"
                    name="phone"
                    value={data.phone}
                    autoComplete="off"
                    required="required"
                    onChange={userData}
                    className={`input-inline ${
                      isPhoneIntersecting ? "rightIn" : ""
                    } ${mode ? "input-light" : ""}`}
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={data.subject}
                    autoComplete="off"
                    required="required"
                    onChange={userData}
                    className={`input-inline ${
                      isPhoneIntersecting ? "rightIn" : ""
                    } ${mode ? "input-light" : ""}`}
                  />
                </div>
              </div>

              <div ref={messageRef} id="contact-message">
                <div className={`${isMessageIntersecting ? "rightIn" : ""}`}>
                  <textarea
                    type="text"
                    placeholder="Your Message"
                    name="message"
                    value={data.message}
                    autoComplete="off"
                    required="required"
                    onChange={userData}
                    className={`input-div input-msg mt-3 ${
                      mode ? "input-light" : ""
                    }`}
                  />
                </div>
              </div>

              <div ref={btnRef} id="contact-btn" className="text-center">
                <button
                  type="submit"
                  className={`contact-btn nav-btn mt-3 ${
                    isBtnIntersecting ? "rightIn" : ""
                  } ${mode ? "btn-light" : ""}`}
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
  );
};

export default Contact;
