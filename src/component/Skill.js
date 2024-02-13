import { Api_2 } from "./Api";
const Skill = () => {
    return (
        <div className="about-div" id="skills">
            <div className="container">
            <h3 className="text-center about-heading"><span className="border-heading">My <span className="home-text">Skills</span></span></h3>
            {
            Api_2.map((elem) => {
                return (
                <div className="row d-flex align-items-center">
                    <div className="col-3 col-md-2 col-lg-1">
                   <span>{elem.language}</span> 
                   </div>
                   <div className="col-10 col-md-8 col-lg-10 text-center">
              <div className="progress-bar d-flex justify-content-center">
                <div className={elem.class}></div>
             </div>
             </div>
             <div className="col-2 col-md-2 col-lg-1 text-center">
            <span>{elem.percentage}</span> 
            </div>
            </div>
                )
            })
           }
            </div>   
        </div>
    )
}
export default Skill;