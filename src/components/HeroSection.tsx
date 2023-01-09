import HeroIconSide from "../assets/icons/hero-icon-side.svg";
import HeroIconSubtract from "../assets/icons/hero-icon-subtract.svg";
import HeroIconStar from "../assets/icons/hero-icon-star.svg";

import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <img
          src={HeroIconSide}
          alt="Hero icon side"
          className="hero-icon-side"
        />
        <img
          src={HeroIconSubtract}
          alt="Hero icon subtract"
          className="hero-icon-subtract"
        />
        <img
          src={HeroIconStar}
          alt="Hero icon start"
          className="hero-icon-star"
        />
        <div className="hero-content">
          <h1>Innovative Designs. Memorable Products. Unforgettable Brands.</h1>
          <p>
            From concept to launch, our team of experts will work with you to
            bring your vision to life and help you stand out in a crowded
            market.
          </p>
          <div className="call-to-action">
            <Link to="/contact" className="contact">
              Contact us
            </Link>
            <Link to="/project" className="view-works">
              View projects
            </Link>
          </div>
        </div>
        <img
          src={HeroIconSubtract}
          alt="Hero icon subtract"
          className="hero-icon-subtract-end"
        />
      </div>
    </>
  );
};

export default HeroSection;
