import { useState } from 'react';
import styled from 'styled-components';
import Button from './styledElements/Button';
import validator from 'validator';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 5rem;

  .email-container {
    display: flex;
    flex-direction: column;
  }

  .email-input {
    padding: 1.2rem 2rem;
    font-size: var(--xxs);
    border-radius: var(--mainRadius);
    outline: 0;
    border: 0;
  }

  .message {
    font-size: var(--xxs);
    margin: 1rem;
    color: var(--brightRed);
  }

  .btn {
    text-align: center;
  }
`;

const SignUpEmail = () => {
  const [inputMessage, setInputMessage] = useState('');
  const validateEmail = (e) => {
    let email = e.target.value;

    if (validator.isEmail(email)) {
      setInputMessage('Valid email :)');
    } else {
      setInputMessage('Please enter valid email');
    }
  };

  return (
    <Container>
      <div className='email-container'>
        <span className='message'>{inputMessage}</span>
        <input
          type='text'
          className='email-input'
          placeholder='Updates in your inbox...'
          onChange={(e) => validateEmail(e)}
        />
      </div>
      <Button primary className='btn'>
        Go
      </Button>
    </Container>
  );
};

export default SignUpEmail;
