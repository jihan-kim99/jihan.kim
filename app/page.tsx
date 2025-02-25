import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StartupProject } from "@/components/StartupProject";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";

export default function Home() {
  const projects = [
    {
      title: "Toy Bot",
      description: "A character chatting application powered by AI",
      imageUrl: "/toybot.png",
      projectUrl: "https://toy-bot.vercel.app",
    },
    {
      title: "Novelistic",
      description: "AI-powered novel writing platform",
      imageUrl: "/novelistic.png",
      projectUrl: "https://novelistic.vercel.app",
    },
    {
      title: "FKPRA",
      description: "Future Korean Peninsula Residents Association Homepage",
      imageUrl: "/fkpra.png",
      projectUrl: "https://fkpra.com",
    },
  ];

  return (
    <div className={styles.container}>
      <ThemeToggle />
      <Header />

      <section className={`${styles.about} animate-fade-in`}>
        <h2>About Me</h2>
        <p>
          I&apos;m a Computer Science graduate from Hanyang University,
          specializing in designing scalable cloud architectures for AI
          applications. With expertise in Kubernetes, Terraform, and AWS, I
          focus on building resilient AI solutions. Currently seeking exciting
          opportunities in Canada to contribute my skills and experience in
          cloud infrastructure and AI development.
        </p>
      </section>

      <section className={`${styles.startup} animate-fade-in`}>
        <h2>My Startup</h2>
        <StartupProject
          title="AIRA"
          description="An innovative character chatbot application powered by AI that enables users to chat with images. Experience the next generation of AI conversation."
          imageUrl="/aira.png"
          appStoreUrl="https://apps.apple.com/us/app/aira-ai-chat-with-images/id6499257852"
          playStoreUrl="https://play.google.com/store/apps/details?id=site.orcaai.app&hl=en"
        />
      </section>

      <section className={`${styles.projects} animate-fade-in`}>
        <h2>Featured Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className={`${styles.experience} animate-fade-in`}>
        <h2>Work Experience</h2>
        <Experience />
      </section>

      <section className={`${styles.education} animate-fade-in`}>
        <h2>Education</h2>
        <Education />
      </section>

      <section className={`${styles.skills} animate-fade-in`}>
        <h2>Skills</h2>
        <Skills />
      </section>

      <footer className={styles.footer}>
        <div className={styles.contact}>
          <a href="mailto:jinnkenny99@gmail.com">📧 jinnkenny99@gmail.com</a>
          <a href="tel:+821041978059">📱 (+82) 10 4197 8059</a>
          <a
            href="https://github.com/jihan-kim99"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
