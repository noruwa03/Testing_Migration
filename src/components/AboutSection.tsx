import React from "react";
import TailorMadeDev from "../assets/icons/tailor-made-dev.svg";
import CrossDeviceComp from "../assets/icons/cross-device-comp.svg";
import Testing from "../assets/icons/cutting-edge-tech.svg";
import SaaSAppDev from "../assets/icons/block-dev.svg";

const AboutSection = () => {
  return (
    <>
      <div className="about-section">
        <h1 data-aos="fade-up">What makes Ecolabz different?</h1>
        <p className="subtitle-text" data-aos="fade-up">
          We are made up of highly trained experts using cutting edge technology
          to validate your ideas, build disruptive products, that achieves your
          business goals.
        </p>

        <div className="container-lg about-ecolabz">
          <div className="row align-items-start justify-content-between py-5">
            <div
              className="col-12 col-sm-6 col-lg-3 content"
              data-aos="zoom-in"
            >
              <img src={TailorMadeDev} alt="" />
              <h5>We're specialized.</h5>
              <p>
                We are made up of highly trained experts using cutting edge
                technology to validate your ideas that achieves your business
                goals.
              </p>
            </div>

            <div
              className="col-12 col-sm-6 col-lg-3 content"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img src={CrossDeviceComp} alt="" />
              <h5>We focus on results.</h5>
              <p>
                We utilize cutting edge solutions in our web design software
                product design, to achieves your business goals.
              </p>
            </div>
            <div
              className="col-12 col-sm-6 col-lg-3 content"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <img src={Testing} alt="" />
              <h5>We focus on results.</h5>
              <p>
                We implement projects end-to-end or augment your existing team
                to complete any work that may be needed.
              </p>
            </div>

            <div
              className="col-12 col-sm-6 col-lg-3 content"
              data-aos="zoom-in"
              data-aos-delay="900"
            >
              <img src={SaaSAppDev} alt="" />
              <h5>We go the extra mile.</h5>
              <p>
                We develop products from the idea stage using scalable and
                dynamic systems to meet up to ever changing trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
