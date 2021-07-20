import styled, { css } from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

const Button = styled.a`
  ${textStyles}
  border: 0;
  outline: 0;
  display: inline-block;
  border-radius: var(--mainRadius);
  padding: 1.2rem 2rem;
  font-size: var(--xxs);
  box-shadow: var(--mainShadow);
  cursor: pointer;
  transition: var(--mainTransition);

  &:hover,
  &:focus {
    box-shadow: var(--activeShadow);
    opacity: 0.9;
  }

  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--brightRed);
      color: var(--white);
    `}
`;

export default Button;
