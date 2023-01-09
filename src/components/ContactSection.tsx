import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <>
      <div className="contact-section">
        <h1 data-aos="zoom-in">Make your project our next obsession</h1>
        <p className="subtitle-text" data-aos="fade-down" data-aos-delay="500">
          We can't wait to talk about your ideas, goals, needs and dreams. Let's
          set up a call.
        </p>

        <div className="call-to-action">
          <Link to="/contact" className="contact">
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
