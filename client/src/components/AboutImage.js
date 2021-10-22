import React from "react";
import me from "../images/me3.jpeg";

const styles = {
  container: {},
  image: {
    height: "200px",
    marginRight: "0px",
    borderRadius: "50%",
    marginBottom: "20px",
    margin: "50px 0px",
  },
};

function AboutImage() {
  return (
    <div className="about-image text-center">
      <img style={styles.image} src={me} alt="Marcia" />
    </div>
  );
}

export default AboutImage;
