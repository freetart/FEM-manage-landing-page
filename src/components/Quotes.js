import styled from 'styled-components';
import {
  maxWidthLg,
  headingStyles,
  sectionSpacingLg,
} from '../abstracts/Mixins';
import Carousel from './Carousel';
import Button from './styledElements/Button';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingLg}
  text-align: center;

  .quotes-header {
    ${headingStyles}
    text-align: center;
    font-size: var(--xxl);
    color: var(--darkBlue);
    margin-bottom: 5rem;
  }
`;

const Quotes = () => {
  return (
    <section>
      <Container>
        <h2 className='quotes-header'>What they've said</h2>
        <Carousel />
        <Button primary>Get Started</Button>
      </Container>
    </section>
  );
};

export default Quotes;
