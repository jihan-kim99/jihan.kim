import React from "react";
import styles from "../app/page.module.css";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className={styles.skillCategory}>
      <h3>{title}</h3>
      <p>{skills.join(", ")}</p>
    </div>
  );
};

export const Skills: React.FC = () => {
  return (
    <div className={styles.skillsContainer}>
      <SkillCategory
        title="Technical Skills"
        skills={[
          "Languages: JavaScript (ES6+), TypeScript, C/C++, Node.js, Python, HTML, CSS",
          "Technologies: React, Node.js, MongoDB, BigQuery, AWS (EKS, EC2, S3), Kubernetes, Docker, Terraform, Git, GitHub, Diffusers, OpenCV",
          "Database: MongoDB",
        ]}
      />
      <SkillCategory
        title="Languages we might use to chat sometimes"
        skills={[
          "Korean (Native)",
          "English (Fluent)",
          "Chinese (Fluent)",
          "Japanese (Fluent)",
          "Arabic (Only few words)",
        ]}
      />
      <SkillCategory
        title="Soft Skills"
        skills={[
          "Leadership",
          "Communication",
          "Problem-solving",
          "Collaboration",
          "Cooking(Very Good)",
          "Time Management",
        ]}
      />
    </div>
  );
};
