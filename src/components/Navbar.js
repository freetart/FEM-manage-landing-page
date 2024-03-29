import styled from 'styled-components';
import logo from '../images/logo.svg';
import { maxWidthLg } from '../abstracts/Mixins';
import NavLink from './NavLink';
import Button from './styledElements/Button';
import Responsive from '../abstracts/Responsive';
import MenuToggle from './MenuToggle';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 2000;
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

    ${Responsive.md`
      display: none; 
    `}
  }

  .btn {
    ${Responsive.lg`
      display: none; 
    `}
  }
`;

const Navbar = ({ isActive, setIsActive }) => {
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
        <Button primary className='btn'>
          Get Started
        </Button>
        <MenuToggle isActive={isActive} setIsActive={setIsActive} />
      </Container>
    </Nav>
  );
};

export default Navbar;
