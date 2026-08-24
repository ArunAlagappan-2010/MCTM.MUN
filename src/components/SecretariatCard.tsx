import styles from "./SecretariatCard.module.css";

interface SecretariatCardProps {
  index: number;
  role: string;
  names: string;
  blurb: string;
  image?: string;
}

const PALETTE: [string, string][] = [
  ["#7a5a1e", "#dcac4e"],
  ["#1c3524", "#3f6b4a"],
  ["#5c2018", "#a9503c"],
  ["#2d4a52", "#5c8a94"],
  ["#4a3d24", "#8a6f3a"],
];

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h * 31 + s.charCodeAt(i)) >>> 0;
  }
  return h;
}

function initialsFor(names: string): string {
  const first = names.split(/[&,]/)[0].trim();
  const parts = first.split(" ").filter(Boolean);
  return parts
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export default function SecretariatCard({
  index,
  role,
  names,
  blurb,
  image,
}: SecretariatCardProps) {
  const formattedIndex = index.toString().padStart(2, "0");
  const [c1, c2] = PALETTE[hashString(names) % PALETTE.length];

  return (
    <div className={styles.flipCard} tabIndex={0} aria-label={`${names}, ${role}`}>
      <div className={styles.flipInner}>
        <div className={styles.flipFront}>
          <div
            className={styles.photoZone}
            style={image ? undefined : { background: `linear-gradient(140deg, ${c1}, ${c2})` }}
          >
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image} alt="" className={styles.photo} />
            ) : (
              <span className={styles.initials}>{initialsFor(names)}</span>
            )}
          </div>
          <div className={styles.flipScrim} aria-hidden="true" />
          <div className={styles.flipFrontCaption}>
            <span className={styles.index}>{formattedIndex}</span>
            <h3 className={styles.name}>{names}</h3>
            <p className={styles.role}>{role}</p>
          </div>
        </div>
        <div className={styles.flipBack}>
          <span className={styles.index}>{formattedIndex}</span>
          <h3 className={styles.name}>{names}</h3>
          <div className={styles.divider} />
          <p className={styles.role}>{role}</p>
          <p className={styles.blurb}>{blurb}</p>
        </div>
      </div>
    </div>
  );
}
