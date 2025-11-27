import background from "../assets/Background1.png"
import operacion from "../assets/projectEtb.png"
import yournominow from "../assets/Yournominow2.png"
import { texts } from "./Lang"

export default function Projects({lang}){
    return(
        <div className="projectsContainer" id="projects">
        <div className="projects">
        <div className="row">
            <h1>{texts[lang].myWork}</h1>
            <p>{texts[lang].myWorkDesc}</p>
            <img className="projectBackground" src={background}/>
        <div className="col">
            <div className="card mb-3 projectCard ETBCard">
            <img className="projectExample card-img-top" src={operacion} />
            <div className="card-body">
                <h5 className="card-title">{texts[lang].myWorkEtb1}</h5>
                <p className="card-text">{texts[lang].myWorkEtb2}</p>
            </div>
            </div>
        </div>
        <div className="col">
            <div className="card mb-3 projectCard YNNCard">
            <img className="projectExample card-img-top" src={yournominow} />
            <div className="card-body">
                <h5 className="card-title">{texts[lang].myWorkSena1}</h5>
                <p className="card-text">{texts[lang].myWorkSena2}</p>
            </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}