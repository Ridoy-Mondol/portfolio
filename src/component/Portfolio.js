import { Portfolio_Api } from "./Api";
import { Link } from "react-router-dom"
const Portfolio = () => {
    return (
        <div id="portfolio">
        <div className="container-fluid portfolio-div">
          <h3 className="text-center port-heading"><span className="border-heading">My <span className="home-text">Portfolio</span></span></h3>
          <div className="container">
            <div className="row">
                {
                    Portfolio_Api.map((elem) => {
                        return (
                            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
                                <div className="card port-card">
                                    <h4>{elem.title}</h4>
                                    <img src = {elem.img_src} className="port-img" height="190" alt="" />
                                    <span className="port-desc">{elem.description}</span>
                                    <Link to={elem.link}  target="_blank"><button className="port-btn">View Project</button></Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
          </div>
        </div> 
        </div>
    )
}
export default Portfolio;