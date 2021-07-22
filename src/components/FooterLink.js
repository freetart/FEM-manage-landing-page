import styled from 'styled-components';
import { textStyles } from '../abstracts/Mixins';

const Container = styled.li`
  margin: 1rem 0;

  .footer-link {
    ${textStyles}
    color: var(--white);
    font-size: var(--xxs);
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: var(--brightRed);
    }
  }
`;

const FooterLink = ({ text }) => {
  return (
    <Container>
      <a href='#!' className='footer-link'>
        {text}
      </a>
    </Container>
  );
};

export default FooterLink;
