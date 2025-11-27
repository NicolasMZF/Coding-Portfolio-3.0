import { Toast } from "bootstrap";
import { texts } from "./Lang"

export default function Header({lang, setLang}) {
    const changeLang = () => {
    const newLang = lang === "en" ? "es" : "en";
    setLang(newLang);

    // Update message
    document.getElementById("langToastBody").textContent =
      newLang === "en"
        ? "Language changed to English!"
        : "Idioma cambiado a Español!";

    // Show the toast
    const toastEl = document.getElementById("langToast");
    const toast = Toast.getOrCreateInstance(toastEl);
    toast.show();
  };


    //In this part we manage the smooth scroll of the page.
    const scrollToCenter = (event, id) => {
        event.preventDefault();
        const section = document.getElementById(id);
        if(section){
            section.scrollIntoView({ behavior: "smooth", block: "center"});
        }
    };

    return (
    <header>
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container-fluid brandContainer justify-content-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <a className="navbar-brand" href="#">
            Nicolas Steven Martinez
          </a>

          <div className="collapse navbar-collapse navbarContainer" id="navbarNav">
            <ul className="navbar-nav navbarTab">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#professionalProfile"
                >
                  {texts[lang].professionalProfile}
                </a>
              </li>
              <li className="nav-item">
                <a 
                className="nav-link" 
                href="#projects"
                onClick={(e) => scrollToCenter(e, "projects")}
                >
                  {texts[lang].projects}
                </a>
              </li>
              <li className="nav-item">
                <a 
                className="nav-link" 
                href="#skills"
                onClick={(e) => scrollToCenter(e, "skills")}
                >
                  {texts[lang].skills}
                </a>
              </li>
              <li className="nav-item">
                <a 
                className="nav-link" 
                href="#experience"
                onClick={(e) => scrollToCenter(e, "experience")}
                >
                  {texts[lang].experience}
                </a>
              </li>
              <li className="nav-item">
                <a 
                className="nav-link" 
                href="#contact"
                >
                  {texts[lang].contact}
                </a>
              </li>
            </ul>
          </div>
          <button type="button" onClick={changeLang} className="translateButton">
            <i class="bi bi-translate fs-2"></i>
          </button>
        </div>
      </nav>
    </header>
    
    );
}