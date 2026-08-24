import PageHero from "@/components/PageHero";
import SecretariatCard from "@/components/SecretariatCard";
import { secretariat } from "@/data/mun";
import styles from "./secretariat.module.css";

export default function SecretariatPage() {
  return (
    <div className="page-shell">
      <PageHero
        kicker="MCTMMUN'26 · Organising Committee"
        title="The Board Behind the Board"
        intro="Hover a card to see who's behind it."
      />
      <main className="content-page">
        <div className={styles.grid}>
          {secretariat.map((s, i) => (
            <SecretariatCard
              key={`${s.role}-${s.names}`}
              index={i + 1}
              role={s.role}
              names={s.names}
              blurb={s.blurb}
              image={s.image}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
