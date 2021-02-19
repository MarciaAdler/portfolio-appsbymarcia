import React from "react";
import "./NavTabsstyle.css";
const styles = {
  images: {
    height: "60px",
    width: "auto",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    maxWidth: "100%",
  },
  background: {
    opacity: "90%",
    backgroundImage: "url(../images/blue-snow.png)",
  },
  content: {
    color: "black",
    height: "170px",
  },
  cardheader: {
    borderBottom: "0",
    padding: "0",
    textAlign: "center",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "60px",
  },
  card: {
    height: "300px",
    width: "365px",
    backgroundColor: "#FFFBFC",
    borderRadius: "30px",
    overflow: "hidden",
  },
  tech: {
    fontSize: "10px",
  },
  desc: {
    fontSize: "12px",
  },
  footer: {
    backgroundColor: "#f1f1f6",
  },
  link: {
    // display: "inline-block",
    // marginRight: "15px",
    // fontSize: "13px",
    // // backgroundColor: "#406e8e",
    // borderRadius: ".2em",
    // paddingLeft: "10px",
    // paddingRight: "10px",
    // paddingTop: "3px",
    // paddingBottom: "3px",
    // color: "#161925",
  },
};
function PortfolioItems(props) {
  return (
    <div className="col-12 col-md-5 col-lg-4 d-flex justify-content-top align-items-center">
      <div className="card bg-transparent border-dark mb-3" style={styles.card}>
        <div
          className="card-header bg-transparent py-0 px-0"
          style={
            (styles.cardheader,
            {
              backgroundImage: `url(${props.titleimage})`,
              backgroundSize: "1000%",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
              textAlign: "center",
            })
          }
        >
          <img style={styles.images} alt={props.name} src={props.titleimage} />
        </div>

        <div className="content card-body pt-1 pb-1" style={styles.background}>
          <div style={styles.content}>
            <h6 className="text-center mt-1">
              <strong>{props.name}</strong>
            </h6>
            <p style={styles.desc}>{props.shortdescription}</p>
            <p style={styles.tech}>
              <i>Technologies used: {props.technologies}</i>
            </p>
          </div>
        </div>
        <div
          className="card-footer d-flex justify-content-center"
          style={styles.footer}
        >
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            className="portfolio-link"
          >
            <strong> View App </strong>{" "}
          </a>

          <a
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
            className="portfolio-link"
          >
            {" "}
            <strong> View Repo</strong>
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItems;
