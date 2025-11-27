import etbImg from "../assets/etb.jpg";
import senaImg from "../assets/sena.jpg";
import background from "../assets/Background1.png";
import { texts } from "./Lang"

export default function Experience({lang}){
    return(
      <div className="experienceContainer" id="experience">
      <div className="experience">
      <div className="row experienceRow">
        <img src={background} className="backgroundExperience"/>
        <div className="title">
          <h1>{texts[lang].experience}</h1>
          <p>({texts[lang].experienceDesc})</p>
        </div>
      <div className="col">
      <div className="card senaCard">
      <div className="flip-card">
      <div className="inner">
      <div className="front frontSena">
        <img src={senaImg} className="card-img cardImg"/>
      </div>
      <div className="back backSena">
        <div className="experienceText">
          <h5 className="card-title">SENA</h5>
          <p className="card-text">{texts[lang].experienceSena}</p>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div className="col">
      <div className="card senaCard">
      <div className="flip-card">
      <div className="inner">
      <div className="front frontEtb">
        <img src={etbImg} className="card-img cardImg"/>
      </div>
      <div className="back backEtb">
      <div className="experienceText">
        <h5 className="card-title">ETB</h5>
        <p className="card-text">{texts[lang].experienceEtb}</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
}