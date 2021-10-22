import React from "react";
const styles = {
  footer: {
    backgroundColor: "#8ea8c3",
    height: "50px",
    clear: "both",
    width: "100%",
    bottom: "0",
    paddingTop: "15px",
    // opacity: "55%",
    textAlign: "center",
    paddingBottom: "10px",
  },
};
function Footer() {
  return <footer style={styles.footer}>&copy; Marcia Adler 2020</footer>;
}

export default Footer;
