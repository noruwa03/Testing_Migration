import ServiceIcon from "../assets/icons/service-icon.svg";

const ServiceSection = () => {
  return (
    <>
      <div className="service-section">
        <div className="container-lg">
          <h2>Services</h2>
          <div className="anchor-link">View services Ecolabz offers</div>
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-lg-5" data-aos="fade-up">
              <div className="services">
                <div className="content">
                  <h5>UI/UX design</h5>
                  <p>
                    Our designers bring world class expertise to the table.
                    Making a bold statement from ideation to finished designs.
                  </p>
                </div>
              </div>
              <div className="divider"></div>
              <div className="services">
                <div className="content">
                  <h5>Web development</h5>
                  <p>
                    Our dedicated development team builds world class products
                    and can improve existing tecnologies.
                  </p>
                </div>
              </div>
              <div className="divider"></div>
              <div className="services">
                <div className="content">
                  <h5>Data analysis</h5>
                  <p>
                    Our AI powered systems offers instant analysis of hundreds
                    of data, making meaning of them and helping you draw
                    valuable deductions.
                  </p>
                </div>
              </div>
              <div className="divider"></div>
              <div className="services">
                <div className="content">
                  <h5>Branding</h5>
                  <p>
                    We create custom SaaS solutions that are market ready,
                    comprehensive, and customer friendly for increased business
                    productivity.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 text-sm-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img src={ServiceIcon} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
