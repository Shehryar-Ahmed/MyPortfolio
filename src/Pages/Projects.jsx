import React from "react";
import Darkhorse from "../Assets/Darkhorse.png";
import ElasticSuite from "../Assets/ElasticSuite.png";
import OtherProjs from "../Assets/Other.png";
import ProjectsBox from "../Components/ProjectsBox";

function Projects() {
  return (
    <div
      id="Projects"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        color: "white",
        backgroundColor: "#081b29",
        gap: "1rem",
        textAlign: "center",
        paddingBottom: "5rem",
      }}
    >
      <h1 id="SkillsHeading" style={{ fontSize: "3rem" }}>
        My <span style={{ color: "#00abf0" }}>Projects</span>
      </h1>
      <ProjectsBox
        img={Darkhorse}
        title={"DarkhorseStocks"}
        direction={"row"}
        description={
          "In my time working for DarkhorseStocks, I leveraged React to enhance their website. I integrated APIs, enabled routing, and ensured SEO optimization with React Helmet. Additionally, I designed and developed fully functional and responsive pages, including the Search and Login pages, as well as implemented a sleek dark mode feature along with some other things"
        }
      />
      <ProjectsBox
        img={ElasticSuite}
        title={"ElasticSuite"}
        direction={"row-reverse"}
        description={
          "During my stint at ElasticSuites, I collaborated with their development team on a React project. I tackled an admin-side feature, implementing React DnD, which proved challenging as it was my first time with the library. The feature allowed users to effortlessly drag various products into a cart for bulk purchasing, enhancing the user experience."
        }
      />
      <ProjectsBox
        img={OtherProjs}
        title={"Other Projects"}
        direction={"row"}
        description={
          "During my work with multiple clients, I specialized in crafting tests using Jest for their React TypeScript components. Additionally, I had the opportunity to engage in end-to-end testing using Cypress for another client. While React remains my expertise, I discovered a genuine passion and excitement for creating comprehensive test suites."
        }
      />
    </div>
  );
}

export default Projects;
