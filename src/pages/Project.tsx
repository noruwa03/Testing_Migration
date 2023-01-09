import ProjectOne from "../assets/images/project-one.png";
import ProjectTwo from "../assets/images/project-two.png";
import ContactSection from "../components/ContactSection";

const Project = () => {
  return (
    <>
      <div className="project-section mt-5">
        <div className="our-projects">Our projects</div>
        <h2>
          <div className="box">
            A collection of our favorite projects and the impact they've made.
          </div>
        </h2>

        <div className="project-container">
          <div className="row-item">
            <div className="project" data-aos="zoom-out">
              <img src={ProjectOne} alt="" />
              <div className="content">
                <h5>Ecojobz</h5>
                <p>
                  We develop products from the idea stage using scalable and
                  dynamic systems to meet up to ever changing trends.
                </p>
                <div className="process">Design • Development • Branding</div>
              </div>
            </div>
            <div className="project" data-aos="zoom-out" data-aos-delay="600">
              <img src={ProjectTwo} alt="" />
              <div className="content">
                <h5>Haraka shop</h5>
                <p>
                  We develop products from the idea stage using scalable and
                  dynamic systems to meet up to ever changing trends.
                </p>
                <div className="process">Design • Development • Branding</div>
              </div>
            </div>
          </div>

          {/* <div className="divider"></div> */}
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default Project;
