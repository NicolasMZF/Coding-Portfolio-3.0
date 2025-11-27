import forestMountain from "../assets/forestMountain.png"
import Forest3 from "../assets/Forest3.png"
import mountain2 from "../assets/mountain2.png"
import { texts } from "./Lang"


export default function ProfileContainer({lang}){
    
    return (
        <div className="profileContainer">
        <div className="profile">
        <div>  
          <h5>Nicolas Steven Martinez Fonseca</h5>
          <h5>{texts[lang].title}</h5>
          <h5>{texts[lang].titleDesc}</h5>
        </div>
        </div>
        <div className="forestMountain">
        <img src={forestMountain} />
        </div>
        <div className="forest">
        <img src={Forest3} />
        </div>
        <div className="mountain">
        <img src={mountain2} />
        </div>
        </div>
    );
}