import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faJs,
  faCss3Alt,
  faGithub,
  faBootstrap,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { SiTypescript, SiMui, SiTailwindcss, SiExpress, SiApachejmeter, SiPostman, SiMongodb, SiMysql, SiJira } from "react-icons/si";
import jest from "../Assets/jest.png";
import cyp from "../Assets/cyp.png";
import next from "../Assets/next.png";

const SkillItemFA = ({ icon, name }) => (
  <span className="skillsCover" style={styles.skillItem}>
    <div style={styles.iconContainer}>
      <FontAwesomeIcon icon={icon} style={styles.icon} />
    </div>
    <span style={styles.skillText}>{name}</span>
  </span>
);

const SkillItemRI = ({ Icon, name }) => (
  <span className="skillsCover" style={styles.skillItem}>
    <div style={styles.iconContainer}>
      <Icon style={styles.reactIcon} />
    </div>
    <span style={styles.skillText}>{name}</span>
  </span>
);

const SkillItemImg = ({ image, name }) => (
  <span className="skillsCover" style={styles.skillItem}>
    <div style={styles.iconContainer}>
      <img src={image} alt={name} style={styles.image} />
    </div>
    <span style={styles.skillText}>{name}</span>
  </span>
);

const SkillsList = ({ skills }) => (
  <div style={styles.skillsContainer}>
    {skills.map((skill, index) => {
      if (skill.icon) {
        return <SkillItemFA key={index} {...skill} />;
      } else if (skill.Icon) {
        return <SkillItemRI key={index} {...skill} />;
      } else {
        return <SkillItemImg key={index} {...skill} />;
      }
    })}
  </div>
);

const Skills = () => {
  const skills = [
    { icon: faHtml5, name: "HTML" },
    { icon: faCss3Alt, name: "CSS" },
    { icon: faJs, name: "JavaScript" },
    { Icon: SiTypescript, name: "TypeScript" },
    { icon: faReact, name: "ReactJS" },
    { image: next, name: "NextJS" },
    { Icon: SiExpress, name: "Express.js" },
    { icon: faBootstrap, name: "Bootstrap" },
    { Icon: SiMui, name: "MUI" },
    { Icon: SiTailwindcss, name: "Tailwind CSS" },
    // { icon: faNodeJs, name: "Node.js" },
    { image: jest, name: "Jest" },
    { image: cyp, name: "Cypress" },
    // { Icon: SiPlaywright, name: "Playwright" },
    { Icon: SiApachejmeter, name: "jMeter" },
    { Icon: SiPostman, name: "Postman" },
    { Icon: SiMongodb, name: "MongoDB" },
    { Icon: SiMysql, name: "MySQL" },
    { icon: faGithub, name: "GitHub" },
    { Icon: SiJira, name: "Jira" },
  ];

  return (
    <div id="Skills" style={styles.container}>
      <h1 id="SkillsHeading" style={styles.heading}>
        My <span style={{ color: "#00abf0" }}>Skills</span>
      </h1>
      <SkillsList skills={skills} />
    </div>
  );
};

const styles = {
  container: {
    height: "auto",
    minHeight: "40rem",
    padding: "2rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    color: "white",
    backgroundColor: "#112e42",
    gap: "2rem",
    textAlign: "center",
  },
  heading: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  skillsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "3rem",
    flexWrap: "wrap",
    maxWidth: "90%",
  },
  skillItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    width: "5.5rem",
  },
  iconContainer: {
    color: "#00abf0",
    backgroundColor: "rgb(8,27,41,0.2)",
    borderRadius: "50%",
    padding: "0.5rem",
    width: "4.5rem",
    height: "4.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: "2.5rem",
  },
  reactIcon: {
    fontSize: "2.5rem",
  },
  image: {
    width: "3rem",
    height: "3rem",
    objectFit: "contain",
  },
  skillText: {
    fontSize: "1rem",
  },
};

export default Skills;