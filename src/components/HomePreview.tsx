"use client";

import Link from "next/link";
import Card from "@/components/Card";
import useReveal from "@/hooks/useReveal";
import useParallax from "@/hooks/useParallax";
import { committees, SCHOOL_ADDRESS } from "@/data/mun";
import styles from "./HomePreview.module.css";

function Sparkle({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      className={styles.sparkle}
      style={style}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
    </svg>
  );
}

const LINKS = [
  {
    href: "/legacy",
    label: "Legacy",
    body: "Why the second edition exists, and what's changed since the first.",
  },
  {
    href: "/secretariat",
    label: "Secretariat",
    body: "The IB1 students running the conference end to end.",
  },
  {
    href: "/gallery",
    label: "Gallery",
    body: "Photos from the floor of last year's conference.",
  },
];

const FLOOR_PHOTOS = [
  { src: "/gallery/photo-01.webp", caption: "Committee Session" },
  { src: "/gallery/photo-02.webp", caption: "Opening Ceremony" },
  { src: "/gallery/photo-03.webp", caption: "Classroom Debate" },
  { src: "/gallery/photo-04.webp", caption: "Delegate Caucus" },
  { src: "/gallery/photo-05.webp", caption: "Floor Discussion" },
  { src: "/gallery/photo-06.webp", caption: "Committee Prep" },
  { src: "/gallery/photo-12.webp", caption: "Gavel Down" },
  { src: "/gallery/photo-19.webp", caption: "The Full Cast" },
];

const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  SCHOOL_ADDRESS
)}&output=embed`;
const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  SCHOOL_ADDRESS
)}`;

const TOTAL_DELEGATES = committees.reduce(
  (sum, c) => sum + parseInt(c.delegates.replace(/\D/g, ""), 10),
  0
);

const STATS = [
  { value: String(committees.length), label: "Committees" },
  { value: `~${TOTAL_DELEGATES}`, label: "Delegates" },
  { value: "2", label: "Days on campus" },
  { value: "Sept 18–19", label: "2026" },
];

function RevealCard({
  href,
  label,
  body,
  index,
}: {
  href: string;
  label: string;
  body: string;
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLAnchorElement>();
  return (
    <Link
      href={href}
      ref={ref}
      className={`${styles.cardLink} ${styles.reveal} ${
        visible ? styles.revealVisible : ""
      }`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <Card>
        <p className={styles.cardLabel}>{label}</p>
        <p className={styles.cardBody}>{body}</p>
      </Card>
    </Link>
  );
}

function RevealFloorFrame({
  src,
  caption,
  index,
}: {
  src: string;
  caption: string;
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${styles.floorFrame} ${styles.reveal} ${
        visible ? styles.revealVisible : ""
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.floorPhoto} src={src} alt="" loading="lazy" />
      <div className={styles.floorScrim} aria-hidden="true" />
      <span className={styles.floorCaption}>{caption}</span>
    </div>
  );
}

export default function HomePreview() {
  const { ref: splitRef, visible: splitVisible } = useReveal<HTMLElement>();
  const { ref: committeesRef, visible: committeesVisible } =
    useReveal<HTMLElement>();
  const parallaxRef = useParallax<HTMLImageElement>(30);

  return (
    <main className="page-shell content-page">
      <div className={styles.introBand}>
        <header className={styles.header}>
          <p className={styles.kicker}>MCTMMUN&apos;26 &middot; September 18&ndash;19, 2026</p>
          <h2 className={styles.title}>Two Days, Seven Committees</h2>
          <p className={styles.intro}>
            Delegates from schools across the region debating human rights,
            disarmament, crisis response, and more — on the campus of M.CT.M
            Chidambaram Chettyar International School.
          </p>
        </header>
        <Sparkle style={{ top: "18%", right: "9%", width: 18, height: 18 }} />
        <Sparkle style={{ top: "62%", right: "16%", width: 12, height: 12 }} />
        <Sparkle style={{ top: "40%", right: "5%", width: 9, height: 9 }} />
      </div>

      <div className={styles.stats}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.statItem}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      <section
        ref={committeesRef}
        className={`${styles.committeesFeature} ${styles.reveal} ${
          committeesVisible ? styles.revealVisible : ""
        }`}
      >
        <div className={styles.committeesText}>
          <p className={styles.committeesKicker}>
            {committees.length} Committees &middot; ~{TOTAL_DELEGATES} Delegates
          </p>
          <h2 className={styles.committeesTitle}>
            Where the Debate Actually Happens
          </h2>
          <p className={styles.committeesBody}>
            From the Security Council&apos;s fast-moving crises to the Press
            Corps holding every other room accountable — seven committees,
            each running its own agenda, its own pace, its own executive
            board.
          </p>
          <Link href="/committees" className={styles.committeesLink}>
            Explore all seven committees &rarr;
          </Link>
        </div>
        <ul className={styles.committeesList}>
          {committees.map((c) => (
            <li key={c.code} className={styles.committeeChip}>
              <span className={styles.committeeCode}>{c.code}</span>
              <span className={styles.committeeName}>{c.name}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className={styles.grid}>
        {LINKS.map((l, i) => (
          <RevealCard key={l.href} index={i} {...l} />
        ))}
      </div>

      <section
        ref={splitRef}
        className={`${styles.split} ${styles.reveal} ${
          splitVisible ? styles.revealVisible : ""
        }`}
      >
        <div className={styles.splitImage}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={parallaxRef}
            src="/gallery/photo-07.webp"
            alt=""
            loading="lazy"
          />
        </div>
        <div className={styles.splitText}>
          <p className={styles.kicker}>The Second Edition</p>
          <h2 className={styles.splitTitle}>Running It Twice Means Running It Better</h2>
          <p className={styles.splitBody}>
            MCTMMUN&apos;26 builds directly on the first edition — feedback
            windows built into the schedule, certificates prepared a week in
            advance, conduct rules briefed up front instead of litigated
            mid-committee. None of it shows up on a placard. It&apos;s the
            difference between a first draft and a resolution that actually
            passes.
          </p>
          <Link href="/legacy" className={styles.splitLink}>
            Read the full story &rarr;
          </Link>
        </div>
      </section>

      <section className={styles.floor}>
        <div className={styles.floorHeader}>
          <h2 className={styles.floorTitle}>From the Floor</h2>
          <Link href="/gallery" className={styles.floorLink}>
            See full gallery &rarr;
          </Link>
        </div>
        <div className={styles.floorGrid}>
          {FLOOR_PHOTOS.map((p, i) => (
            <RevealFloorFrame key={p.src} index={i} {...p} />
          ))}
        </div>
      </section>

      <VenueSection />
    </main>
  );
}

function VenueSection() {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      className={`${styles.venue} ${styles.reveal} ${
        visible ? styles.revealVisible : ""
      }`}
    >
      <div className={styles.venueText}>
        <p className={styles.kicker}>The Venue</p>
        <h2 className={styles.venueTitle}>Find Us on Campus</h2>
        <p className={styles.venueBody}>
          MCTMMUN&apos;26 runs on the campus of M.CT.M Chidambaram Chettyar
          International School, in Mylapore, Chennai.
        </p>
        <address className={styles.venueAddress}>{SCHOOL_ADDRESS}</address>
        <a
          href={MAPS_DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.venueLink}
        >
          Get Directions &rarr;
        </a>
      </div>
      <div className={styles.venueMap}>
        <iframe
          src={MAPS_EMBED_URL}
          title="Map to M.CT.M Chidambaram Chettyar International School"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
