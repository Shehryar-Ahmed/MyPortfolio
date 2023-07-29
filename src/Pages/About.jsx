import React from "react";
import pic from "../Assets/port4.jpg";
function About() {
  return (
    <div
      id="About"
      style={{
        height: "130%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        color: "white",
        backgroundColor: "#112e42",
        gap: "1rem",
        textAlign: "center",
      }}
    >
      <h1
        id="AboutHeading"
        className="slide-in"
        style={{ fontSize: "3rem", animationDelay: "2s" }}
      >
        About <span style={{ color: "#00abf0" }}>Me</span>
      </h1>

      <div
        className="slide-in"
        style={{ position: "relative", animationDelay: "2.3s" }}
      >
        <div
          style={{
            height: "10rem",
            width: "10rem",
            borderRadius: "50%",
            border: "0.25rem solid #00abf0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            alt=""
            src={pic}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              border: "0.15rem solid #081b29",
            }}
          ></img>
        </div>
        <span className="spinCircle"></span>
      </div>
      <h3
        className="slide-in"
        style={{
          fontSize: "1.5rem",
          marginTop: "0.5rem",
          animationDelay: "2.6s",
        }}
      >
        Frontend Developer!
      </h3>
      <p
        className="slide-in"
        style={{ fontSize: "1rem", marginTop: "-1rem", animationDelay: "2.9s" }}
      >
        Hey there! I'm a young front-end dev hailing from Islamabad, Pakistan.
        My coding adventure began at just 14 with Python's Tkinter for GUI
        (spoiler: it didn't tickle my fancy). So, I switched to web dev with
        JavaScript and fell head over heels for React! But here's the plot
        twist—I've got a secret love affair with testing! Shh! When I'm not
        coding, you'll find me fueled by cricket passion, strategizing my moves
        in chess, and binge-watching every awesome series and anime out there.
        Got any recommendations? I'm all ears!
      </p>
      {/* <div
        style={{
          display: "flex",
          //   padding: "10px",
          paddingLeft: "0px",
        }}
        className="btnBox"
      >
        <button
          className="hireMe slide-in"
          style={{ width: "120%", animationDelay: "3.1s" }}
        >
          Read More
        </button>
      </div> */}
    </div>
  );
}

export default About;
