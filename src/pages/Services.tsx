import ContactSection from "../components/ContactSection";

const Services = () => {
  return (
    <>
      <div className="services-page mt-5">
        <div className="our-services">Our services</div>
        <h2>
          <div className="box">
            A collection of our favorite projects and the impact they've made.
          </div>
        </h2>
        <div className="box-content">
          <p className="text-lead">
            Your trusted partner in building sustainable products for the
            future. Be it blockchain development, AI, web apps, UI/UX design or
            SaaS. We are on a mission to give your startup a headstart.
          </p>
        </div>
        <div className="divider"></div>

        <h3> What we do everyday</h3>

        <div className="row align-items-start justify-content-between">
          <div className="col-12 col-sm-6 col-lg-3 content" data-aos="fade-up">
            <h5>UI/UX design</h5>
            <p>
              Our designers bring world class expertise to the table. Making a
              bold statement from ideation to finished designs.
            </p>
          </div>

          <div
            className="col-12 col-sm-6 col-lg-3 content"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h5>Web development</h5>
            <p>
              Our dedicated development team builds world class products and can
              improve existing tecnologies.
            </p>
          </div>
          <div
            className="col-12 col-sm-6 col-lg-3 content"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h5>Data science</h5>
            <p>
              Our AI powered systems offers instant analysis of hundreds of
              data, making meaning of them and helping you draw valuable
              deductions.
            </p>
          </div>

          <div
            className="col-12 col-sm-6 col-lg-3 content"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <h5>Branding</h5>
            <p>
              We create custom SaaS solutions that are market ready,
              comprehensive, and customer friendly for increased business
              productivity.
            </p>
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default Services;
