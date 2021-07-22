import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import Responsive from '../abstracts/Responsive';

const Button = styled.button`
  display: none;
  background: transparent;
  outline: 0;
  border: 0;
  position: fixed;
  z-index: 2000;
  right: 2rem;
  top: 1.8rem;

  ${Responsive.md`
      display: block;
  `}

  .toggle-icon {
    color: var(--black);
    font-size: var(--md);
  }
`;

const MenuToggle = ({ isActive, setIsActive }) => {
  return (
    <Button className='toggle' onClick={() => setIsActive(!isActive)}>
      {!isActive ? (
        <FaBars className='toggle-icon' />
      ) : (
        <FaTimes className='toggle-icon' />
      )}
    </Button>
  );
};

export default MenuToggle;
