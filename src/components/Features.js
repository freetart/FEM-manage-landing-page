import styled from 'styled-components';
import {
  maxWidthLg,
  sectionSpacingMd,
  headingStyles,
  textStyles,
  sectionSpacingSm,
} from '../abstracts/Mixins';
import Feature from './Feature';
import { featuresData } from '../data';
import Responsive from '../abstracts/Responsive';

const BgPatternFeatures = styled.div`
  clip-path: circle(28% at 0 44%);
  background-color: var(--brightRed);
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.1;
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;

  ${Responsive.md`
    grid-template-columns: 1fr;
    ${sectionSpacingSm}
  `}

  .features-heading {
    ${headingStyles};
    font-size: var(--xxl);
    color: var(--darkBlue);
    margin-bottom: 1rem;
  }

  .features-lead {
    ${textStyles}
    font-size: var(--xs);
    color: var(--darkGrayishBlue);
  }
`;

const Features = () => {
  return (
    <section>
      <BgPatternFeatures />
      <Container>
        <div>
          <h2 className='features-heading' data-aos='fade-up'>
            What’s different about Manage?
          </h2>
          <p className='features-lead' data-aos='fade-up' data-aos-delay='100'>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div data-aos='fade-down'>
          {featuresData.map((feature) => {
            const { id, number, title, description } = feature;
            return (
              <Feature
                key={id}
                number={number}
                title={title}
                description={description}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Features;
