import React, {useState, useEffect} from "react";
import axios from "axios";

import Promise from "../../Promise";
import Offer from "../../Offer";
const quality = require("../../../assets/quality.png").default;
const warranty = require("../../../assets/warranty.png").default;
const hassle = require("../../../assets/hassle.png").default;
const time = require("../../../assets/time.png").default;
const im = require("../../../assets/1.jpg").default;
const renovation = require("../../../assets/renovation.jpg").default;
const construction = require("../../../assets/construction.jpg").default;
const interior = require("../../../assets/interior.jpeg").default;

const LandingPage = () => {
  const [home, setHome] = useState("")
  useEffect(()=>{
          axios.get('http://localhost:3001/home').then(function (response) {
            setHome(response.data )
          })
        }, [])
  return (
    <div className="w-100" style={{ padding: 0, margin: 0 }}>
      <div className="w-100" style={styles.bg}>
        <div className="d-flex justify-content-center w-100">
          <p style={styles.p}>

            
            Top-Grade Construction, Renovation Interiors & Painting 100% hassle
            free and managed by us!
            {home}
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center row bg-light">
        <h4
          style={{
            textAlign: "center",
            width: 200,
            padding: 10,
            marginTop: 20,
          }}
          className="border-bottom"
        >
          Our Promise
        </h4>

        <p style={{ textAlign: "center", marginTop: 20, color: "#999999" }}>
          Your dream home project is our responsibility. Right from plan
          approval to handover, we will manage and execute your entire project.
        </p>
        <div className="row justify-content-center">
          <Promise
            icon={quality}
            title="Highest Quality Standard"
            content="Our main focus is customer satisfaction. To achieve that, our team of
        architects, project engineers, quality control engineers and skilled
        contractors ensure highest quality standards. Along with this, we also
        ensure the use of branded materials for the project."
          />
          <Promise
            icon={warranty}
            title="Warranty"
            content="We provide a 10 year warranty on structure and on underground sump and a 1 year warranty on seepage on all construction services and 6 months general warranty on other services in plumbing, electrical or carpentry."
          />
          <Promise
            icon={hassle}
            title="Hassle-Free Experience"
            content="Once the deal is sealed, every step from plan approval to handover will be our responsibility, managed 100% by our qualified team. Our tech capabilities does wonders in taking a customer’s doubts and stress away from the entire process. No more hassle of dealing with contractors and worry of execution issues."
          />
          <Promise
            icon={time}
            title="On-Time Completion"
            content="We provide a master schedule and monthly schedules, and commit to completing projects on time. To ensure clients are aware of the progress, weekly reports are consistently shared. We also follow a penalty policy in case of any delay."
          />
        </div>
      </div>
      <div className="d-flex justify-content-center row">
        <h4
          style={{
            textAlign: "center",
            width: 200,
            padding: 10,
            marginTop: 20,
          }}
          className="border-bottom"
        >
          What we offer
        </h4>
        <div className="row justify-content-center m-5">
          <Offer
            height={520}
            width={520}
            icon={construction}
            title="Construction"
            link="/construction"
          />
          <Offer
            height={520}
            width={520}
            icon={renovation}
            title="Renovation"
            link="/renovation"
          />
          <Offer
            height={520}
            width={520}
            icon={interior}
            title="Interior Design"
            link="/interior-design"
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  bg: {
    backgroundImage: `url(${im})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100vw",
    height: "80vh",
    textAlign: "center",
  },
  p: {
    fontSize: 25,
    marginTop: "15%",
    textAlign: "center",
    fontWeight: "bold",
    maxWidth: 700,
  },
};
export default LandingPage;
