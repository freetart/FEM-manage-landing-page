import styled from 'styled-components';
import {
  headingStyles,
  maxWidthLg,
  sectionSpacingSm,
} from '../abstracts/Mixins';
import Button from './styledElements/Button';
import bgPattern from '../images/bg-simplify-section-desktop.svg';

const Banner = styled.section`
  background-color: var(--brightRed);
  position: relative;
  overflow: hidden;

  .banner-pattern {
    position: absolute;
    pointer-events: none;
  }
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  .banner-heading {
    ${headingStyles}
    color: var(--white);
    font-size: var(--xxl);
  }
`;

const Cta = () => {
  return (
    <Banner>
      <img src={bgPattern} alt='' class='banner-pattern' />
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
