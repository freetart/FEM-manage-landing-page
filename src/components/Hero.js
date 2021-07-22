import styled from 'styled-components';
import {
  maxWidthLg,
  sectionSpacingLg,
  sectionSpacingMd,
  headingStyles,
  textStyles,
} from '../abstracts/Mixins';
import heroImg from '../images/illustration-intro.svg';
import Button from './styledElements/Button';
import Responsive from '../abstracts/Responsive';

const BgPatternHero = styled.div`
  clip-path: circle(50% at 100% 0);
  background-color: var(--brightRed);
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.1;
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingLg}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  overflow-x: hidden;

  ${Responsive.md`
    grid-template-columns: 1fr; 
    ${sectionSpacingMd}
  `}

  .hero-info {
    ${Responsive.md`
      margin-bottom: 2rem; 
    `}
  }

  .hero-heading {
    ${headingStyles}
    font-size: 6rem;
    color: var(--darkBlue);
  }

  .hero-lead {
    ${textStyles}
    font-size: var(--xs);
    color: var(--darkGrayishBlue);
    padding: 2rem 0;
  }
`;
const Hero = () => {
  return (
    <header>
      <BgPatternHero />
      <Container>
        <div className='hero-info'>
          <h1 className='hero-heading' data-aos='fade-up'>
            Bring everyone together to build better products.
          </h1>
          <p className='hero-lead' data-aos='fade-up' data-aos-delay='100'>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Button primary data-aos='fade-up' data-aos-delay='200'>
            Get Started
          </Button>
        </div>
        <img
          src={heroImg}
          alt='illustration of charts'
          className='hero-img'
          data-aos='fade-left'
        />
      </Container>
    </header>
  );
};

export default Hero;
