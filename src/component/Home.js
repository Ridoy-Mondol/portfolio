import img from "../component/images/portfolio1.png";
const Home = () => {
    return (
      <div id="home">
        <div className="home-bg text-white d-flex align-items-center">
          <div className="container">
            <div className="row">
                <div className="col-md-6">
                  <h4 className="home-text home-margin">Hi,It's Me</h4>
                  <h1>Md. RIDOY MONDOL</h1>
                  <h4 className="text-white">And I'm a <span className="home-text">Frontend Web Developer & designer</span></h4>
                  <span className="my-description">With expertise in HTML, CSS, Bootstrap, JavaScript and React, I specialize in crafting visually appealing and responsive websites. My passion for creative design, coupled with technical proficiency in React.js, allows me to bring ideas to life seamlessly. I thrive on building intuitive user interfaces and ensuring a delightful user experience. Let's collaborate and transform your vision into a stunning digital reality.</span>
                </div>
                <div className="col-md-6 text-center">
                    <img src = {img} alt = "" width="350" className="img-fluid"/>
                </div>
            </div>
          </div>
        </div>
        </div>
    )
}
export default Home;