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
        title="Programming"
        skills={[
          "TypeScript",
          "Python",
          "JavaScript (React.js, Next.js)",
          "Node.js",
          "PyTorch",
        ]}
      />
      <SkillCategory
        title="Cloud & DevOps"
        skills={["AWS", "Kubernetes", "Docker", "Terraform", "Git", "CI/CD"]}
      />
      <SkillCategory
        title="Soft Skills"
        skills={[
          "Leadership",
          "Communication",
          "Problem-solving",
          "Collaboration",
          "Time Management",
        ]}
      />
      <SkillCategory
        title="Languages"
        skills={[
          "Korean (Native)",
          "English (Proficient)",
          "Chinese (Proficient)",
          "Japanese (Proficient)",
        ]}
      />
    </div>
  );
};
