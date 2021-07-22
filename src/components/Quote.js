import styled from 'styled-components';
import {
  headingStyles,
  sectionSpacingSm,
  textStyles,
} from '../abstracts/Mixins';

const Container = styled.div`
  ${sectionSpacingSm}
  padding: 10rem;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  .quote-portrait {
    width: 10rem;
    margin: 0 auto;
    border: 0.3rem solid var(--brightRed);
    border-radius: 50%;
  }

  .quote-name {
    ${headingStyles}
    font-size: var(--md);
    padding: 2rem 0;
    color: var(--darkBlue);
  }

  .user-quote {
    ${textStyles}
    font-size: var(--xxs);
    color: var(--darkGrayishBlue);
  }
`;

const Quote = ({ portrait, name, userQuote }) => {
  return (
    <article>
      <Container>
        <img src={portrait} alt='portrait' className='quote-portrait' />
        <h2 className='quote-name'>{name}</h2>
        <p className='user-quote'>{userQuote}</p>
      </Container>
    </article>
  );
};

export default Quote;
