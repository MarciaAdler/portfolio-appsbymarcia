import React from "react";
import me from "../images/me5.jpeg";

const styles = {
  container: {},
  image: {
    height: "200px",
    width: "200px",
    marginRight: "0px",
    borderRadius: "50%",
    marginBottom: "20px",
    margin: "20px 0px",
  },
  title: {
    color: "white",
    fontSize: "30px",
  }
};

function AboutImage() {
  return (
    <div>
      <div className="about-image text-center">
        <img style={styles.image} src={me} alt="Marcia" />
      </div>
      <div className="title text-center" style={styles.title}>
     
        Strategic Product Leader
      
    
      </div>
    </div>
  );
}

export default AboutImage;
