import Api from "./Api";
const Service = () => {
    return (
        <div className="service-div" id="services">
          <div className="container">
            <div className="row my-auto">
            <h3 className="text-center text-white service-heading"><span className="border-heading">My <span className="home-text">Services</span></span></h3>

            {
                Api.map ((elem) => {
                   return (
                    <div className="col-lg-4 col-md-6 card-main" key={elem.id}> 
                    <div className="card-div text-center mx-auto animated">
                        <i className={elem.icon}></i>
                        <h5>{elem.category}</h5>
                        <p className="description">{elem.description}</p>
                    </div>
                     </div>
                   )
                })
                
            }
            
            </div>
          </div>
        </div>
    )
}
export default Service;