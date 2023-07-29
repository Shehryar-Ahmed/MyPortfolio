import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faJs,
  faCss3Alt,
  faGithub,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import jest from "../Assets/jest.png";
import cyp from "../Assets/cyp.png";
import next from "../Assets/next.png";

function Skills() {
  const skills = [
    { icon: faHtml5, name: "Html" },
    { icon: faCss3Alt, name: "CSS" },
    { icon: faJs, name: "JavaScript" },
  ];
  const skills2 = [
    { icon: faGithub, name: "Github" },
    { icon: faBootstrap, name: "Bootstrap" },
  ];
  return (
    <div
      id="Skills"
      style={{
        height: "40rem",
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
      <h1 id="SkillsHeading" style={{ fontSize: "3rem" }}>
        My <span style={{ color: "#00abf0" }}>Skills</span>
      </h1>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        {skills.map((skill) => {
          return (
            <span
              className="skillsCover"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <FontAwesomeIcon
                icon={skill.icon}
                style={{
                  fontSize: "3.5rem",
                  color: "#00abf0",
                  backgroundColor: "rgb(8,27,41,0.2)",
                  borderRadius: "50%",
                  padding: "0.5rem",
                }}
              />
              <span style={{ fontSize: "1rem" }}>{skill.name}</span>
            </span>
          );
        })}
        <span
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
          }}
          className="skillsCover"
        >
          <img
            style={{
              color: "#00abf0",
              backgroundColor: "rgb(8,27,41,0.2)",
              borderRadius: "50%",
              padding: "0.5rem",
              width: "3.7rem",
              height: "3.7rem",
            }}
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAA6VJREFUaEPtmkGIFEcUhr8364rG6HSLBqIQPIRchICiHhRBECWEiCGZbvEWiHFRQw4ejB7E9eJBEBUSUAPJIQGT6YkmxD2YCK4hCCJKYoQcREIMehGZHhVCwJ0nvbvq9Gx3b+842NZac5x6VfW+979XXd1Vwgv2kxeMFws82RW3CluFJ1kE8qd0EK4F3gR9+fmKgdwHruA5P+fxa3zgE/deYahZA12ZZ8DCbJSz0LMBf+btLB/GBw7CM8DqwkAmNLH8iFd+t3PgamMZohcmNGfRxqqL8N3f09zIVrjW2IbqZ0UzTGh+YTMV54vOgIN6P8ieCU1YuLHuxXP7LfBoBLJT2ipceL7mcMCmdCxINqVj4bA1nKOECjexNWxrOD0JbQ0XXqA5HLA1bGvY1vDjCNhFK3PNOJdjRUk2EV5FeSOhMfo+NQjyJ6p/UWr+DzIXLc0DloCuH9vn2Sxa/+A5CzoGroUfoRxr6X8BdD+eeyJzzNqdhWjP1biNCcDVcDPC0VHHv8RzPswVvOO35zGl96a5wMJ1Ks7ruWAjowKBG6CHEhwdxHMHx76BtVlqaTGi64BP8Zz9sdZquAbBB6KDgNeG25RfEb7mgZ5hivxdhMIpoiTUUxBquoKldXizTsUDFNYBJ6VP1OaaCyzyFpXy6ccA1X+nIzNvZQAnxOHZLFrdUVjkYyrlz2ODfX93Bc3mSWBuvto2CVi5iO8sGwP2zZ1ZTO3pQ9gBzMkGNwk4IhHdTsU9mAj1lU5jxt1NiO4E5ieDmwY8DJ2Q2u10QWMPaMIJg4nAI8+eAXp0J+/NbttJtZAH4S5gn7mrdGKO6gAlDvC+ezaxOQij082WujdW4fbNSXTg3fwAf/aNWEut8Qmqh5/8N1mAR9L8PJ67Ir4xqa8H+cFQYD0PsjzzseM58dOSalhBCAwFlo2oXkPYCmwAZsThpR+vvLdt69m2cBmV0rIRr/ztMNBPt17iv+lLkdHrkTp0DX9O26sgEIR/jNwuevQzFTjPPrJa347IAXMfS3k2HBHd8foCemUHypaxcXkqhcM+4EieYKfYnANtfR8ugezOHE+5jOhviFylyXVEmyMLtPQiuhDkbWBN6hhKH77T+rkoZpp9PmzktSWW4DuX0gKS52JadKUvPaJPIX/3u+oAnvtO1rjjAw9fPRz6DljVfQe7OGLXrh4+8um5vVzKPVSu4Du/5Anf+ArnGcUgGwtskFgduWoV7ihsBnWyChskVkeuPgSOxuNMsHzPiwAAAABJRU5ErkJggg=="
          />
          <span style={{ fontSize: "1rem" }}>TypeScript</span>
        </span>
        <span
          className="skillsCover"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <FontAwesomeIcon
            icon={faReact}
            style={{
              fontSize: "3.5rem",
              color: "#00abf0",
              backgroundColor: "rgb(8,27,41,0.2)",
              borderRadius: "50%",
              padding: "0.5rem",
            }}
          />
          <span style={{ fontSize: "1rem" }}>{"ReactJs"}</span>
        </span>
        <span
          className="skillsCover"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
          }}
        >
          <span
            style={{
              backgroundColor: "rgb(8,27,41,0.2)",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                padding: "0.5rem",
                // objectFit: "cover",
                width: "3.5rem",
                height: "3.5rem",
              }}
              alt=""
              src={next}
            />
          </span>
          <span style={{ fontSize: "1rem" }}>NextJs</span>
        </span>
        {skills2.map((skill) => {
          return (
            <span
              className="skillsCover"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <FontAwesomeIcon
                icon={skill.icon}
                style={{
                  fontSize: "3.5rem",
                  color: "#00abf0",
                  backgroundColor: "rgb(8,27,41,0.2)",
                  borderRadius: "50%",
                  padding: "0.5rem",
                }}
              />
              <span style={{ fontSize: "1rem" }}>{skill.name}</span>
            </span>
          );
        })}
        <span
          className="skillsCover"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
          }}
        >
          <img
            style={{
              color: "#00abf0",
              backgroundColor: "rgb(8,27,41,0.2)",
              borderRadius: "50%",
              padding: "0.5rem",
              width: "3.7rem",
              height: "3.7rem",
            }}
            alt=""
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABGxJREFUaEPtmV2IVGUYx3/P0Whr1zkz2YWSGfZB1IW4RVtEEEYlaAY2cw5aZFo3uReB3lgW2ydIF1lEuiVFEmlxzmxEq10EfUEUJRTWxUahSIhu4M6c2Y9caPe8cWYtZz/O7ntmzmzOes7t/J//+/ye5/2Y8x7hAnvkAuMlAZ7rHU86nHR4jlUgmdJzrKGTcJIOJx2eYxVIpvQca2iyac3OlM6XVqP8NjBaQd0MXHG29H+C6gM5AXIQNc/Fbumt5yyrL3C++AhKOoCrtSGUdDPqP8GGzHHtmAjC+gA7xTsx5B0U10TIpVI6jMh2cubrVcaHhsUP7PbfB34euLjmZEX2kTM31+xTYRAvcL7YipIfgPkxJvkyVvrJuPziA35XNdFS+gW4Nq7kKnx2YKV3RvINip/L/DQxJj5gx9uCsAfUKTD2IP4hfHWsPKChlqCMNpDtwPWREj8n1u/0hwM3MG9kFVbmtfoBu95vwBEGzYfZLMOhUG5pPai3gFQV4G9ipbdMG+d4dyF8jMEKsumxgse+hvOl61A8jWVu0oLIl25Fqc+BZi39eNExUAcwjE/ImofLPzneMpAbQbUjrEZxGDvdNpV3PFO6q3Qbo/1HsK88ow3QVVyJL4eAS7RjdIXKuB079V39gHUTmagbm34BdFO1FpPilDyEbR4I84unw7VkGy/0jBvb/w8cFKu8q47uA6Zcd5r1nHlDg/Psy4NT3IbIM0BGEzKQfY9BO9n0jzox50eHJ6/texBsoBW4HFgItJRlwlEUwXFzHJEvyZkf6ID+q4kOHBwBwr0IN6FYUTENBxD6UJwGfkaxHzv9RZRkZkOrDxyAGtKBUnpn7Vj2vShewE53zgaMzhh6wK63G2jXMQzRfM2I2lSvd9woeU0P/F5vM01N3Qgro5iGaPsx5O7//h3FYFiNxfTAbvEgyJpqjENiBsFYhZX6NkbPSFbhwI73GMLbkdz0xH8B67DSn+nJge6TlzK04CrWL+jRjgkRhgO7xZMgiwnumIRORvye8hp0CkuBpYjxKFDDbYTKYmU+0gJwvU4Gza3TvoVpGYX98XBKDyJqN6h1WJmvQr26hhbj//0KsEFzvPEyYS++PIVtFqaMH9tD3sdQA+QyG6saY0LQ1B12vb2IsYtc6letQdzSLlBbtbSTRcHZvYP5RhcPpPrY72VoYhm+rAX1OLAIkTXkzE+r9B8XNjWwU7gD+7JvIg3glDoQ9XykGB1xsKRs834dqY5G7xzWcQo0bulZUM/pymfUKXoYHr6FjYuGZtRqCuIFDgbNey+Vbz9qf05jjLaSXXiidqtzDvEDB96Ol0N4FVhSZbJ/oMTCNoMr31if+gAHKY5d2247e3TpXt2eAdmJZb4YK2WFWf2AKzPOF5bjG2sRlkP580vwQS14CiiOIgTfkX7HuOgNss2n6gUb+M4OcD0JInonwBEL1nDypMMN17KICScdjliwhpMnHW64lkVMOOlwxII1nDzpcMO1LGLCSYcjFqzh5P8ASModTCqKB/QAAAAASUVORK5CYII="
          />
          <span style={{ fontSize: "1rem" }}>Tailwind</span>
        </span>
        <span
          className="skillsCover"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
          }}
        >
          <span
            style={{
              backgroundColor: "rgb(8,27,41,0.2)",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                color: "#00abf0",

                padding: "0.5rem",
                // objectFit: "cover",
                width: "3.5rem",
                height: "3.5rem",
              }}
              alt=""
              src={jest}
            />
          </span>
          <span style={{ fontSize: "1rem" }}>Jest</span>
        </span>
        <span
          className="skillsCover"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
          }}
        >
          <span
            style={{
              backgroundColor: "rgb(8,27,41,0.2)",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                padding: "0.5rem",
                // objectFit: "cover",
                width: "3.5rem",
                height: "3.5rem",
              }}
              alt=""
              src={cyp}
            />
          </span>
          <span style={{ fontSize: "1rem" }}>Cypress</span>
        </span>
      </div>
    </div>
  );
}

export default Skills;
