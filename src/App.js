import Navbar from "./component/Navbar";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import Skill from "./component/Skill";
import Contact from "./component/Contact";
import Projects from "./component/Projects";
import FAQ from "./component/FAQ";
import Footer from "./component/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMode } from "./component/context";
function App() {
  const { mode } = useMode();
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
        bodyClassName="toast-body"
      />
      <div className={mode ? "light-bg" : "dark-bg"}>
        <Navbar />
        <Home />
        <About />
        <Service />
        <Skill />
        <Projects />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
