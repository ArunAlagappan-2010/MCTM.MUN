import Card from "@/components/Card";
import PageHero from "@/components/PageHero";
import styles from "./legacy.module.css";

export default function LegacyPage() {
  return (
    <div className="page-shell">
      <PageHero kicker="MCTMMUN'26 · Legacy" title="The Second Edition" />
      <main className="content-page">
        <div className={styles.columns}>
        <div className={styles.copy}>
          <p>
            MCTM MUN began as M.CT.M Chidambaram Chettyar International
            School&apos;s first attempt at bringing the Model United Nations
            format to its own campus — students stepping into the role of
            diplomats, researching, negotiating, and drafting resolutions on
            the issues actually shaping the world: human rights, security,
            climate, global health.
          </p>
          <p>
            MCTMMUN&apos;26 is the second edition, organised by the current
            batch of IB1 students under the supervision of Ms. Shrilekha
            (Maths Faculty) and Ms. Kiran (Economics Faculty), with the
            guidance of Ms. Sangita Varma, Head of the International School.
          </p>
          <p>
            Running it twice means running it better. Feedback windows have
            been built into the schedule this time. Certificates are
            prepared a week in advance instead of scrambled together
            overnight. The dress code and delegate conduct rules are briefed
            up front, not litigated mid-committee. None of that shows up on
            a placard — it&apos;s just the difference between a first draft
            and a resolution that actually passes.
          </p>
        </div>

          <Card className={styles.statCard}>
            <ul className={styles.stats}>
              <li>
                <span className={styles.statValue}>2nd</span>
                <span className={styles.statLabel}>Edition</span>
              </li>
              <li>
                <span className={styles.statValue}>7</span>
                <span className={styles.statLabel}>Committees</span>
              </li>
              <li>
                <span className={styles.statValue}>2</span>
                <span className={styles.statLabel}>Days on campus</span>
              </li>
              <li>
                <span className={styles.statValue}>Sept 18&ndash;19</span>
                <span className={styles.statLabel}>2026</span>
              </li>
            </ul>
          </Card>
        </div>
      </main>
    </div>
  );
}
