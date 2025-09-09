import styles from "../app/page.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.hero}>
        <h1>Hi, I&apos;m Jihan Kim</h1>
        <p>A Software Developer Looking for New Adventures</p>
      </div>
    </header>
  );
}
