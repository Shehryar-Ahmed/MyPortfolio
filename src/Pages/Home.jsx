import React, { useEffect, useRef, useState } from "react";

function Home() {
  const handleSmoothScroll = (page) => {
    const targetElement = document.getElementById(page);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // inside Home(), before the return:
  const titles = ["Web Developer", "QA Engineer"];
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const currentTitle = titles[titleIndex];

    if (!isErasing && displayText === currentTitle) {
      // Fully typed — pause then start erasing
      timeoutRef.current = setTimeout(() => setIsErasing(true), 2000);
    } else if (isErasing && displayText === "") {
      // Fully erased — move to next title
      setIsErasing(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else if (!isErasing) {
      // Typing
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, 100);
    } else {
      // Erasing
      timeoutRef.current = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 60);
    }

    return () => clearTimeout(timeoutRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText, isErasing, titleIndex]);

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
          <h3>
            {displayText}
            <span className="cursor">|</span>
          </h3>
        </span>
        <p
          className="slide-in"
          style={{ fontSize: "1rem", maxWidth: "60vw", animationDelay: "1.4s" }}
        >
          I'm a passionate Web Developer and QA Engineer who takes pride in
          building beautiful, interactive web solutions while ensuring they work
          flawlessly. From crafting clean, elegant code to designing
          comprehensive test suites, I bridge the gap between development and
          quality, delivering experiences that are both functional and reliable.
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
