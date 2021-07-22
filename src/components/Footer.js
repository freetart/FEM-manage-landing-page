import styled from 'styled-components';
import logo from '../images/logo-light.svg';
import Socials from './Socials';
import FooterLink from './FooterLink';
import SignUpEmail from './SignUpEmail';
import { maxWidthLg, sectionSpacingSm, textStyles } from '../abstracts/Mixins';
import Responsive from '../abstracts/Responsive';

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;

  ${Responsive.lg`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${Responsive.md`
    grid-template-columns: 1fr; 
  `}


  .footer-logo {
    width: 20rem;
    display: block;
    margin-bottom: 5rem;
  }

  .footer-copyright {
    ${textStyles}
    color: var(--darkGrayishBlue);
    font-size: var(--xxs);
  }
`;

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--veryDarkBlue)' }}>
      <Container>
        <div className='footer-col'>
          <img src={logo} alt='manage logo' className='footer-logo' />
          <Socials />
        </div>
        <ul className='footer-list'>
          <FooterLink text='Home' />
          <FooterLink text='Pricing' />
          <FooterLink text='Products' />
          <FooterLink text='About Us' />
        </ul>
        <ul className='footer-list'>
          <FooterLink text='Careers' />
          <FooterLink text='Community' />
          <FooterLink text='Privacy Policy' />
        </ul>
        <div className='footer-col'>
          <SignUpEmail />
          <p className='footer-copyright'>
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
