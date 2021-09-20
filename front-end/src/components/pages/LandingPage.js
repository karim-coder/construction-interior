import React from "react";

import image from "../../assets/1.jpg";

const LandingPage = () => {
  return (
    <>
      <div style={styles.bg}>
        <div class="d-flex justify-content-center">
          <p style={styles.p}>
            Top-Grade Construction, Renovation Interiors & Painting 100% hassle
            free and managed by us!
          </p>
        </div>
      </div>
      <div></div>
    </>
  );
};

const styles = {
  bg: {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    textAlign: "center",
    position: "absolute",
  },
  p: {
    fontSize: 25,
    marginTop: "15%",
    textAlign: "center",
    maxWidth: 700,
  },
};
export default LandingPage;
