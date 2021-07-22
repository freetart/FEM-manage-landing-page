import styled from 'styled-components';
import {
  headingStyles,
  maxWidthLg,
  sectionSpacingSm,
} from '../abstracts/Mixins';
import Button from './styledElements/Button';
import bgPatternDesktop from '../images/bg-simplify-section-desktop.svg';
import bgPatternMobile from '../images/bg-simplify-section-mobile.svg';
import Responsive from '../abstracts/Responsive';

const Banner = styled.section`
  background-color: var(--brightRed);
  position: relative;
  overflow: hidden;

  .banner-pattern-desktop {
    position: absolute;
    pointer-events: none;

    ${Responsive.lg`
      display: none; 
    `}
  }

  .banner-pattern-mobile {
    position: absolute;
    pointer-events: none;
    display: none;

    ${Responsive.lg`
      display: block; 
    `}
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  flex-wrap: wrap;

  .banner-heading {
    ${headingStyles}
    color: var(--white);
    font-size: var(--xxl);

    ${Responsive.md`
      margin-bottom: 2rem; 
    `}
  }
`;

const Cta = () => {
  return (
    <Banner>
      <img src={bgPatternDesktop} alt='' className='banner-pattern-desktop' />
      <img src={bgPatternMobile} alt='' className='banner-pattern-mobile' />
      <Container>
        <h2 className='banner-heading'>
          Simplify how your team <br /> works today.
        </h2>
        <Button secondary>Get Started</Button>
      </Container>
    </Banner>
  );
};

export default Cta;
