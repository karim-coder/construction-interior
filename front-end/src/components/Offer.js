import React from "react";
import styled from "styled-components";

const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.color});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.6s;
  border-radius: 10px;
  // border: 10px solid green;
  transform: scale(1.05);

  &:hover {
    transform: scale(1.2);
    filter: brightness(65%);
  }
`;
const Item = styled.a`
  max-width: 520px;
  height: 520px;
  margin: 20px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border-radius: 20px;
  box-shadow: 0 70px 40px -20px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 550px) {
    width: 450px;
    height: 450px;
  }
`;

const Text = styled.div`
  color: #ffffff;
  text-shadow: 3px 3px 3px #ea4492;
  font-size: 40px;
  font-weight: bold;
  position: absolute;
  bottom: 0;
  padding: 40px;
  text-decoration: none;
`;

const Offer = (props) => {
  return (
    // <a
    //   className="zoom"
    //   href={props.link}
    //   style={{
    //     backgroundImage: `url(${props.icon})`,
    //     width: 550,
    //     height: 550,
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     margin: 20,
    //     cursor: "pointer",
    //     textDecoration: "none",
    //   }}
    // >
    //   <h3
    //     style={{
    //       fontSize: 30,
    //       fontWeight: "bold",
    //       color: "white",
    //       marginTop: 450,
    //       textShadow: "2px 2px #000",
    //     }}
    //   >
    //     {props.title}
    //   </h3>
    // </a>
    <Item color={props.icon} href={props.link}>
      <Image color={props.icon} />
      <Text>{props.title}</Text>
    </Item>
  );
};

const styles = {
  image: {},
};

export default Offer;
