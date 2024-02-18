import project_1 from "../component/images/e-commerce.png";
import project_2 from "../component/images/cakezone.png"
import project_3 from "../component/images/coffeshop.png"
import project_4 from "../component/images/carvilla.png";
import project_5 from "../component/images/portfolio.png"
const Api = [
    {
        id:1,
        icon :"fa-solid fa-laptop-code icon",
        category:"Web Development",
        description:"I am a web developer, skilled in coding, and creating engaging websites.My expertise allows me to fix and optimize websites effectively.I specialize in shaping businesses' and individuals' online presence",
    },
    {
        id:2,
        icon :"fa-brands fa-css3 icon",
        category:"Web Design",
        description:"As a web designer, my expertise lies in crafting visually appealing and intuitive websites. I combine artistic flair with technical know-how, ensuring that every design is not only beautiful but also user-friendly.",
    },
    {
        id:3,
        icon :"fa-brands fa-shopify icon",
        category:"Shopify Development",
        description:"As a Shopify developer, I specialize in creating seamless e-commerce solutions for businesses. My expertise lies in harnessing the power of Shopify's platform, transforming ideas into fully functional online stores.",
    }
]
const Api_2 = [
     {
        language : "HTML",
        class : "html progress",
        percentage : "90%"
     },
     {
        language : "CSS",
        class : "css progress ",
        percentage : "85%"
     },
     {
        language : "Bootstrap",
        class : "bootstrap progress",
        percentage : "80%"
     },
     {
        language : "JavaScript",
        class : "js progress",
        percentage : "80%"
     },
     {
        language : "React Js",
        class : "react progress",
        percentage : "90%"
     },
]
const Portfolio_Api = [
   {
      id : 1,
      title : "RIDOY SHOP",
      img_src : project_1,
      description : "This is a fully responsive and interactive e-commerce website developed using React.js, integrating APIs, Redux Toolkit, and following core React principles.",
      link : "https://ridoy-mondol.github.io/e-commerce/",
   },
   {
      id : 2,
      title : "CAKEZONE",
      img_src : project_2,
      description : "This is a complete responsive and dynamic website named CakeZone, built using React.js and implementing to best practices in React development.",
      link : "https://ridoy-mondol.github.io/_cakezone/",
   },
   {
      id : 3,
      title : "COFFESHOP",
      img_src : project_3,
      description : "This website for a coffee shop is user-friendly and fully functional, crafted with React.js for optimal performance. It offers a seamless experience for customers.",
      link : "https://ridoy-mondol.github.io/coffeshop/",
   },
   {
      id : 4,
      title : "CARVILLA",
      img_src : project_4,
      description : "This modern, innovative website for selling cars is developed using React.js. It offers a cutting-edge platform for buyers to explore a wide range of vehicles.",
      link : "https://ridoy-mondol.github.io/carvilla/",
   },
   {
      id : 5,
      title : "PORTFOLIO",
      img_src : project_5,
      description : "This is my portfolio website, crafted with React.js, seamlessly presents my skills, projects, and provides a comprehensive overview of my capabilities.",
      link : "https://ridoy-mondol.github.io/portfolio/",
   },
]
export default Api;
export {Api_2,Portfolio_Api};