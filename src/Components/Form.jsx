import React, { useContext, useRef } from "react";
import "./Form.css";
import emailjs from "@emailjs/browser";
import StateContext from "../Context/createCont";

function Form() {
  const form = useRef();
  const contexts = useContext(StateContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dv2drd3",
        "template_smotvro",
        form.current,
        "MeZrE4oAwPV_UXsCv"
      )
      .then(
        (result) => {
          console.log(result.text);
          contexts.setShowAlert(true);
          setTimeout(() => contexts.setShowAlert(false), 4500);
        },
        (error) => {
          console.log(error.text);
        }
      );

    form.current.reset();
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="form-container">
        <div className="form-row">
          <input
            type="text"
            className="form-input"
            placeholder="Full Name*"
            required
            name="from_name"
          />
          <input
            type="email"
            className="form-input"
            placeholder="Email Address*"
            required
            name="from_email"
          />
        </div>
        <div className="form-row">
          <input
            type="number"
            className="form-input no-spinners addAnimation"
            placeholder="Mobile Number"
            name="from_contact"
          />
          <input
            type="text"
            className="form-input"
            placeholder="Email Subject"
            name="from_subject"
          />
        </div>
        <textarea
          className="form-textarea"
          placeholder="Your Message*"
          required
          minLength={20}
          name="message"
        />
        <div
          style={{
            display: "flex",
            paddingLeft: "0px",
            marginTop: "1rem",
          }}
          className="btnBox"
        >
          <button
            type="submit"
            className="hireMe"
            style={{ width: "9rem", height: "3.1rem" }}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;

