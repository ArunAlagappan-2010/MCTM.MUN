import styles from "./PageHero.module.css";

interface PageHeroProps {
  kicker: string;
  title: string;
  intro?: string;
}

export default function PageHero({ kicker, title, intro }: PageHeroProps) {
  return (
    <header className={styles.hero}>
      <p className={styles.kicker}>{kicker}</p>
      <h1 className={styles.title}>{title}</h1>
      {intro && <p className={styles.intro}>{intro}</p>}
    </header>
  );
}
