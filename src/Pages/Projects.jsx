import React, { useState, useEffect } from "react";
import Darkhorse from "../Assets/Darkhorse.png";
import ElasticSuite from "../Assets/ElasticSuite.png";
import OtherProjs from "../Assets/Other.png";
import Termina from "../Assets/Termina.png";
import Molista from "../Assets/Molista.png";
import Extranet from "../Assets/Extranet.png";
import Kixie from "../Assets/Kixie.png";
import RoutePlanner from "../Assets/RoutePlanner.png";
import CryptoCoinControl from "../Assets/CryptoCoinControl.png";
import ProjectsBox from "../Components/ProjectsBox";

// Project data array
const projectsData = [
  {
    id: 1,
    img: Termina,
    title: "Termina",
    direction: "row",
    description:
      "I worked for Termina for quite some time. I started my journey with them by fixing some UI bugs and making other changes in the UI. Later on, I was tasked with writing end to end tests for their website using Cypress. This was my first work with Cypress and I learned a lot from it.",
  },
  {
    id: 2,
    img: RoutePlanner,
    title: "Route Planner",
    direction: "row-reverse",
    description:
      "This was a university project that I created using Next JS with Typescript. It is a single page application that tells you the most optimized route between two places according to your applied filters using Djikstra algortithm. I used mock data for different routes and this project holds a special place as it is my own idea that I might carry further in the future.",
  },
  {
    id: 3,
    img: Darkhorse,
    title: "Darkhorse Stocks",
    direction: "row",
    description:
      "In my time working for DarkhorseStocks, I leveraged React to enhance their website. I integrated APIs, enabled routing, and ensured SEO optimization with React Helmet. Additionally, I designed and developed fully functional and responsive pages, including the Search and Login pages, as well as implemented a sleek dark mode feature along with some other things",
  },
  {
    id: 4,
    img: Extranet,
    title: "Extranet",
    direction: "row-reverse",
    description:
      "I am currently working with Extranet as a Cypress Automation Engineer. I am responsible for writing end to end tests for their website using Cypress as well as making sure that the tests are up to date with their rapid changes. I am also responsible for creating tickets and informing them of any bugs making sure that the website is always bug free.",
  },
  {
    id: 5,
    img: Kixie,
    title: "Kixie",
    direction: "row",
    description:
      "I worked on Kixie's extension as a QA Engineer. Initially, I was responsible for manual testing and writing test cases on Jira. Later on, I moved to API testing using Postman before performing load testing using jMeter. It was my first time working with jMeter, Postman and Jira and it was a great learning experience.",
  },
  {
    id: 6,
    img: ElasticSuite,
    title: "Elastic Suite",
    direction: "row-reverse",
    description:
      "During my stint at ElasticSuites, I collaborated with their development team on a React project. I tackled an admin-side feature, implementing React DnD, which proved challenging as it was my first time with the library. The feature allowed users to effortlessly drag various products into a cart for bulk purchasing, enhancing the user experience.",
  },
  {
    id: 7,
    img: Molista,
    title: "Molista",
    direction: "row",
    description:
      "I worked on Molista's website for a short period of time using vanilla HTML, CSS, and JavaScript. I was responsible for creating the pages for some of the projects they were working on. Additionally I was tasked with fixing some bugs and changing the layout of some of the pages.",
  },
  {
    id: 8,
    img: CryptoCoinControl,
    title: "Crypto Coin Control",
    direction: "row-reverse",
    description:
      "This was a university project that I created using Next JS with Typescript and using MySQL for database. It is a single page application which tells a user stats about their portfolio as well as their transaction history. This was my first time working with MySQL so it was something new for me.",
  },
  {
    id: 9,
    img: OtherProjs,
    title: "Other Projects",
    direction: "row",
    description:
      "During my work with multiple clients, I specialized in crafting tests using Jest for their React TypeScript components. Additionally, I had the opportunity to engage in end-to-end testing using Cypress for another client. While React remains my expertise, I discovered a genuine passion and excitement for creating comprehensive test suites.",
  },
];

// Styles object for better organization
const styles = {
  container: {
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
  },
  heading: {
    fontSize: "3rem",
  },
  highlight: {
    color: "#00abf0",
  },
  projectContainer: {
    opacity: 0,
    animation: "slideInFromRight 1s ease-in-out forwards",
  },
};

// AnimatedProjectBox component
const AnimatedProjectBox = ({ project, index, visibleProjects }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 50); // Stagger animation for each project

    return () => clearTimeout(timer);
  }, [index, visibleProjects]);

  return (
    <div 
      className={`slide-in ${isVisible ? "opacity-1" : ""}`} 
      style={{ 
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <ProjectsBox
        key={project.id}
        img={project.img}
        title={project.title}
        direction={project.direction}
        description={project.description}
      />
    </div>
  );
};

// ProjectsList component
const ProjectsList = ({ projects, visibleProjects }) => (
  <>
    {projects.map((project, index) => (
      <AnimatedProjectBox 
        key={project.id} 
        project={project} 
        index={index}
        visibleProjects={visibleProjects}
      />
    ))}
  </>
);

// Main Projects component
function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [projectsToShow, setProjectsToShow] = useState(projectsData.slice(0, 3));

  useEffect(() => {
    setProjectsToShow(projectsData.slice(0, visibleProjects));
  }, [visibleProjects]);

  const toggleProjectsView = () => {
    if (visibleProjects === 3) {
      setVisibleProjects(6);
    } else if (visibleProjects === 6) {
      setVisibleProjects(9);
    } else {
      setVisibleProjects(3);
    }
  };

  const buttonText = visibleProjects >= projectsData.length ? "View Less" : "View More";

  return (
    <div id="Projects" style={styles.container}>
      <style className="project-fade-in"></style>
      <h1 id="ProjectsHeading" style={styles.heading}>
        My <span style={styles.highlight}>Projects</span>
      </h1>
      <ProjectsList projects={projectsToShow} visibleProjects={visibleProjects} />
      
      {projectsData.length > 3 && (
        <button
          onClick={toggleProjectsView}
          className="hireMe"
          style={{ marginTop: "2rem" }}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default Projects;