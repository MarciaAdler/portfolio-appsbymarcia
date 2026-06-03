import React, { Component } from "react";
import CaseStudy from "../components/CaseStudy";
import casestudies from "../casestudies.json";
import "../components/NavTabsstyle.css";


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
    color: "white",
    margin: "0 0 8px",
  },
  pageSubheading: {
    fontSize: "15px",
    color: "white",
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
class CaseStudies extends Component {
  state = {
    casestudies
  };

  render() {
    return (
    <div style={styles.page}>
      <h1 style={styles.pageHeading}>Case Studies</h1>
      <p style={styles.pageSubheading}>
        A selection of product work spanning AI/ML, 0-to-1 builds, and
        enterprise-scale delivery.
      </p>
      {this.state.casestudies.map((item) => (
            <CaseStudy
              key={item.id}
              tag={item.tag}
              tagcolor={item.tagcolor}
              title={item.title}
              company={item.company}
              problem={item.problem}
              bullets={item.bullets}
              statsnum1={item.statsnum1}
              statslabel1={item.statslabel1}
              statsnum2={item.statsnum2}
              statslabel2={item.statslabel2}
            />
          ))}
    </div>
  )
  }
}
export default CaseStudies;
