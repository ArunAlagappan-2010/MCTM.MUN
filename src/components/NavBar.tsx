"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavBar.module.css";

const LINKS = [
  { href: "/legacy", label: "Legacy" },
  { href: "/committees", label: "Committees" },
  { href: "/secretariat", label: "Secretariat" },
  { href: "/gallery", label: "Gallery" },
  { href: "/register", label: "Register" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className={styles.bar}>
      <Link href="/" className={styles.brand}>
        <img
          src="/brand/logo-transparent.png"
          alt="MCTMMUN'26"
          className={styles.logo}
        />
      </Link>
      <ul className={styles.links}>
        {LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`${styles.link} ${
                pathname === link.href ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
