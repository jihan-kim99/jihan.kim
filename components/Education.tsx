import React from "react";
import styles from "../app/page.module.css";

export const Education: React.FC = () => {
  return (
    <div className={styles.educationContainer}>
      <div className={styles.educationItem}>
        <h3>Hanyang University, Seoul</h3>
        <p>Bachelor of Computer Science</p>
        <p className={styles.period}>March 2019 - January 2025 (Graduated)</p>
        <h4>Notable Projects:</h4>
        <ul>
          <li>
            <strong>Capstone Project:</strong> Developed a network-aware
            Kubernetes scheduler optimized for multi-region ML deployments,
            achieving 30-60% performance improvements on AWS by minimizing
            network latency using kubeadm, Terraform.
          </li>
          <li>
            <strong>Research Project:</strong> Fine-tuned a chain-of-thought
            model resulting in a 5% performance boost (measured by F1-score).
          </li>
        </ul>
      </div>
    </div>
  );
};
