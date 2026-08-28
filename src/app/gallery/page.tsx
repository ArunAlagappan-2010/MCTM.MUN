"use client";

import Card from "@/components/Card";
import PageHero from "@/components/PageHero";
import useReveal from "@/hooks/useReveal";
import { assetPath } from "@/utils/asset";
import styles from "./gallery.module.css";

type PhotoSize = "md" | "lg" | "wide" | "tall";

interface Photo {
  src: string;
  caption: string;
  size?: PhotoSize;
}

interface Collection {
  id: string;
  kicker: string;
  title: string;
  blurb: string;
  cover: string;
  photos: Photo[];
}

const COLLECTIONS: Collection[] = [
  {
    id: "floor",
    kicker: "Committee Sessions",
    title: "On the Floor",
    blurb:
      "Placards up, motions on the table, and the debate that actually decides a resolution's fate.",
    cover: "/gallery/photo-05.webp",
    photos: [
      { src: "/gallery/photo-01.webp", caption: "Committee Session", size: "md" },
      { src: "/gallery/photo-04.webp", caption: "Between Motions", size: "tall" },
      { src: "/gallery/photo-05.webp", caption: "Placards Up", size: "lg" },
      { src: "/gallery/photo-09.webp", caption: "Working the Brief", size: "md" },
      { src: "/gallery/photo-11.webp", caption: "Amendment Vote", size: "wide" },
      { src: "/gallery/photo-12.webp", caption: "Gavel Down", size: "md" },
      { src: "/gallery/photo-13.webp", caption: "Drafting at the Desk", size: "md" },
      { src: "/gallery/photo-14.webp", caption: "Placards Ready", size: "md" },
      { src: "/gallery/photo-15.webp", caption: "Heads Down, Laptops Open", size: "wide" },
      { src: "/gallery/photo-16.webp", caption: "Making the Case", size: "md" },
      { src: "/gallery/photo-17.webp", caption: "Point of Order", size: "tall" },
    ],
  },
  {
    id: "opening",
    kicker: "Closing Ceremony",
    title: "Closing Ceremony",
    blurb:
      "Flags in for the opening call to order, and the certificates handed out at the closing ceremony.",
    cover: "/gallery/photo-19.webp",
    photos: [
      { src: "/gallery/photo-02.webp", caption: "Closing Ceremony Recital", size: "lg" },
      { src: "/gallery/photo-18.webp", caption: "Certificates Awarded", size: "lg" },
      { src: "/gallery/photo-19.webp", caption: "The Full Cast", size: "wide" },
      { src: "/gallery/photo-20.webp", caption: "Final Bow", size: "wide" },
      { src: "/gallery/photo-21.webp", caption: "Closing Remarks", size: "md" },
    ],
  },
  {
    id: "behind",
    kicker: "Before & Between",
    title: "Behind the Scenes",
    blurb:
      "Rooms placarded before the first delegate walks in, and the chairs keeping order once they do.",
    cover: "/gallery/photo-03.webp",
    photos: [
      { src: "/gallery/photo-03.webp", caption: "Before the Gavel Falls", size: "wide" },
      { src: "/gallery/photo-08.webp", caption: "The Chair Calls Order", size: "md" },
      { src: "/gallery/photo-22.webp", caption: "M.CT.M.MUN, Signed", size: "md" },
      { src: "/gallery/photo-23.webp", caption: "Checking In", size: "md" },
      { src: "/gallery/photo-24.webp", caption: "Committee Desks", size: "md" },
      { src: "/gallery/photo-25.webp", caption: "Queue at the Gate", size: "wide" },
    ],
  },
  {
    id: "delegate-life",
    kicker: "Off the Record",
    title: "Delegate Life",
    blurb:
      "Press corps typing through crisis updates, and the quieter moments between rounds.",
    cover: "/gallery/photo-06.webp",
    photos: [
      { src: "/gallery/photo-06.webp", caption: "Press Corps at Work", size: "wide" },
      { src: "/gallery/photo-07.webp", caption: "Heads Together", size: "tall" },
      { src: "/gallery/photo-10.webp", caption: "Between Rounds", size: "md" },
      { src: "/gallery/photo-26.webp", caption: "Kurta and Confidence", size: "tall" },
      { src: "/gallery/photo-27.webp", caption: "The Crew", size: "md" },
      { src: "/gallery/photo-28.webp", caption: "Empty Hall, Before the Rush", size: "wide" },
      { src: "/gallery/photo-29.webp", caption: "Backstage", size: "md" },
    ],
  },
];

const STATS = [
  { value: String(COLLECTIONS.reduce((n, c) => n + c.photos.length, 0)), label: "Frames" },
  { value: String(COLLECTIONS.length), label: "Collections" },
  { value: "7", label: "Committees" },
  { value: "M.CT.M.MUN'25", label: "Prior Edition" },
];

function CollectionCard({ collection, index }: { collection: Collection; index: number }) {
  const { ref, visible } = useReveal<HTMLAnchorElement>();
  return (
    <a
      href={`#${collection.id}`}
      ref={ref}
      className={`${styles.collectionLink} ${styles.reveal} ${
        visible ? styles.revealVisible : ""
      }`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <Card padding="0" className={styles.collectionCard}>
        <div className={styles.collectionCover}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assetPath(collection.cover)} alt="" loading="lazy" />
        </div>
        <div className={styles.collectionBody}>
          <p className={styles.collectionKicker}>{collection.kicker}</p>
          <h2 className={styles.collectionTitle}>{collection.title}</h2>
          <p className={styles.collectionBlurb}>{collection.blurb}</p>
          <span className={styles.collectionCount}>
            {collection.photos.length} photo
            {collection.photos.length === 1 ? "" : "s"}
          </span>
        </div>
      </Card>
    </a>
  );
}

const SIZE_CLASS: Record<PhotoSize, string> = {
  md: "",
  lg: "sizeLg",
  wide: "sizeWide",
  tall: "sizeTall",
};

function PhotoFrame({ photo, index }: { photo: Photo; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const sizeClass = styles[SIZE_CLASS[photo.size ?? "md"]] ?? "";
  return (
    <div
      ref={ref}
      className={`${styles.frame} ${sizeClass} ${styles.reveal} ${
        visible ? styles.revealVisible : ""
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.photo} src={assetPath(photo.src)} alt="" loading="lazy" />
      <div className={styles.scrim} aria-hidden="true" />
      <span className={styles.caption}>{photo.caption}</span>
    </div>
  );
}

export default function GalleryPage() {
  return (
    <div className="page-shell">
      <PageHero
        kicker="M.CT.M.MUN · From the Floor"
        title="Gallery"
        intro="Frames from the first edition, sorted into the moments that made it — the floor, the ceremony, and everything that happened around them."
      />
      <main className="content-page">
        <div className={styles.highlight}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.highlightItem}>
              <span className={styles.highlightValue}>{s.value}</span>
              <span className={styles.highlightLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.collections}>
          {COLLECTIONS.map((c, i) => (
            <CollectionCard key={c.id} collection={c} index={i} />
          ))}
        </div>

        {COLLECTIONS.map((c) => (
          <section key={c.id} id={c.id} className={styles.section}>
            <div className={styles.sectionHeader}>
              <p className={styles.sectionKicker}>{c.kicker}</p>
              <h2 className={styles.sectionTitle}>{c.title}</h2>
              <p className={styles.sectionText}>{c.blurb}</p>
            </div>
            <div className={styles.grid}>
              {c.photos.map((p, i) => (
                <PhotoFrame key={p.src} photo={p} index={i} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
