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
          "Designed and deployed a scalable image generation feature for the AIRA chatbot on AWS EKS, using Terraform, Python, and a custom middleware.",
          "Utilized OpenAI to generate contextually relevant images from user chats with Stable Diffusion.",
          "Developed frontend with character-based image detection, a dynamic generation slider, and a context button, improving user understanding and engagement.",
        ]}
      />
    </div>
  );
};
