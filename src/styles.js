import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`

${normalize}

${reset}

*,
::after,
::before {
    box-sizing: border-box;
}

html {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  height: 100%;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  overflow-y: scroll;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
body::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
}
body::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
}
body::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}
body::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0.9);
}

a, a:visited, a:hover {
    text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

#root {
  height: 100%;
}
`;

export default GlobalStyle;
