import styled from 'styled-components';
import { textStyles } from '../abstracts/Mixins';

const Container = styled.li`
  .nav-link {
    ${textStyles}
    font-size: var(--xxs);
    color: var(--darkBlue);
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: var(--darkGrayishBlue);
    }
  }
`;

const NavLink = ({ text }) => {
  return (
    <Container>
      <a href='#!' className='nav-link'>
        {text}
      </a>
    </Container>
  );
};

export default NavLink;
