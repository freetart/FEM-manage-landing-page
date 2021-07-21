import styled from 'styled-components';
import {
  headingStyles,
  maxWidthLg,
  sectionSpacingSm,
} from '../abstracts/Mixins';
import Button from './styledElements/Button';

const BgPatternBannerTop = styled.div`
  clip-path: circle(20.9% at 98% 22%);
  background-color: var(--white);
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.1;
`;

const BgPatternBannerBottom = styled.div`
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% 75%,
    75% 75%,
    75% 100%,
    50% 75%,
    0% 75%
  );
  background-color: var(--white);
  height: 80%;
  width: 10%;
  position: absolute;
  opacity: 0.1;
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

const Banner = () => {
  return (
    <section
      style={{ backgroundColor: 'var(--brightRed)', position: 'relative' }}
    >
      <BgPatternBannerTop />
      <Container>
        <h2 className='banner-heading'>
          Simplify how your team <br /> works today.
        </h2>
        <Button secondary>Get Started</Button>
        <BgPatternBannerBottom />
      </Container>
    </section>
  );
};

export default Banner;
