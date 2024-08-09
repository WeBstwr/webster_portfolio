import React from "react";
import Skill from "./Skill";
import skills from "../../../data/skills.js";
import Title from "../../../components/Title/Title";
import "./skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Title text="my skills" />
      <div className="skills-container">
        {skills.map((skill, i) => (
          <Skill
            icon={<skill.icon />}
            title={skill.title}
            description={skill.description}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
