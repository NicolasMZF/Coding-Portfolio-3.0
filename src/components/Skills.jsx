import htmlImg from "../assets/html2.png";
import jsImg from "../assets/js.png";
import cssImg from "../assets/css.png";
import reactImg from "../assets/react.svg";
import gitImg from "../assets/Git4.png";
import pythonImg from "../assets/Python.png";
import javaImg from "../assets/Java2.png";
import mysqlImg from "../assets/MySQL.png";
import background from "../assets/Background1.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import { texts } from "./Lang"

export default function Skills({lang}){
    const [selected, setSelected] = useState(null);
    const [open, setOpen] = useState(false);

    const skills = [
        { id: 1, img: htmlImg, label: "HTML", description: texts[lang].htmlDesc},
        { id: 2, img: jsImg, label: "JavaScript", description: texts[lang].jsDesc},
        { id: 3, img: cssImg, label: "CSS", description: texts[lang].cssDesc},
        { id: 4, img: reactImg, label: "React", description: texts[lang].reactDesc},
        { id: 5, img: gitImg, label: "Git", description: texts[lang].gitDesc},
        { id: 6, img: pythonImg, label: "Python", description: texts[lang].pythonDesc},
        { id: 7, img: javaImg, label: "Java", description: texts[lang].javaDesc},
        { id: 8, img: mysqlImg, label: "MySQL", description: texts[lang].mySqlDesc},
    ];

    const handleOpen = (skill) => {
        setOpen(true);
        setSelected(skill);
    };
    const handleClose = () => {
        setOpen(false);
        setSelected(null);
    }
    
    return(
        <div id="skills" className="skills container">
        <img className="skillsBackground" src={background}/>
        <div className="row">
        <div className="col-sm-1 vertical">
            <h1>{texts[lang].skills}</h1>
        </div>

        <div className="col skillsCol">
            <h3>{texts[lang].skillsDesc}</h3>
            <p>({texts[lang].skillsDesc2})</p>
        <div className="row">
        {skills.map((skill) => (
        <div key={skill.id} className="skillsColumn col-lg-3 text-center mb-4" onClick={()=>handleOpen(skill)}>
            <img src={skill.img} className="img-thumbnail skillImg" alt={skill.label}/>
            <label className="skillLabel" >{skill.label}</label>
        </div>
        ))}
        </div>
            {/*Modal*/}
            {open && (
                <div className="modal-overlay" onClick={handleClose}>
                <div className="modal-content skillsModal" onClick={(e) => e.stopPropagation()}>
                    <h2>{selected.label}</h2>
                    <p>{selected.description}</p>
                    <button className="close-btn closeButton" onClick={handleClose}>Close</button>
                </div>
                </div>
            )}
        </div>
        </div>
        </div>
    );
}