import styles from "./HeroIntro.module.css";

export default function HeroIntro() {
  return (
    <div className={styles.wrap}>
      <p className={styles.eyebrow}>September 18&ndash;19, 2026</p>
      <h1 className={styles.title}>M.CT.M.MUN&apos;26</h1>
      <p className={styles.school}>
        M.CT.M Chidambaram Chettyar International School
      </p>
    </div>
  );
}
