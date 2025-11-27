import Background1 from "../assets/Background1.png"
import codingVideo from "../assets/codingVideo.mp4"
import { texts } from "./Lang"

export default function ProfessionalProfile({lang}){
    return(
        <div id="professionalProfile">
        <div className="professionalProfile">
        <div className="text-container">
        <img className="img-profile" src={Background1}/>
        
            <h1>{texts[lang].professionalProfile}</h1>
        <br/>
            <h5>{texts[lang].professionalText}</h5>
            <video className="video-profile" src={codingVideo} autoPlay loop muted playsInline />
        </div>
        </div>
        </div>
    );
}