import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
  :root {
    /* colors */
    --black: #222;
    --white: #fff;
    /* primary */
    --brightRed: hsl(12, 88%, 59%);
    --darkBlue: hsl(228, 39%, 23%);
    /* neutral */
    --darkGrayishBlue: hsl(227, 12%, 61%);
    --veryDarkBlue: hsl(233, 12%, 13%);
    --veryPaleRed: hsl(13, 100%, 96%);
    --veryLightGray: hsl(0, 0%, 98%);
    /* radius */
    --mainRadius: 1rem;
    /* shadows */
    --mainShadow: 0.1rem 0.3rem 1rem rgba(0, 0, 0, .1);
    /* transitions */
    --mainTransition: all 0.3s ease-in-out;
    /* font sizes */
    --xxl: 4.5rem;
    --xl: 4rem;
    --lg: 3.5rem;
    --md: 3rem;
    --sm: 2.5rem;
    --xs: 2rem;
    --xxs: 1.7rem;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Be Vietnam', sans-serif;
    overflow-x: hidden;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input {
    font-family: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`;

export default Globals;
