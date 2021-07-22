import styled from 'styled-components';
import {
  maxWidthLg,
  headingStyles,
  sectionSpacingMd,
  sectionSpacingSm,
} from '../abstracts/Mixins';
import Carousel from './Carousel';
import Button from './styledElements/Button';
import Responsive from '../abstracts/Responsive';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  text-align: center;
  overflow-x: hidden;

  ${Responsive.md`
    ${sectionSpacingSm} 
  `}

  .quotes-header {
    ${headingStyles}
    text-align: center;
    font-size: var(--xxl);
    color: var(--darkBlue);
    margin-bottom: 5rem;
  }

  .btn {
    margin-top: 5rem;
  }
`;

const Quotes = () => {
  return (
    <section data-aos='fade-up'>
      <Container>
        <h2 className='quotes-header'>What they've said</h2>
        <Carousel />
        <Button primary className='btn'>
          Get Started
        </Button>
      </Container>
    </section>
  );
};

export default Quotes;
