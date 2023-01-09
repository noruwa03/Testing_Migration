import ProjectOne from "../assets/images/project-one.png";
import ProjectTwo from "../assets/images/project-two.png";

const ProjectSection = () => {
  return (
    <>
      <div className="project-section">
        <h1 data-aos="fade-up">Recent projects that we just launched</h1>
        <p className="subtitle-text" data-aos="fade-down" data-aos-delay="500">
          Here's a small selection of the most recent projects we've launched.
        </p>

        <div className="project-container">
          <div className="row-item">
            <div className="project" data-aos="zoom-in">
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
            <div className="project" data-aos="zoom-in" data-aos-delay="1000">
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

          <div className="divider"></div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
