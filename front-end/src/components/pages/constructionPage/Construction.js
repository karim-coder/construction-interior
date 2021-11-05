import React from "react";
import styled from "styled-components";
import Header from "../../Header";

import Package from "../../Package";
import "./style.css";
const cnst_bg = require("../../../assets/cnst_bg7.jpeg").default;

const Div = styled.div`
  text-align: center;
  margin-top: 40px;

  @media screen and (max-width: 810px) {
    margin-top: 250px;
  }
`;

const Construction = () => {
  return (
    <div className="row justify-content-center w-100" style={{ margin: 0 }}>
      <Header
        title="We build quality Homes"
        text="100% Hassle-free and managed by us!"
        bg={cnst_bg}
      />
      <Div>
        <h1>Our Packages</h1>
        <div className="row justify-content-center">
          <Package
            title="STANDARD"
            area="1700/Sqft"
            text1="Structure – branded and high quality cement, steel, concrete, bricks"
            text2="Bare shell – W/O Interiors"
            color="red"
          />
          <Package
            title="PREMIUM"
            area="2300/Sqft"
            text1="Structure – branded and high quality cement, steel, concrete, bricks"
            text2="With Interior"
            color="blue"
          />
          <Package
            title="SUPER PREMIUM"
            area="2500/Sqft"
            text1="Structure – branded and high quality cement, steel, concrete, bricks"
            text2="With Interior"
            color="green"
          />
          <Package
            title="LUXURY"
            area="2700/Sqft"
            text1="Structure – branded and high quality cement, steel, concrete, bricks"
            text2="With Interior"
            color="purple"
          />
        </div>
      </Div>
    </div>
  );
};

export default Construction;

// echo "# construction" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/karim-coder/construction.git
// git push -u origin main
