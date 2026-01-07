import React from "react";
import styles from "../app/page.module.css";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  description,
}) => {
  return (
    <div className={styles.experienceItem}>
      <h3>{title}</h3>
      <p className={styles.experienceMeta}>
        {company} | {period}
      </p>
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export const Experience: React.FC = () => {
  return (
    <div className={styles.experienceContainer}>
      <ExperienceItem
        title="Full Stack Web Developer"
        company="OrcaAI Inc., Seoul"
        period="January 2024 - December 2024"
        description={[
          "Built an image creation feature for the AIRA chatbot using AWS, Terraform, and Python.",
          "Made it so users can create images from their conversations using AI.",
          "Added easy-to-use controls and features that helped users better understand how to create images.",
        ]}
      />
    </div>
  );
};
