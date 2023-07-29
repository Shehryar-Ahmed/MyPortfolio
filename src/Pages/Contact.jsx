import React from "react";
import Form from "../Components/Form";
import "../Components/Form.css";

function Contact() {
  return (
    <div
      id="Contact"
      style={{
        height: "50rem",
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
        // zIndex: "-5",
      }}
    >
      <h1 id="ContactHeading" style={{ fontSize: "3rem" }}>
        Contact <span style={{ color: "#00abf0" }}>Me!</span>
      </h1>
      <Form />
    </div>
  );
}

export default Contact;
