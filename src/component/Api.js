import project_1 from "../component/images/next_blog.png"
import project_2 from "../component/images/e-commerce.png";
import project_3 from "../component/images/cakezone.png"
import project_4 from "../component/images/coffeshop.png"
import project_5 from "../component/images/carvilla.png"
import project_6 from "../component/images/portfolio.png"
const Api = [
    {
        id:1,
        icon :"fa-solid fa-laptop-code icon",
        category:"Full Stack Development",
        description:"I am a Full-Stack Developer in MERN stack, skilled in creating and optimizing engaging web apps. I specialize in enhancing the online presence of businesses and individuals with dynamic, user-friendly solutions.",
    },
    {
        id:2,
        icon :"fa-brands fa-react icon",
        category:"Frontend Development",
        description:"As a Frontend Web Developer, I create beautiful and easy-to-use websites using React.js and Next.js. I combine creativity with technical skills to make sure every website looks great and works well for users.",
    },
    {
        id:3,
        icon :"fa-solid fa-database icon",
        category:"Backend Development",
        description:"As a Backend Web Developer, I specialize in CRUD operations, REST APIs, authentication, authorization, and caching for efficient and secure web application development using Node.js, Next.js, Express.js, and MongoDB.",
    }
]
const Api_2 = [
     {
        language : "React.js",
        class : "react progress",
        percentage : "90%"
     },
     {
      language : "Next.js",
      class : "css progress",
      percentage : "85%"
   },
   {
      language : "Node.js",
      class : "js progress",
      percentage : "80%"
   },
   {
      language : "Express",
      class : "css progress",
      percentage : "85%"
   },
   {
      language : "MongoDB",
      class : "react progress",
      percentage : "90%"
   },
   {
      language : "Postgres",
      class : "react progress",
      percentage : "90%"
   },
   {
      language : "SQL",
      class : "js progress",
      percentage : "80%"
   },
   {
      language : "JavaScript",
      class : "js progress",
      percentage : "80%"
   },
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
    language : "Tailwind",
    class : "css progress",
    percentage : "85%"
 },
 {
   language : "ShadCN",
   class : "css progress",
   percentage : "85%"
},
{
   language : "MUI",
   class : "js progress",
   percentage : "80%"
},
   
]
const Portfolio_Api = [
   {
      id : 1,
      title : "NEXT BLOG",
      img_src : project_1,
      description : "This blog app developed with Next.js and MongoDB, integrates REST APIs, CRUD operations, authentication, caching, and NextAuth, following best practices.",
      link : "https://next-blog-bice-two.vercel.app/",
   },
   {
      id : 2,
      title : "RIDOY SHOP",
      img_src : project_2,
      description : "This is a fully responsive and interactive e-commerce website developed using React.js, integrating APIs, Redux Toolkit, and following core React principles.",
      link : "https://ridoy-mondol.github.io/e-commerce/",
   },
   {
      id : 3,
      title : "CAKEZONE",
      img_src : project_3,
      description : "This is a complete responsive and dynamic website named CakeZone, built using React.js and implementing to best practices in React development.",
      link : "https://ridoy-mondol.github.io/_cakezone/",
   },
   {
      id : 4,
      title : "COFFESHOP",
      img_src : project_4,
      description : "This website for a coffee shop is user-friendly and fully functional, crafted with React.js for optimal performance. It offers a seamless experience for customers.",
      link : "https://ridoy-mondol.github.io/coffeshop/",
   },
   {
      id : 5,
      title : "CARVILLA",
      img_src : project_5,
      description : "This modern, innovative website for selling cars is developed using React.js. It offers a cutting-edge platform for buyers to explore a wide range of vehicles.",
      link : "https://ridoy-mondol.github.io/carvilla/",
   },
   {
      id : 6,
      title : "PORTFOLIO",
      img_src : project_6,
      description : "This is my portfolio website, crafted with React.js, seamlessly presents my skills, projects, and provides a comprehensive overview of my capabilities.",
      link : "https://ridoy-mondol.github.io/portfolio/",
   },
];

const accordionItems = [
   {
     title: '1. What tools and technologies are you proficient in?',
     content: 'I am proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, Git, GitHub, Postman and various project management tools.'
   },
   {
     title: "2. Can you provide examples of projects you've worked on?",
     content: 'Yes, I have worked on various projects such as e-commerce platforms, blogging platforms,single-page applications and many more. You can view my projects for specific examples and detailed descriptions of my work.'
   },
   {
      title: '3. How do you ensure cross-browser compatibility and responsive design?',
      content: "I use CSS frameworks like Tailwind CSS and Bootstrap and modern CSS techniques such as Flexbox and Grid. Additionally, I test applications across various browsers and devices to ensure compatibility and responsiveness."
    },
   {
     title: '4. How do you handle state management in React applications?',
     content: "For state management, I use React's built-in hooks like useState and useReducer, as well as external libraries like Redux or Context API, depending on the complexity and requirements of the application."
   },
   {
      title: '5. What is your approach to building scalable backend systems?',
      content: "My approach involves using Node.js and Express.js to build efficient and scalable server-side applications. I design RESTful APIs, implement caching strategies with Redis, and ensure database optimization with MongoDB to handle large-scale data."
    },
    {
      title: '6. Can you describe your experience with database management?',
      content: "I have extensive experience with MongoDB, a NoSQL database, which I use for its scalability and performance benefits. I handle CRUD operations, optimize queries, and design database schemas that support efficient data retrieval and storage."
    },
 ];
export default Api;
export {Api_2,Portfolio_Api, accordionItems};