import React from "react";

import "./style.css";
const cnst_bg = require("../../../assets/cnst_bg6.jpg").default;
const Construction = () => {
  return (
    <div className="justify-content-center row">
      {/* <div
        className=""
        style={{
          position: "absolute",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontWeight: "bold",
          flex: 1,
          marginTop: "10%",
        }}
      >
        <div className="col">
          <div className="col">
            <p className="row" style={{ fontSize: 40 }}>
              We build quality Homes
            </p>

            <p className="row" style={{ fontSize: 30 }}>
              100% Hassle-Free and Managed by us!
            </p>
          </div>
        </div>
        
      </div> */}
      <img src={cnst_bg} style={styles.image} />
      <div
        className=""
        style={{
          position: "absolute",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          flex: 1,
          marginTop: "10%",
        }}
      >
        <div style={{ justifyContent: "space-around", display: "flex" }}>
          <div>
            <p style={{ fontSize: 45, fontWeight: "bold" }}>
              We build quality Homes
            </p>
            <p style={{ fontSize: 25 }}>100% Hassle-Free and managed by us!</p>
          </div>
          <div
            className="border"
            style={{ height: 500, width: 400, backgroundColor: "white" }}
          >
            <input></input>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  p: {
    fontSize: 25,
    marginTop: "15%",
    textAlign: "center",
    maxWidth: 700,
  },
  image: {
    width: "100%",
    // height: "10",
    // opacity: "0.5",
  },
};
export default Construction;
