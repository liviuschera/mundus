import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --background-color: ${(props) =>
    props.darkTheme
      ? props.theme.dark.background
      : props.theme.light.background};;
  --text-color: ${(props) =>
    props.darkTheme ? props.theme.dark.text : props.theme.light.text};
  --elements-color: ${(props) =>
    props.darkTheme ? props.theme.dark.elements : props.theme.light.elements};
    --input-color: ${(props) =>
      props.darkTheme ? props.theme.dark.input : props.theme.light.input}
}

*,
*::before,
*::after {
	margin: 0;
  padding: 0;
  box-sizing: inherit;
  text-decoration: none;
  /* color: hsl(188, 90%, 10%); */
}

html {
   /* This defines what 1rem is */
   /* 1 rem = 10px; 10px/16px = 62.5% */
   font-size: 62.5%;

body {
   font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 2;
    color: var(--text-color);
    box-sizing: border-box;
}
`;
