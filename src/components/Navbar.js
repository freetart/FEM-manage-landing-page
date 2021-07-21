import styled from 'styled-components';
import logo from '../images/logo.svg';
import { maxWidthLg } from '../abstracts/Mixins';
import NavLink from './NavLink';
import Button from './styledElements/Button';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 1000;
`;

const Container = styled.div`
  padding: 2rem;
  ${maxWidthLg}
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-logo {
    width: 15rem;
  }

  .nav-list {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <img src={logo} alt='manage logo' className='nav-logo' />
        <ul className='nav-list'>
          <NavLink text='Pricing' />
          <NavLink text='Product' />
          <NavLink text='About Us' />
          <NavLink text='Careers' />
          <NavLink text='Community' />
        </ul>
        <Button primary>Get Started</Button>
      </Container>
    </Nav>
  );
};

export default Navbar;
