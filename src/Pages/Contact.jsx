import React from "react";
import Form from "../Components/Form";
import "../Components/Form.css";
import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

function Contact() {
  const contactInfo = {
    whatsapp: "+923015796078",
    upwork: "https://upwork.com/freelancers/~0167f0aceabafbcbd9?mp_source=share", 
    github: "https://github.com/shehryar-ahmed", 
  };

  return (
    <div
      id="Contact"
      style={{
        minHeight: "50rem",
        paddingLeft: "5rem",
        paddingRight: "5rem",
        display: "flex",
        flexDirection: "column",
        color: "white",
        backgroundColor: "#081b29",
        position: "relative",
        justifyContent: "start",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: "3rem",
      }}
    >
      <h1 id="ContactHeading" style={{ fontSize: "3rem" }}>
        Contact <span style={{ color: "#00abf0" }}>Me!</span>
      </h1>

      <Form />
      {/* Social Contact Links Section */}
      <div id='socials' className="social-links-container">
        <div className="social-divider">
          <div className="divider-line"></div>
          <span>Connect With Me</span>
          <div className="divider-line"></div>
        </div>

        <div className="social-icons">
          <a
            href={`https://wa.me/${contactInfo.whatsapp.replace(
              /[^0-9]/g,
              ""
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <div className="social-icon">
              <FaWhatsapp size={24} />
            </div>
            <span>WhatsApp</span>
          </a>

          <a
            href={contactInfo.upwork}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <div className="social-icon">
              <SiUpwork size={24} />
            </div>
            <span>Upwork</span>
          </a>

          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <div className="social-icon">
              <FaGithub size={24} />
            </div>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
