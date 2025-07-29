import React, { Component } from "react";
import PortfolioItems from "../components/PortfolioItems";
import portfolioitems from "../portfolioitems.json";
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
    portfolioitems,
  };

  render() {
    return (
      <div className="container mb-5" style={styles.container}>
        <hr />
        <h1 style={styles.title}>Portfolio</h1>
        <p style={styles.title}>
          Below are samples of some of my projects I have built myself, from idea to MVP. While most of my professional work has been in the B2B and B2B2C SaaS space, these products are more focused on my personal interests or areas where I saw an opportunity and had an idea to solve it. 
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
