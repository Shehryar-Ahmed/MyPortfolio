import { useState, useEffect } from "react";
import Darkhorse from "../Assets/Darkhorse.png";
import ElasticSuite from "../Assets/ElasticSuite.png";
import OtherProjs from "../Assets/Other.png";
import Termina from "../Assets/Termina.png";
import Molista from "../Assets/Molista.png";
import Extranet from "../Assets/Extranet.png";
import Kixie from "../Assets/Kixie.png";
import RoutePlanner from "../Assets/RoutePlanner.png";
import CryptoCoinControl from "../Assets/CryptoCoinControl.png";
import CricketSense from "../Assets/CricketSense.png";
import CCL from "../Assets/CCL.png";
import ProjectsBox from "../Components/ProjectsBox";

const allProjects = [
  // ── QA Work ─────────────────────────────────────────────
  {
    id: "qa-1",
    img: CCL,
    title: "Great Non Profits",
    direction: "row",
    category: "qa",
    description:
      "I have been working with Great Non Profits for about a year now as a QA engineer. My work includes manual testing, automated testing using Cypress, creating workflows, algorithm accuracy testing, payment automation, IVR automation, chatbot automation, API testing, creating extensive documentation on Confluence along with many other things.",
  },
  {
    id: "qa-2",
    img: Extranet,
    title: "Extranet",
    direction: "row-reverse",
    category: "qa",
    description:
      "I worked with Extranet as a Cypress Automation Engineer. I was responsible for writing end to end tests for their website using Cypress as well as making sure that the tests are up to date with their rapid changes. I was also responsible for creating tickets and informing them of any bugs.",
  },
  {
    id: "qa-3",
    img: Kixie,
    title: "Kixie",
    direction: "row",
    category: "qa",
    description:
      "I worked on Kixie's extension as a QA Engineer. Initially, I was responsible for manual testing and writing test cases on Jira. Later on, I moved to API testing using Postman before performing load testing using jMeter. It was my first time working with jMeter, Postman and Jira.",
  },
  {
    id: "qa-4",
    img: Termina,
    title: "Termina",
    direction: "row-reverse",
    category: "qa",
    description:
      "I worked for Termina for quite some time. I started my journey with them by fixing some UI bugs and making other changes in the UI. Later on, I was tasked with writing end to end tests for their website using Cypress. This was my first work with Cypress and I learned a lot from it.",
  },
  {
    id: "qa-5",
    img: OtherProjs,
    title: "Other Projects",
    direction: "row",
    category: "qa",
    description:
      "During my work with multiple clients, I specialized in crafting tests using Jest for their React TypeScript components. Additionally, I had the opportunity to engage in end-to-end testing using Cypress for another client. While React remains my expertise, I discovered a genuine passion for creating comprehensive test suites.",
  },

  // ── Web Work ─────────────────────────────────────────────
  {
    id: "web-1",
    img: Darkhorse,
    title: "Darkhorse Stocks",
    direction: "row",
    category: "web",
    description:
      "In my time working for DarkhorseStocks, I leveraged React to enhance their website. I integrated APIs, enabled routing, and ensured SEO optimization with React Helmet. Additionally, I designed and developed fully functional and responsive pages, including the Search and Login pages, as well as implemented a sleek dark mode feature.",
  },
  {
    id: "web-2",
    img: ElasticSuite,
    title: "Elastic Suite",
    direction: "row-reverse",
    category: "web",
    description:
      "During my stint at ElasticSuites, I collaborated with their development team on a React project. I tackled an admin-side feature, implementing React DnD, which proved challenging as it was my first time with the library. The feature allowed users to effortlessly drag various products into a cart for bulk purchasing.",
  },
  {
    id: "web-3",
    img: Molista,
    title: "Molista",
    direction: "row",
    category: "web",
    description:
      "I worked on Molista's website using vanilla HTML, CSS, and JavaScript. I was responsible for creating pages for some of their projects. Additionally I was tasked with fixing some bugs and changing the layout of some of the pages.",
  },
  {
    id: "web-4",
    img: CricketSense,
    title: "Cricket Sense",
    direction: "row-reverse",
    category: "web",
    description:
      "A university project built with Next JS and TypeScript. This web application shows cricket match scorecards and statistics using insightful and attractive visualizations. It also features an AI assistant powered by Grok — my first project integrating an AI assistant into a web application.",
  },
  {
    id: "web-5",
    img: CryptoCoinControl,
    title: "Crypto Coin Control",
    direction: "row",
    category: "web",
    description:
      "A university project built with Next JS, TypeScript, and PostgreSQL. A complete application showing a user's portfolio stats, current market data, account details, and transaction history. This was my first time working with PostgreSQL.",
  },
  {
    id: "web-6",
    img: RoutePlanner,
    title: "Route Planner",
    direction: "row-reverse",
    category: "web",
    description:
      "A university project built with Next JS and TypeScript. A single page application that finds the most optimized route between two places using Dijkstra's algorithm with user-applied filters. This project holds a special place as it is my own idea that I might carry further in the future.",
  },
];

const INITIAL_VISIBLE = 3;

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
  filterRow: {
    display: "flex",
    gap: "1rem",
    marginBottom: "0.5rem",
  },
  filterBtn: (active) => ({
    padding: "0.5rem 1.8rem",
    borderRadius: "30px",
    border: `2px solid #00abf0`,
    backgroundColor: active ? "#00abf0" : "transparent",
    color: active ? "#081b29" : "#00abf0",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
  }),
};

const AnimatedProjectBox = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 50);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`slide-in ${isVisible ? "opacity-1" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
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

function Projects() {
  const [activeCategory, setActiveCategory] = useState("qa");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filtered = allProjects.filter((p) => p.category === activeCategory);
  const projectsToShow = filtered.slice(0, visibleCount);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const toggleView = () => {
    if (visibleCount >= filtered.length) {
      setVisibleCount(INITIAL_VISIBLE);
    } else {
      setVisibleCount((prev) => Math.min(prev + 3, filtered.length));
    }
  };

  const buttonText = visibleCount >= filtered.length ? "View Less" : "View More";

  return (
    <div id="Projects" style={styles.container}>
      <h1 id="ProjectsHeading" style={styles.heading}>
        My <span style={styles.highlight}>Projects</span>
      </h1>

      <div style={styles.filterRow}>
        <button
          style={styles.filterBtn(activeCategory === "qa")}
          onClick={() => handleCategoryChange("qa")}
        >
          QA Work
        </button>
        <button
          style={styles.filterBtn(activeCategory === "web")}
          onClick={() => handleCategoryChange("web")}
        >
          Web Work
        </button>
      </div>

      {projectsToShow.map((project, index) => (
        <AnimatedProjectBox key={project.id} project={project} index={index} />
      ))}

      {filtered.length > INITIAL_VISIBLE && (
        <button
          onClick={toggleView}
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