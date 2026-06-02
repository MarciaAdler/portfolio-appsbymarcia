import React, { Component } from "react";
import PortfolioItems from "../components/PortfolioItems";
import PortfolioItemsai from "../components/PortfolioItemsai";
import portfolioitems from "../portfolioitems.json";
import portfolioitemsai from "../aiportfolioitems.json";
import "../components/NavTabsstyle.css";
const styles = {
  container: {
    marginBottom: "50px",
    paddingBottom: "30px",
    color: "white",
    marginTop: "35px",
  },
  title: {
    textAlign: "center",
    fontColor: "white",
  },
};
class Portfolio extends Component {
  state = {
    portfolioitems, portfolioitemsai 
  };

  render() {
    return (
      <div className="container mb-5" style={styles.container}>
        <hr />
        <h1 style={styles.title}>Portfolio</h1>
        <h2 style={styles.title}>AI Products and Projects</h2>
        <p style={styles.title}>
       Here are products/projects I built using AI tools (ex: Claude Code and Lovable).
        </p>
        <hr />
        <div className="row justify-content-center">
          {this.state.portfolioitemsai.map((item) => (
            <PortfolioItemsai
              key={item.id}
              name={item.name}
              image={item.image}
              titleimage={item.titleimage}
              link={item.link}
              github={item.github}
              shortdescription={item.shortdescription}
              technologies={item.technologies}
              skills={item.skills}
            />
          ))}
        </div>
        <hr />
        <h2 style={styles.title}> Full Stack Products and Projects</h2>
        <p style={styles.title}>
          The following are projects I built, from idea to MVP. While most of my professional work has been in the B2B and B2B2C SaaS space, these products are more focused on my personal interests or areas where I saw an opportunity and had an idea to solve it. 
          Please feel free to reach out with any questions or should you see something that peeks your
          interest.
        </p>
        <hr />
        <div className="row justify-content-center">
          {this.state.portfolioitems.map((item) => (
            <PortfolioItems
              key={item.id}
              name={item.name}
              image={item.image}
              titleimage={item.titleimage}
              link={item.link}
              github={item.github}
              shortdescription={item.shortdescription}
              technologies={item.technologies}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Portfolio;
