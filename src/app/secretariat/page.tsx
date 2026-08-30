import PageHero from "@/components/PageHero";
import SecretariatCard from "@/components/SecretariatCard";
import { secretariat } from "@/data/mun";
import styles from "./secretariat.module.css";

export default function SecretariatPage() {
  return (
    <div className="page-shell">
      <PageHero
        kicker="M.CT.M.MUN'26 · Organising Committee"
        title="The Board Behind the Board"
        intro="Hover a card to see who's behind it."
      />
      <main className="content-page">
        <div className={styles.grid}>
          {secretariat.flatMap((s) =>
            s.people.map((p) => ({ role: s.role, blurb: p.blurb ?? s.blurb, person: p }))
          ).map((entry, i) => (
            <SecretariatCard
              key={`${entry.role}-${entry.person.name}`}
              index={i + 1}
              role={entry.role}
              names={entry.person.name}
              blurb={entry.blurb}
              image={entry.person.image}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
