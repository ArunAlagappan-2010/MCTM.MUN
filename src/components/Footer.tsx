import Link from "next/link";
import { SCHOOL_ADDRESS } from "@/data/mun";
import { assetPath } from "@/utils/asset";
import styles from "./Footer.module.css";

const LINKS = [
  { href: "/legacy", label: "Legacy" },
  { href: "/committees", label: "Committees" },
  { href: "/secretariat", label: "Secretariat" },
  { href: "/gallery", label: "Gallery" },
  { href: "/register", label: "Register" },
];

const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  SCHOOL_ADDRESS
)}`;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath("/brand/logo-transparent.png")}
            alt=""
            className={styles.logo}
            aria-hidden="true"
          />
          <div>
            <p className={styles.wordmark}>M.CT.M.MUN&apos;26</p>
            <p className={styles.tagline}>
              M.CT.M Chidambaram Chettyar International School &middot;
              September 18&ndash;19, 2026
            </p>
          </div>
        </div>

        <nav className={styles.linkGroup} aria-label="Footer navigation">
          <p className={styles.groupLabel}>Explore</p>
          <ul className={styles.linkList}>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={styles.link}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.linkGroup}>
          <p className={styles.groupLabel}>Venue</p>
          <address className={styles.address}>{SCHOOL_ADDRESS}</address>
          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Get Directions &rarr;
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2026 M.CT.M.MUN. All rights reserved.</p>
        <p>Model United Nations, hosted on campus.</p>
      </div>
    </footer>
  );
}
