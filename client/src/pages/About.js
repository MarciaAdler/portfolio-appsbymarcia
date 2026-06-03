import React from "react";
import AboutImage from "../components/AboutImage";
import "../components/NavTabsstyle.css";
const styles = {
  container: {
    marginBottom: "20px",
    marginTop: "0",
    maxWidth: "960px",
  },
  title: {
    textAlign: "center",
    color: "white",
  },
  p1: {
    textAlign: "left",
    color: "white",
  },
  p: {
    textAlign: "center",
    color: "white",
  },

  icon: {
    textAlign: "center",
    height: "30px",
    borderRadius: ".2em",
    marginLeft: "20px",
    marginRight: "20px",
    marginBottom: "20px",
  },
  links: {
    textAlign: "center",
  },
};
function About() {
  return (
    <div>
      <div className="container-fluid" style={styles.container}>
        <hr />
        <div className="row">
          <div className="col-12 col-md-4">
            <AboutImage />
          </div>
          <section className="col-12 col-md-8">
            <h3 style={styles.title}>Senior Product Manager | Builder | 10+ Years Across SaaS, Consulting & Startups</h3>
            <hr />
            <p style={styles.p1}>
              I'm a Senior Product Manager with 10+ years of experience across Big 4 consulting, global agency operations, entrepreneurship, and growth-stage SaaS — and I sit at the intersection of technical depth and customer empathy in a way most PMs don't.
              <br></br>
              <br></br>
              I can walk out of a user interview, translate pain points into a prioritized roadmap, and then sit down with an engineering team to hash out architecture decisions — without needing anyone to translate for me. That's always been my edge.
              <br></br>
              <br></br>
              My career has spanned EY (where I led HR platform products across 5+ M&A engagements), Omnicom (where I directed a global shared services transformation), a stint as a solo PM/founder (where I built a full-stack property management app from zero), and most recently Countable — a B2B/B2B2C SaaS startup where I owned 3 core products, shipped an AI/ML-powered MVP in under 3 months, and at times served as the de facto VP of Product.
              <br></br>
              <br></br>
              I thrive in fast-moving environments where I have real ownership, can push back constructively, and work with teammates who believe we do better together than alone.
              
            </p>  
              <h4 style={styles.p1}>Key Accomplishments:</h4>
                <ul style={styles.p1}>
                  <li> Shipped AI/ML-powered beta MVP in under <b>3 months</b> — defined the workflow, ensured output accuracy, and integrated two third-party APIs</li>
                  <li>Drove <b>~15% feature adoption increase</b> by owning roadmap for 3 core SaaS products aligned to top user pain points</li>
                  <li>Increased <b>client retention ~10%</b> by translating client feedback into prioritized product decisions</li>
                  <li>Created and executed go-to-market strategy that increased <b>MRR ~20%</b> through upsells and feature add-ons</li>
                  <li>Redesigned user onboarding flow, increasing <b>completion rate ~20%</b> through streamlined multi-step UX</li>
                  <li>Built a full-stack MVP (React, Node.js, Express) from scratch as a solo founder, validated with a 100+ property firm</li>
                  <li>Led enterprise SSO (OpenID Connect) implementation and designed role-based access controls for enterprise clients</li>
               </ul>
                
            
          </section>
        </div>
      </div>
      <section className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h6 style={styles.title}>
              <strong>Technology</strong>&nbsp;
            </h6>
            <p style={styles.p}>
              HTML &bull; CSS &bull; JavaScript &bull; MySQL &bull; MongoDB
              &bull; React &bull; Express &bull; Node JS &bull; Bootstrap &bull;
              SQL &bull; Sequelize &bull; Tailwind CSS
            </p>
          </div>

          <div className="col-12 col-md-6">
            <h6 style={styles.title}>
              <strong>Tools</strong>&nbsp;
            </h6>
            <p style={styles.p}>
              Figma &bull; Miro &bull; Asana &bull; GitHub &bull; Mode 
              &bull; Lucidchart &bull; Google Tag Manager &bull; Lovable &bull; Claude &bull; ChatGPT 
              &bull; Slack &bull; Google Workspace
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5 style={styles.title}>
              <strong>Contact Me</strong>
            </h5>
            <p style={styles.p}>
              I'm open to full-time opportunities, projects and collaborations as well as open discussions in the Tech and Product space. 
              Please reach out to me through any of the links below.
            </p>
            <div style={styles.links}>
              <a
                style={styles.link}
                href="https://www.linkedin.com/in/marciaadler/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="linkedIn"
                  style={styles.icon}
                  className="icon"
                  id="linkedin"
                  src="data:image/png;base64,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"
                />
              </a>
              <a
                style={styles.link}
                href="https://github.com/MarciaAdler"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="github"
                  style={styles.icon}
                  className="icon"
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                />
              </a>
              <a
                style={styles.link}
                className="link"
                href="mailto:marciaadler718@gmail.com"
              >
                <img
                  alt="email"
                  style={styles.icon}
                  className="icon"
                  src="https://thumbs.dreamstime.com/b/email-icon-isolated-white-background-open-envelope-pictogram-line-mail-symbol-website-design-app-ui-vector-illustration-106510001.jpg"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
