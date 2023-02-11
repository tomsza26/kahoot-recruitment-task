import { createGlobalStyles } from 'goober/global';

export const FONT_1 = 'Montserrat, sans-serif';

export const PURPLE = '#46178f';
export const RED = '#e21b3c';

export const BORDER = '3px solid #fff';

export const GlobalStyles = createGlobalStyles`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    background: ${PURPLE};
    font-family: ${FONT_1};
    margin: 0;
    padding: 0;
    font-size: 30px;
    color: #fff;
  }
`;
