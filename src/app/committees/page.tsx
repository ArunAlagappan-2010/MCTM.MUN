import Card from "@/components/Card";
import PageHero from "@/components/PageHero";
import { committees } from "@/data/mun";
import { assetPath } from "@/utils/asset";
import styles from "./committees.module.css";

export default function CommitteesPage() {
  return (
    <div className="page-shell">
      <PageHero
        kicker="M.CT.M.MUN'26 · Proposed Committees"
        title="Seven Rooms, Seven Crises"
        intro="Each committee runs on its own agenda, its own pace, and its own executive board — pinned here exactly as they'll run on the floor."
      />
      <main className="content-page">
        <div className={styles.grid}>
          {committees.map((c) => (
            <Card key={c.code} padding="2.5rem 2.25rem 2rem">
              <p className={styles.code}>{c.code}</p>
              <h2 className={styles.name}>{c.name}</h2>
              <p className={styles.delegates}>{c.delegates}</p>
              <p className={styles.focus}>{c.focus}</p>
              {c.agenda && (
                <div className={styles.agendaBlock}>
                  <span className={styles.agendaLabel}>Agenda</span>
                  <p className={styles.agendaText}>{c.agenda}</p>
                  {c.freezeDate && (
                    <span className={styles.freezeDate}>
                      Freeze date: {c.freezeDate}
                    </span>
                  )}
                </div>
              )}
              <div className={styles.chairRow}>
                <span className={styles.chairLabel}>Chair</span>
                <span>{c.chair}</span>
              </div>
              {c.viceChair && (
                <div className={styles.chairRow}>
                  <span className={styles.chairLabel}>Vice Chair</span>
                  <span>{c.viceChair}</span>
                </div>
              )}
              <div className={styles.guideRow}>
                <a
                  href={c.guideUrl ? assetPath(c.guideUrl) : "#"}
                  target={c.guideUrl ? "_blank" : undefined}
                  rel={c.guideUrl ? "noopener noreferrer" : undefined}
                  className={styles.guideButton}
                >
                  <span>Background Guide</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.guideIcon}
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

