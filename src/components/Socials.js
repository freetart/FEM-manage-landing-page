import styled from 'styled-components';
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaPinterestSquare,
  FaInstagram,
} from 'react-icons/fa';

const Container = styled.div`
  .footer-icon {
    color: var(--white);
    font-size: var(--sm);
    margin-right: 1.5rem;
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: var(--brightRed);
    }
  }
`;

const Socials = () => {
  return (
    <Container>
      <a href='#!'>
        <FaFacebookSquare className='footer-icon' />
      </a>
      <a href='#!'>
        <FaYoutube className='footer-icon' />
      </a>
      <a href='#!'>
        <FaTwitter className='footer-icon' />
      </a>
      <a href='#!'>
        <FaPinterestSquare className='footer-icon' />
      </a>
      <a href='#!'>
        <FaInstagram className='footer-icon' />
      </a>
    </Container>
  );
};

export default Socials;
