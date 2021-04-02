import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const ProjectHero = (props) => {
  const { project } = props;
  const { title, keywords, contributors } = project;

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
    <section id="project-hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="project-hero-title">
            {title}
            <br />
          </h1>
          <p className="contributors">By {contributors}</p>
          <div className="hero-keywords">
            <p> {keywords}</p>
          </div>
        </Fade>
        <Container />
      </Container>
    </section>
  );
};

ProjectHero.propTypes = {
  project: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ProjectHero;
