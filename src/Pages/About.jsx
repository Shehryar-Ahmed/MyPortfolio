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
        Web Developer & Automation Tester!
      </h3>
      <p
        className="slide-in"
        style={{ fontSize: "1rem", marginTop: "-1rem", animationDelay: "2.9s" }}
      >
        Hey there! I'm a web developer from Islamabad, Pakistan. My coding journey started when I was just 14, tinkering with Python's Tkinter for GUIs. But it wasn't long before I found my true passion—web development. JavaScript drew me in, and I quickly fell in love with React.js, followed by Next.js. But the journey didn't stop there! I got hooked on testing, first with Jest for component testing and then with Cypress for end-to-end testing. When I'm not deep in code, you'll find me cheering for my favorite cricket team, sharpening my chess strategies, or binge-watching the latest series and anime. Got any recommendations? I'm all ears!
      </p>
    </div>
  );
}

export default About;
