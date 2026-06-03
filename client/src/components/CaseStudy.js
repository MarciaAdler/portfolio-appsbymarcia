import React from "react";
import "./NavTabsstyle.css";
import { useState } from "react";

const styles = {
  page: {
    maxWidth: "780px",
    margin: "0 auto",
    padding: "3rem 1.5rem",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
  },
  pageHeading: {
    fontSize: "28px",
    fontWeight: "600",
    color: "#111",
    margin: "0 0 8px",
  },
  pageSubheading: {
    fontSize: "15px",
    color: "#666",
    margin: "0 0 2.5rem",
    lineHeight: "1.5",
  },
  card: {
    background: "#fff",
    border: "1px solid #e8e8e8",
    borderRadius: "14px",
    padding: "1.75rem",
    marginBottom: "1.25rem",
    transition: "box-shadow 0.2s ease",
  },
  tag: {
    display: "inline-block",
    fontSize: "11px",
    fontWeight: "600",
    padding: "4px 10px",
    borderRadius: "6px",
    marginBottom: "12px",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#111",
    margin: "0 0 4px",
  },
  company: {
    fontSize: "13px",
    color: "#888",
    margin: "0 0 1.25rem",
  },
  sectionLabel: {
    fontSize: "11px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "0.07em",
    color: "#aaa",
    margin: "1rem 0 6px",
  },
  prose: {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.65",
    margin: "0",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #f0f0f0",
    margin: "1.25rem 0",
  },
  bulletList: {
    margin: "0",
    padding: "0",
    listStyle: "none",
  },
  bulletItem: {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.65",
    padding: "3px 0 3px 1.2rem",
    position: "relative",
  },
  bulletDash: {
    position: "absolute",
    left: "0",
    color: "#ccc",
    fontWeight: "400",
  },
  statGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
    marginTop: "6px",
  },
  statBox: {
    background: "#f9f9f9",
    borderRadius: "10px",
    padding: "12px 14px",
  },
  statNum: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#111",
    margin: "0 0 2px",
  },
  statLabel: {
    fontSize: "12px",
    color: "#888",
    margin: "0",
  },
  accordion: {
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "0",
    textAlign: "left",
  },
  chevron: {
    fontSize: "18px",
    color: "#bbb",
    transition: "transform 0.2s ease",
    userSelect: "none",
  },
};

function CaseStudy(props) {
const [open, setOpen] = useState(true);

  return (
    <div
      style={{
        ...styles.card,
        boxShadow: open ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <span style={{ ...styles.tag, ...props.tagColor }}>{props.tag}</span>

      <button
        style={styles.accordion}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div>
          <p style={styles.title}>{props.title}</p>
          <p style={styles.company}>{props.company}</p>
        </div>
        <span
          style={{
            ...styles.chevron,
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        >
          ▾
        </span>
      </button>

      {open && (
        <>
          <p style={styles.sectionLabel}>The problem</p>
          <p style={styles.prose}>{props.problem}</p>

          <hr style={styles.divider} />

          <p style={styles.sectionLabel}>What I did</p>
          <ul style={styles.bulletList}>
            {props.bullets.map((b, i) => (
              <li key={i} style={styles.bulletItem}>
                <span style={styles.bulletDash}>—</span>
                {b}
              </li>
            ))}
          </ul>

          <hr style={styles.divider} />

          <p style={styles.sectionLabel}>Outcome</p>
          <div style={styles.statGrid}>
              <div key={props.key} style={styles.statBox}>
                <p style={styles.statNum}>{props.statsnum1}</p>
                <p style={styles.statLabel}>{props.statslabel1}</p>
              </div>
              <div key={props.key} style={styles.statBox}>
                <p style={styles.statNum}>{props.statsnum2}</p>
                <p style={styles.statLabel}>{props.statslabel2}</p>
              </div>
           
          </div>
        </>
      )}
    </div>
  );
}
export default CaseStudy;