import Header from './components/Header'
import ProfileContainer from './components/ProfileContainer';
import ProfessionalProfile from './components/ProfessionalProfile';
import Projects from './components/Projects';
import StarrySky from './components/StarrySky';
import Skills from './components/Skills';
import Experience from './components/Experience'
import Footer from './components/Footer';
import Toast from './components/Toast';
import {useState} from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



function App() {
  const [lang, setLang] = useState("en");
  return (
    <>
    <div className="background"></div>
      <Header lang={lang} setLang={setLang}/>
      <Toast/>
      <ProfileContainer lang={lang}/>
      <ProfessionalProfile lang={lang}/>
      <Projects lang={lang}/>
      <StarrySky lang={lang}/>
      <Skills lang={lang}/>
      <Experience lang={lang}/>
      <Footer lang={lang}/>
    </>
  );
}

export default App
