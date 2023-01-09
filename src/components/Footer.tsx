// import { Link, NavLink } from "react-router-dom";
import FooterLogo from "../assets/icons/footer-logo.svg";
import Instagram from "../assets/icons/instagram.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import Twitter from "../assets/icons/twitter.svg";
import LocationInfo from "../assets/icons/location.svg";
import Email from "../assets/icons/email.svg";
import Phone from "../assets/icons/phone.svg";

const Footer = () => {
  const date = new Date().getFullYear();

  // const jobUrl = "https://jobs.ecolabz.io";

  const instagramLink = "https://instagram.com/ecolabz";
  const twitterLink = "https://twitter.com/ecolabz";
  const linkedIn = "https://linkedin.com/company/ecolabz-io";

  return (
    <>
      <footer>
        <div className="container-lg">
          <div className="row align-items-center justify-content-between ">
            <div className="col-lg-5  col-sm-5 col-12">
              <div className="row align-items-center justify-content-between">
                <div className="col-12">
                  <div className="brand-name">
                    <img src={FooterLogo} alt="Footer logo" />
                  </div>
                </div>
                <div className="col-12 about my-3">
                  <div className="newsletter-section">
                    <div className="row-item">
                      <h5>Signup for our newsletter</h5>
                      <div className="input-box">
                        <div className="custom-newsletter">
                          <input
                            type="text"
                            className="custom-input"
                            placeholder="Enter your email..."
                          />
                          <button className="custom-button" type="submit">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-2 mb-5">
                  <a
                    className="me-4"
                    href={instagramLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Instagram} alt="Instagram" />
                  </a>
                  <a
                    className="me-4"
                    href={linkedIn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={LinkedIn} alt="LinkedIn" />
                  </a>
                  <a href={twitterLink} target="_blank" rel="noreferrer">
                    <img src={Twitter} alt="Twitter" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-sm-5 col-12">
              <div
                className="
              row
              align-items-start
              justify-content-sm-between justify-content-between
            "
              >
                <div className="contact-detail">
                  <img src={LocationInfo} alt="Location information icon" />
                  <div className="column">
                    <p> Head Office: JVB, Fumba Uptown, Zanzibar</p>
                    <p>
                      Nigeria Office: 3 Bethsider Close, Independence Layout
                      Enugu
                    </p>
                  </div>
                </div>
                <div className="contact-email-phone">
                  <img src={Email} alt="Email icon" />
                  <span>
                    Email:{" "}
                    <a href="mailto:contact@ecolabz.io">contact@ecolabz.io</a>
                  </span>
                </div>
                <div className="contact-email-phone">
                  <img src={Phone} alt="Phone icon" />
                  <span>
                    Phone: <a href="tel:+255 776 547 142">+255 776 547 142</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="all-rights-reserved">
          <p>
            &copy; {date} <span>eco</span>labz . All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
