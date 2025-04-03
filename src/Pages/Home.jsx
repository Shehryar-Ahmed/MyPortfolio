import React from "react";

function Home() {
  const handleSmoothScroll = (page) => {
    const targetElement = document.getElementById(page);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      id="Home"
      style={{
        height: "50rem",
        paddingLeft: "5rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        backgroundColor: "#081b29",
        position: "relative",
      }}
    >
      <div>
        <div>
          <h1
            className="slide-in nameHead"
            style={{
              marginBottom: "0rem",
              animationDelay: "0.8s",
            }}
          >
            Hi, I'm Shehryar Ahmed
          </h1>
        </div>
        <span
          className="text-animate slide-in"
          style={{ animationDelay: "1.1s" }}
        >
          <h3 style={{ marginBottom: "0rem" }}>Web Developer</h3>
        </span>
        <p
          className="slide-in"
          style={{ fontSize: "1rem", maxWidth: "60vw", animationDelay: "1.4s" }}
        >
          As a passionate web developer, I take pride in transforming ideas
          into beautiful, interactive web solutions. With precision and
          elegance, I craft clean code that bridges the gap between design and
          functionality. Welcome to my world of code, where creativity meets
          seamless functionality.
        </p>
        <div
          style={{
            display: "flex",
            gap: "3vw",
            padding: "10px",
            paddingLeft: "0px",
          }}
          className="btnBox"
        >
          <button
            className="hireMe slide-in"
            style={{ animationDelay: "1.7s" }}
            onClick={() => handleSmoothScroll("socials")}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
