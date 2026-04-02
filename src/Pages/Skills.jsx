import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  SiTypescript, SiMui, SiTailwindcss, SiExpress,
  SiApachejmeter, SiPostman, SiMongodb, SiMysql,
  SiJira, SiConfluence, SiOpenai, SiPostgresql,
  SiSelenium, SiOracle,
  SiTwilio,
} from "react-icons/si";
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

const SkillRow = ({ skills }) => (
  <div style={styles.skillRow}>
    {skills.map((skill, index) => {
      if (skill.icon) return <SkillItemFA key={index} {...skill} />;
      if (skill.Icon) return <SkillItemRI key={index} {...skill} />;
      return <SkillItemImg key={index} {...skill} />;
    })}
  </div>
);

const Skills = () => {
  const groups = [
    [
      { icon: faJs,           name: "JavaScript" },
      { Icon: SiTypescript,   name: "TypeScript" },
      { icon: faReact,        name: "React" },
      { image: next,          name: "Next.js" },
      { Icon: SiExpress,      name: "Express" },
      { Icon: SiMui,          name: "MUI" },
    ],
    [
      { image: cyp,            name: "Cypress" },
      { image: jest,           name: "Jest" },
      { Icon: SiPostman,       name: "Postman" },
      { Icon: SiApachejmeter,  name: "jMeter" },
    ],
    [
      { Icon: SiOpenai,      name: "AI APIs" },
      { Icon: SiMysql,       name: "MySQL" },
      { Icon: SiMongodb,     name: "MongoDB" },
      { Icon: SiPostgresql,  name: "PostgreSQL" },
      { Icon: SiOracle,      name: "Oracle" },
      { Icon: SiJira,        name: "Jira" },
      { icon: faGithub,      name: "GitHub" },
      { Icon: SiConfluence,  name: "Confluence" },
      { Icon: SiTwilio,      name: "Twilio" },
    ],
  ];

  return (
    <div id="Skills" style={styles.container}>
      <h1 id="SkillsHeading" style={styles.heading}>
        My <span style={{ color: "#00abf0" }}>Skills</span>
      </h1>
      <div style={styles.groupsContainer}>
        {groups.map((group, i) => (
          <React.Fragment key={i}>
            <SkillRow skills={group} />
            {i < groups.length - 1 && <div style={styles.divider} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "auto",
    minHeight: "36rem",
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
    marginBottom: "0",
  },
  groupsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    width: "90%",
    maxWidth: "1000px",
  },
  skillRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "2rem",
  },
  divider: {
    width: "40%",
    height: "1px",
    backgroundColor: "rgba(0, 171, 240, 0.2)",
  },
  skillItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "0.5rem",
    width: "5rem",
    minHeight: "7rem",
  },
  iconContainer: {
    color: "#00abf0",
    backgroundColor: "rgba(8,27,41,0.2)",
    borderRadius: "50%",
    padding: "0.5rem",
    width: "4.5rem",
    height: "4.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  },
  icon: { fontSize: "2.5rem" },
  reactIcon: { fontSize: "2.5rem" },
  image: {
    width: "3rem",
    height: "3rem",
    objectFit: "contain",
  },
  skillText: {
    fontSize: "0.85rem",
    lineHeight: "1.2",
    textAlign: "center",
  },
};

export default Skills;