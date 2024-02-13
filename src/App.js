import Navbar from './component/Navbar';
import './App.css';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Skill from './component/Skill';
import Contact from './component/Contact';
import Portfolio from './component/Portfolio';
import Footer from './component/Footer';
function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Service />
    <Skill />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
