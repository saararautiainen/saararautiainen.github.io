import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import Contact from '../components/Contact/Contact';
import { contactData, footerData } from '../mock/data';
import { PortfolioProvider } from '../context/context';
import ProjectHero from '../components/ProjectPage/ProjectHero';
import ProjectImg from '../components/Image/ProjectImg';

export default function ProjectPage({ pageContext: { project } }) {
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  console.log(project);

  useEffect(() => {
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

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
    <PortfolioProvider value={{ contact, footer }}>
      <Header />
      <ProjectHero project={project} />
      <section id="projectpage">
        <Container>
          <div className="project-wrappers">
            <Row key={project.id}>
              <Col lg={6} sm={12}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <h3 className="project-wrappers__text-title">The Problem</h3>
                  <div className="project-wrappers__text">
                    <div>
                      <p>{project.problem || ''}</p>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col lg={6} sm={12}>
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="project-wrappers__image">
                    <ProjectImg alt={project.title} filename={project.processimgs[0]} />
                  </div>
                </Fade>
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12}>
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="project-wrappers__image">
                    <ProjectImg alt={project.title} filename={project.processimgs[1]} />
                  </div>
                  {project.processimgs[2] && (
                    <div className="project-wrappers__image">
                      <ProjectImg alt={project.title} filename={project.processimgs[2]} />
                    </div>
                  )}
                </Fade>
              </Col>
              <Col lg={6} sm={12}>
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <h3 className="project-wrappers__text-title">The Process</h3>
                  <div className="project-wrappers__text">
                    <p className="mb-4">{project.process || ''}</p>
                  </div>
                </Fade>
              </Col>
            </Row>
            <Row />
            <Row>
              <Col lg={6} sm={12}>
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <h3 className="project-wrappers__text-title">The Solution</h3>
                  <div className="project-wrappers__text">
                    <p className="mb-4">{project.solution || ''}</p>
                  </div>
                </Fade>
              </Col>
              <Col lg={6} sm={12}>
                <Fade
                  right={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={1000}
                  distance="30px"
                >
                  <div className="project-wrappers__image">
                    <ProjectImg alt={project.title} filename={project.solutionimgs[0]} />
                  </div>
                </Fade>
              </Col>
            </Row>
            {project.solutionimgs.length > 0 && (
              <Row>
                <Col lg={6} sm={4}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrappers__image">
                      <ProjectImg alt={project.title} filename={project.solutionimgs[1]} />
                    </div>
                  </Fade>
                </Col>
                <Col lg={6} sm={4}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrappers__image">
                      <ProjectImg alt={project.title} filename={project.solutionimgs[2]} />
                    </div>
                  </Fade>
                </Col>

                <Col lg={6} sm={4}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrappers__image">
                      <ProjectImg alt={project.title} filename={project.solutionimgs[3]} />
                    </div>
                  </Fade>
                </Col>
                <Col lg={6} sm={4}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrappers__image">
                      <ProjectImg alt={project.title} filename={project.solutionimgs[6]} />
                    </div>
                  </Fade>
                </Col>
              </Row>
            )}

            {project.videourl && (
              <Row>
                <Col sm={12} lg={12}>
                  <h1>Video</h1>
                  <ReactPlayer
                    className="react-player"
                    width="100%"
                    height="600px"
                    url={project.videourl}
                  />
                </Col>
              </Row>
            )}
          </div>
        </Container>
      </section>
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

ProjectPage.propTypes = {
  pageContext: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
