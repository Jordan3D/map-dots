import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html {
  font-size: 14px;
}

span {
  white-space: pre-line;
}

 .contentWrapper {
    min-height: 40rem;
    border: 1px solid #dfdcdc;

    .rdw-editor-main {
      padding: 1rem;
    }
}
`;

export default GlobalStyles;
