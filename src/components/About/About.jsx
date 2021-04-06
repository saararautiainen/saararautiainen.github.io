import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';
import CV from '../../images/saara_rautiainen_CV.pdf';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, paragraphThree, resume, webskills, uxskills, tools } = about;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              {/* <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div> */}
              <div className="about-wrapper__info" id="skills-wrapper">
                <h3 className="about-wrapper__info-title">
                  <span role="img" aria-label="laptop" style={{ fontSize: '20px' }}>
                    👩‍💻
                  </span>{' '}
                  Web Skills
                </h3>
                <p className="about-wrapper__info-text">{webskills || ''}</p>
                <h3 className="about-wrapper__info-title">
                  <span role="img" aria-label="notebook" style={{ fontSize: '20px' }}>
                    📔
                  </span>
                  UX Skills
                </h3>
                <p className="about-wrapper__info-text">{uxskills || ''}</p>
                <h3 className="about-wrapper__info-title">
                  <span role="img" aria-label="gear" style={{ fontSize: '20px' }}>
                    ⚙️
                  </span>
                  Tools
                </h3>
                <p className="about-wrapper__info-text">{tools || ''}</p>
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne || ''}</p>
                <p className="about-wrapper__info-text">{paragraphTwo || ''}</p>
                <p className="about-wrapper__info-text">{paragraphThree || ''}</p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a className="cta-btn cta-btn--resume" href={CV} download>
                      Download my resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
