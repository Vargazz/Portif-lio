import React from "react";
import Linkedin from "../images/linkedin.png";
import Instagram from "../images/insta.png";
import Email from "../images/email.png";
import "../App2.css";

export const Contact = () => {
  return (
    <div>
      <div id="contacts">
        <h1 className="about-heading contacts">Contatos</h1>
      </div>
      <div className="main">
        <a
          href="https://www.linkedin.com/in/dev-guilhermevargas/"
          target="blank"
        >
          <img className="contact" src={ Linkedin } alt="Linkedin logo" />
        </a>
        <a
          href="https://instagram.com/_vargaasfion_"
          target="blank"
        >
        <img className="contact" src={ Instagram } alt="Linkedin logo" />
        </a>
        <a
          href="mailto:gvargas159z@gmail.com"
          target="blank"
        >
        <img className="contact" src={ Email } alt="Linkedin logo" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
