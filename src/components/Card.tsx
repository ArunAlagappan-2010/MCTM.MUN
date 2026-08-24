import styles from "./Card.module.css";

interface CardProps {
  className?: string;
  padding?: string;
  children: React.ReactNode;
}

export default function Card({ className = "", padding, children }: CardProps) {
  return (
    <div
      className={`${styles.card} ${className}`}
      style={padding ? ({ "--card-padding": padding } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
