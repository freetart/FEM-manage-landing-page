import styled from 'styled-components';
import {
  maxWidthLg,
  sectionSpacingLg,
  headingStyles,
  textStyles,
} from '../abstracts/Mixins';
import heroImg from '../images/illustration-intro.svg';
import Button from './styledElements/Button';

const BgPattern = styled.div`
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
      <BgPattern></BgPattern>
      <Container>
        <div className='hero-info'>
          <h1 className='hero-heading'>
            Bring everyone together to build better products.
          </h1>
          <p className='hero-lead'>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Button primary>Get Started</Button>
        </div>
        <img src={heroImg} alt='illustration of charts' className='hero-img' />
      </Container>
    </header>
  );
};

export default Hero;
