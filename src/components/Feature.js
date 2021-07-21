import styled from 'styled-components';
import { headingStyles, textStyles } from '../abstracts/Mixins';

const Article = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 3rem;

  .feature-number {
    ${headingStyles}
    background-color: var(--brightRed);
    padding: 1rem;
    font-size: var(--xxs);
    border-radius: 50%;
    color: var(--white);
  }

  .feature-heading {
    ${headingStyles}
    color: var(--darkBlue);
    font-size: var(--xs);
  }

  .feature-desc {
    ${textStyles}
    color: var(--darkGrayishBlue);
    font-size: var(--xxs);
    padding: 2rem 0;
  }
`;

const Feature = ({ number, title, description }) => {
  return (
    <Article>
      <span className='feature-number'>{number}</span>
      <div className='feature-info'>
        <h4 className='feature-heading'>{title}</h4>
        <p className='feature-desc'>{description}</p>
      </div>
    </Article>
  );
};

export default Feature;
