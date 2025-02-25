import Image from "next/image";
import styles from "../app/page.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <div
        className={styles.projectImage}
        style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}
      >
        <Image
          src={imageUrl}
          alt={`${title} Preview`}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        View Project →
      </a>
    </div>
  );
}
