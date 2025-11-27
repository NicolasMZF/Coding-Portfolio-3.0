import emailjs from "emailjs-com";
import { texts } from "./Lang";
import { Toast } from "bootstrap";

export default function Footer({lang}){
        
        const sendEmail = (e) => {
            e.preventDefault();
            
            const token = window.grecaptcha.getResponse();
            if (!token){
                alert("Please verify that you're not a robot.");
            }

            emailjs.sendForm(
                "service_v8xrr9m",
                "template_ftjf7va",
                e.target,
                "R7bH0_ypi8_KnJZyZ"
            ).then(() => {
                // Update message
                document.getElementById("langToastBody").textContent = texts[lang].messageSent;

                // Show the toast
                const toastEl = document.getElementById("langToast");
                const toast = Toast.getOrCreateInstance(toastEl);
                toast.show();
            });
        };

    return(
        <div className="contactContainer" id="contact">
        <div className="row contactRow">
        <div className="col contactCol1">
            <h1>{texts[lang].contact}</h1>
            <p>({texts[lang].contactDesc})</p>
            <a href="mailto:nicolasmartinezf137@gmail.com">
                <i className="bi bi-envelope fs-2"></i>
            </a>
            <a href="https://www.linkedin.com/in/nicolas-steven-martinez-3b7490299" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-linkedin fs-2 icon"></i>
            </a>
            <a href="tel:+573212182023">
                <i class="bi bi-telephone-fill fs-2"></i>
            </a>       
            <a href="/CV - Nicolas Steven Martinez.pdf" target="blank" rel="noopener noreferrer">
                <i class="bi bi-file-earmark-person-fill fs-2"></i>
            </a>
        </div>
        <div className="col contact contactCol2">
            <form onSubmit={sendEmail} className="formStyles">
                <div>
                <label className="form-label">Email*</label>
                <input type="email" className="form-control" name="email" required/>
                </div>

                <div>
                <label className="form-label">{texts[lang].contactName}*</label>
                <input type="name" className="form-control"  name="name" required/>
                </div>

                <div>
                <label className="form-label">{texts[lang].contactMessage}*</label>
                <textarea className="form-control" name="message" required rows="2"></textarea>
                </div>
                <div className="captchaContainer">
                    <div className="g-recaptcha captchaVerif" data-sitekey="6LcyhRgsAAAAAPCPya3_wi-eZO_0SUrIolurugBa"></div>
                </div>
                <div className="contactButton">
                    <button type="submit" className="btn btn-secondary">{texts[lang].contactButton}</button>
                </div>   
            </form>
        </div>
        </div>
        </div>
    );
}