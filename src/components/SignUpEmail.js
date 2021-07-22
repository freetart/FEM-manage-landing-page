import styled from 'styled-components';
import Button from './styledElements/Button';
import Responsive from '../abstracts/Responsive';

const Container = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 5rem;

  ${Responsive.sm`
    flex-direction: column;
    text-align: center; 
  `}

  .email-input {
    padding: 1.2rem 2rem;
    font-size: var(--xxs);
    border-radius: var(--mainRadius);
    outline: 0;
    border: 0;
  }
`;

const SignUpEmail = () => {
  return (
    <Container>
      <input
        type='text'
        className='email-input'
        placeholder='Updates in your inbox...'
      />
      <Button primary>Go</Button>
    </Container>
  );
};

export default SignUpEmail;
