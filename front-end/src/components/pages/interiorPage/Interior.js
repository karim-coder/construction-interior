import React from "react";
import Header from "../../Header";
import Offer from "../../Offer";
const id_bg = require("../../../assets/id_bg.jpg").default;

const Interior = () => {
  return (
    <div
      className="row justify-content-center w-100"
      style={{ margin: 0, padding: 0, width: "100%" }}
    >
      <Header
        title="Creating excellent spaces"
        text="100% Hassle - Free and managed by us!"
        bg={id_bg}
      />
      <h4
        style={{
          textAlign: "center",
          width: 200,
          padding: 10,
          marginTop: 20,
        }}
        className="border-bottom"
      >
        Themes
      </h4>
      <div className="row justify-content-center">
        <Offer
          height={200}
          width={450}
          icon="https://www.smalldesignideas.com/wp-content/uploads/2015/04/5.jpg"
          title="Classic"
          link="/interior-design/gallery"
          // onClick={}
        />
        <Offer
          height={200}
          width={450}
          icon="https://www.smalldesignideas.com/wp-content/uploads/2015/04/5.jpg"
          title="Classic"
          // link="/interior-design"
        />
        <Offer
          height={200}
          width={450}
          icon="https://www.smalldesignideas.com/wp-content/uploads/2015/04/5.jpg"
          title="Classic"
          // link="/interior-design"
        />
        <Offer
          height={200}
          width={450}
          icon="https://www.smalldesignideas.com/wp-content/uploads/2015/04/5.jpg"
          title="Classic"
          // link="/interior-design"
        />
        <Offer
          height={200}
          width={450}
          icon="https://www.smalldesignideas.com/wp-content/uploads/2015/04/5.jpg"
          title="Classic"
          // link="/interior-design"
        />
      </div>
    </div>
  );
};

export default Interior;
