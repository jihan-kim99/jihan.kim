import React from "react";
import styles from "./StartupProject.module.css";
import Image from "next/image";

interface StartupProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  appStoreUrl: string;
  playStoreUrl: string;
}

export const StartupProject: React.FC<StartupProjectProps> = ({
  title,
  description,
  imageUrl,
  appStoreUrl,
  playStoreUrl,
}) => {
  return (
    <div className={styles.startupContainer}>
      <div className={styles.startupContent}>
        <div className={styles.startupInfo}>
          <h3 className={styles.startupTitle}>{title}</h3>
          <p className={styles.startupDescription}>{description}</p>
          <div className={styles.storeLinks}>
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.storeButton}
            >
              <Image
                src="/appstore-badge.svg"
                alt="Download on App Store"
                width={135}
                height={40}
                className={styles.storeBadge}
              />
            </a>
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.storeButton}
            >
              <Image
                src="/playstore-badge.png"
                alt="Get it on Google Play"
                width={135}
                height={40}
                className={styles.storeBadge}
              />
            </a>
          </div>
        </div>
        <div className={styles.startupImageContainer}>
          <Image
            src={imageUrl}
            alt={`${title} screenshot`}
            width={300}
            height={600}
            className={styles.startupImage}
          />
        </div>
      </div>
    </div>
  );
};
