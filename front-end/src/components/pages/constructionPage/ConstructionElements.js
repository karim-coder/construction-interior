import React, { useState, Component } from "react";
import styled from "styled-components";

import Button, { Btn } from "../../Button";
import Color from "../../../constants/Color";

import "./style.css";
export const Div = styled.div`
  text-align: center;
  margin-top: 40px;

  @media screen and (max-width: 810px) {
    margin-top: 250px;
  }
`;

export class ConstCostEstimator extends React.Component {
  constructor() {
    super();
    this.state = {
      isChecked: true,
    };
    this.state = {
      size: "Plot Size",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };
  handleChange(event) {
    this.setState({
      size: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    alert(`You chose the ${this.state.size} pizza.`);
  }

  render() {
    return (
      <>
        <div
          className="border row"
          style={{
            marginTop: 50,
            backgroundColor: "#F8F8F6",
            width: 400,
            borderRadius: 5,
            textAlign: "center",
            justifyContent: "center",
            // color: Color.primary,
          }}
        >
          <h4 style={{ marginTop: 15 }}>Construction Cost Estimator</h4>
          <div
            style={{
              justifyContent: "flex-start",
              textAlign: "start",
              width: 250,
              paddingTop: 20,
            }}
            onSubmit={this.handleSubmit}
          >
            <input
              checked
              className="form-check-input mt-1"
              type="radio"
              value="Plot Size"
              style={{ marginRight: 15 }}
              checked={this.state.size === "Plot Size"}
              onChange={this.handleChange}
            />
            <label>Plot Size</label>

            <input
              className="form-check-input mt-1"
              type="radio"
              value="Site Area"
              style={{ margin: 20 }}
              checked={this.state.size === "Site Area"}
              onChange={this.handleChange}
            />
            <label>Site Area</label>

            <br />
            <div
              className="block row"
              style={{ justifyContent: "start", textAlign: "start" }}
            >
              {this.state.size === "Plot Size" && (
                <select
                  style={{
                    width: 210,
                    height: 30,
                    marginLeft: 15,
                    paddingLeft: 5,
                    marginRight: 5,
                  }}
                >
                  <option selected>Select</option>
                  <option value="1">30 X 40</option>
                  <option value="2">30 X 50</option>
                  <option value="3">40 X 60</option>
                </select>
              )}
              {this.state.size === "Site Area" && (
                <label style={{ position: "relative" }}>
                  Plot Size
                  <input
                    type="number"
                    min="1"
                    style={{
                      width: 110,
                      marginLeft: 15,
                      paddingLeft: 5,
                      marginRight: 5,
                    }}
                  />
                  <span style={{ position: "absolute", top: 1 }}>Sqft</span>
                </label>
              )}

              <div className="block">
                <label style={{ margin: 5 }}>Floor</label>
                <select
                  type="text"
                  style={{
                    width: 155,
                    marginLeft: 10,
                    marginTop: 20,
                    height: 30,
                  }}
                >
                  <option disabled>Select</option>
                  <option value="1">Ground</option>
                  <option value="2">Ground + 1</option>
                  <option value="3">Ground + 2</option>
                  <option value="3">Ground + 3</option>
                </select>
              </div>
              <div>
                <input
                  style={{ margin: 5 }}
                  type="checkbox"
                  defaultChecked={this.state.isChecked}
                  onChange={this.toggleChange}
                />
                <label style={{ margin: 5 }}>Car Parking</label>
                {console.log(this.state.isChecked)}
                {this.state.isChecked && (
                  <select
                    style={{
                      width: 80,
                      marginLeft: 10,
                      height: 30,
                      marginTop: 10,
                    }}
                  >
                    <option selected value="1">
                      1
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                )}
              </div>
            </div>
          </div>
          {/* <Button text="Estimate" color={Color.primary} type={true} /> */}
          <Btn>Estimator</Btn>
        </div>
        <div
          className="row"
          style={{
            justifyContent: "center",
            marginTop: 60,
            backgroundColor: "#F8F8F6",
          }}
        >
          <CostEstimate />
          <CostEstimate />
          <CostEstimate />
          <CostEstimate />
        </div>
      </>
    );
  }
}

const CostEstimate = () => {
  return (
    <div style={{ width: 400, margin: 10, borderRadius: 5, marginTop: 30 }}>
      <div style={{ backgroundColor: "red", borderRadius: 5 }}>
        <p>Standard</p>
        <p>1700/ Sqft</p>
      </div>
    </div>
  );
};

// export const ConstCostEstimator = () => {
//   const [inputType, setInputType] = useState("Plot Size");

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     console.log(value);
//     setInputType(value);
//   };
//   const handleSubmit = (event) => {
//     console.log(inputType);
//     event.preventDefault();
//   };
// return (
//   <div
//     className="border"
//     style={{
//       marginTop: 50,
//       backgroundColor: "#F8F8F6",
//       width: 450,
//       borderRadius: 5,
//     }}
//   >
//     <h4 style={{ marginTop: 15 }}>Construction Cost Estimator</h4>
//     <div
//       style={{ justifyContent: "center", textAlign: "center" }}
//       onSubmit={handleSubmit}
//     >
//       <input
//         checked
//         type="radio"
//         name="PlotOrArea"
//         value="Plot Size"
//         style={{ margin: 15 }}
//         onChange={handleChange}
//       />
//       <label>Plot Size</label>

//       <input
//         type="radio"
//         name="PlotOrArea"
//         value="Site Area"
//         style={{ margin: 20 }}
//         onChange={handleChange}
//       />
//       <label>Site Area</label>
//       {console.log(inputType)}
//       <br />
//       <div className="block">
//         {inputType === "Plot Size" && <input />}
//         {inputType === "Site Area" && (
//           <label style={{ position: "relative" }}>
//             Plot Size
//             <input
//               type="number"
//               style={{
//                 width: 110,
//                 marginLeft: 15,
//                 paddingLeft: 5,
//                 marginRight: 5,
//               }}
//             />
//             <span style={{ position: "absolute", top: 1 }}>Sqft</span>
//           </label>
//         )}
//       </div>
//     </div>
//   </div>
// );
// };
