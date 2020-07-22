import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --background-color: ${(props) =>
    props.darkTheme ? props.theme.dark.elements : props.theme.light.elements};;
  --text-color: ${(props) =>
    props.darkTheme ? props.theme.dark.text : props.theme.light.text};
  --elements-color: ${(props) =>
    props.darkTheme ? props.theme.dark.elements : props.theme.light.elements};
    --input-color: hsl(0, 0%, 52%)
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
  /* background: var(--background-color); */
  color: var(--text-color);

body {
   font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 2;
    box-sizing: border-box;
}

.container {
  max-width: 144rem;
  padding: 1rem;
  background: var(--background-color);
`;
