import Founder from "../assets/images/founder.png";
import Twitter from "../assets/icons/card-twitter.svg";
import LinkedIn from "../assets/icons/card-linkedin.svg";
import ContactSection from "../components/ContactSection";

const Team = () => {
  const url = "https://home.com";
  return (
    <>
      <div className="our-team">
        <h1>About us</h1>

        <div className="content">
          <p>
            Ecolabz is a full service digital agency combining creativity with
            technical acumen to help business grow. With heavy emphasis on
            common use cases, we design products to be simple and elegant. We
            work directly with our clients to ensure funtionality is optimized.
          </p>
        </div>

        <h3>This is us</h3>
        <div className="card-container">
          <div className="card">
            <img src={Founder} alt="" />
            <p className="name">Jonathan candella</p>
            <p className="title">Founder</p>
            <div className="socials">
              <a href={url} target="_blank" rel="noreferrer">
                <img src={Twitter} alt="" />
              </a>
              <a href={url} target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt="" />
              </a>
            </div>
          </div>
          <div className="card">
            <img src={Founder} alt="" />
            <p className="name">Jonathan candella</p>
            <p className="title">Founder</p>
            <div className="socials">
              <a href={url} target="_blank" rel="noreferrer">
                <img src={Twitter} alt="" />
              </a>
              <a href={url} target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt="" />
              </a>
            </div>
          </div>
          <div className="card">
            <img src={Founder} alt="" />
            <p className="name">Jonathan candella</p>
            <p className="title">Founder</p>
            <div className="socials">
              <a href={url} target="_blank" rel="noreferrer">
                <img src={Twitter} alt="" />
              </a>
              <a href={url} target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt="" />
              </a>
            </div>
          </div>


        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default Team;
