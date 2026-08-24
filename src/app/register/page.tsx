import Card from "@/components/Card";
import PageHero from "@/components/PageHero";
import styles from "./register.module.css";

const REGISTRATION_FORM_URL = "https://forms.google.com";

const STEPS = [
  {
    n: "01",
    title: "Your school registers",
    body: "Registration runs through schools, not individual delegates — no adult chaperone required per delegate.",
  },
  {
    n: "02",
    title: "Fill the delegate template",
    body: "We send an Excel template for your delegate list, with each student's committee preference and prior MUN experience.",
  },
  {
    n: "03",
    title: "Pay & confirm",
    body: "Registration fee is Rs. 1000 per delegate (inclusive of 18% GST). Confirmation of payment is through a Google Form.",
  },
  {
    n: "04",
    title: "You're in",
    body: "Once payment is confirmed, delegates are registered and committee placements are finalised ahead of the conference.",
  },
];

export default function RegisterPage() {
  return (
    <div className="page-shell">
      <PageHero
        kicker="MCTMMUN'26 · MCTM Chidambaram Chettyar International School"
        title="Register"
      />
      <main className="content-page">
        <div className={styles.highlight}>
          <div className={styles.highlightItem}>
            <span className={styles.highlightValue}>Rs. 1000</span>
            <span className={styles.highlightLabel}>Per delegate, incl. GST</span>
          </div>
          <div className={styles.highlightItem}>
            <span className={styles.highlightValue}>Sept 18&ndash;19</span>
            <span className={styles.highlightLabel}>2026, on campus</span>
          </div>
          <div className={styles.highlightItem}>
            <span className={styles.highlightValue}>By school</span>
            <span className={styles.highlightLabel}>No individual sign-ups</span>
          </div>
        </div>

        <div className={styles.ctaWrap}>
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.registerBtn}
          >
            <span>Fill Registration Form</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        <div className={styles.steps}>
          {STEPS.map((s) => (
            <Card key={s.n} padding="2.5rem 2.25rem 2rem">
              <p className={styles.stepNum}>{s.n}</p>
              <h2 className={styles.stepTitle}>{s.title}</h2>
              <p className={styles.stepBody}>{s.body}</p>
            </Card>
          ))}
        </div>

        <div className={styles.bottomCta}>
          <a
            href={REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.registerBtn}
          >
            <span>Proceed to Registration Form</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        <p className={styles.footnote}>
          Reach out to your school&apos;s IB1 coordinating team for the
          delegate template and current committee availability.
        </p>
      </main>
    </div>
  );
}

