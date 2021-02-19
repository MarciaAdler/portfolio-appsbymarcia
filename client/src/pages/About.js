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
  },
  p1: {
    textAlign: "left",
    color: "white",
  },
  p: {
    textAlign: "center",
    color: "white",
  },
  title: {
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
            <p style={styles.p1}>
              I am a Product Manager / Software Engineer / Strategy Consultant
              professional with a Bachelor’s in Business and Technology, an MBA
              with focuses in finance and human capital, a background in
              consulting and a certificate for Full Stack Web Development from
              Columbia University. <br />
              <br /> I have experience working successfully in teams on large
              agile projects to build products and applications to help clients
              achieve their business goals. I have completed collecting,
              analyzing, and translating research and data into detailed product
              requirements, by leading customer interviews and user workshops. I
              managed backlog refinement and action items to ensure timely
              completion of open items. I like to solve problems and find better
              ways to do things through the use of data (qualitative and
              quantitative).
              <br />
              <br /> My experience in consulting and skills from my Full Stack
              Web Development Certificate set me up well to work with teams to
              not only plan and develop but also build new products and
              applications to help people have a better experience.
            </p>
          </section>
        </div>
      </div>
      <section className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h6 style={styles.title}>
              <strong>Technology experience</strong>&nbsp;
            </h6>
            <p style={styles.p}>
              HTML &bull; CSS &bull; JavaScript &bull; jQuery &bull; MySQL
              &bull; MongoDB &bull; React &bull; Express &bull; Node JS &bull;
              Bootstrap &bull; SQL &bull; Sequelize
            </p>
          </div>

          <div className="col-12 col-md-6">
            <h6 style={styles.title}>
              <strong>Software experience</strong>&nbsp;
            </h6>
            <p style={styles.p}>
              Word &bull; Excel &bull; PowerPoint &bull; Access &bull; MySQL
              Workbench &bull; Asana &bull; PeopleSoft &bull; GitHub &bull;
              SharePoint &bull; Miro &bull; Lucid Chart
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h5 style={styles.title}>
              <strong>Contact Me</strong>
            </h5>
            <p style={styles.p}>
              I'm open to many different opportunities, including opportunities
              to collaborate with others on projects. Please reach out to me
              through any of the links below.
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
