import { assetPath } from "@/utils/asset";
import styles from "./SecretariatCard.module.css";

interface SecretariatCardProps {
  index: number;
  role: string;
  names: string;
  blurb: string;
  image?: string;
  featured?: boolean;
}

function HeartBadge({ className }: { className: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 21s-6.7-4.35-9.3-8.1C1 10.4 1.4 7 4.2 5.4c2.2-1.25 4.6-.6 6 1.2l1.8 2.3 1.8-2.3c1.4-1.8 3.8-2.45 6-1.2 2.8 1.6 3.2 5 1.5 7.5C18.7 16.65 12 21 12 21z"
        fill="url(#heartGoldGradient)"
        stroke="#8a6a1e"
        strokeWidth="0.5"
      />
      <defs>
        <linearGradient id="heartGoldGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff3c4" />
          <stop offset="45%" stopColor="#e8bb4e" />
          <stop offset="100%" stopColor="#a97a1e" />
        </linearGradient>
      </defs>
    </svg>
  );
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
  featured,
}: SecretariatCardProps) {
  const formattedIndex = index.toString().padStart(2, "0");
  const [c1, c2] = PALETTE[hashString(names) % PALETTE.length];

  return (
    <div
      className={`${styles.flipCard} ${featured ? styles.featured : ""}`}
      tabIndex={0}
      aria-label={`${names}, ${role}`}
    >
      <div className={styles.flipInner}>
        <div className={styles.flipFront}>
          <div
            className={styles.photoZone}
            style={image ? undefined : { background: `linear-gradient(140deg, ${c1}, ${c2})` }}
          >
            {image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={assetPath(image)} alt="" className={styles.photo} />
            ) : (
              <span className={styles.initials}>{initialsFor(names)}</span>
            )}
          </div>
          <div className={styles.flipScrim} aria-hidden="true" />
          {featured && <HeartBadge className={styles.heartBadge} />}
          <div className={styles.flipFrontCaption}>
            <span className={styles.index}>{formattedIndex}</span>
            <h3 className={styles.name}>{names}</h3>
            <p className={styles.role}>{role}</p>
          </div>
        </div>
        <div className={styles.flipBack}>
          {featured && <HeartBadge className={styles.heartBadge} />}
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
