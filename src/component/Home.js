import img from "../component/images/portfolio1.png";
const Home = () => {
    return (
      <div id="home">
        <div className="home-bg text-white d-flex align-items-center">
          <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                  <div>
                  <h4 className="home-text home-margin">Hi,It's Me</h4>
                  <h1 className="hide-item">Md. RIDOY MONDOL</h1>
                  <h2 className="hide-laptop">Md. RIDOY MONDOL</h2>
                  <h4 className="text-white">And I'm a <span className="home-text">Full Stack Developer</span></h4>
                  <span className="my-description">specializing in the MERN stack. I build dynamic web applications with expertise in <span className="text-orange-2">React.js</span>, 
                  <span className="text-orange-2"> Next.js</span>,
                  <span className="text-orange-2"> Node.js</span>, 
                  <span className="text-orange-2"> Express.js</span> and 
                  <span className="text-orange-2"> MongoDB</span>, ensuring seamless user experiences from concept to deployment.</span>
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <img src = {img} alt = "" width="350" className="img-fluid"/>
                </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default Home;

