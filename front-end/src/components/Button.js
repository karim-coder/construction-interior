import React from "react";

export const Button = (props) => {
  return (
    <div
      style={{
        cursor: "pointer",
        height: 40,
        width: 130,
        backgroundColor: props.color,
        color: "white",
        textAlign: "center",
        justifyContent: "center",
        fontSize: 18,
        paddingTop: 5,
        borderRadius: 5,
      }}
    >
      {props.text}
    </div>
  );
};
export const LargeButton = (props) => {
  return (
    <div
      onClick={props.onPress}
      style={{
        cursor: "pointer",
        marginTop: 20,
        height: 50,
        width: 250,
        opacity: 0.6,
        backgroundColor: props.type ? props.color : "white",
        color: props.type ? "white" : props.color,
        textAlign: "center",
        justifyContent: "center",
        fontSize: 18,
        paddingTop: 10,
        borderRadius: 5,
        border: `1px solid ${props.color}`,
        fontWeight: props.type && "bold",
      }}
    >
      {props.text}
    </div>
  );
};
export default Button;
