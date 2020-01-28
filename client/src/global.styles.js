import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
	box-sizing: border-box;
}

html,
body {
	font-family: 'Open Sans Condensed', 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu';
	padding: 0px !important;
	margin: 0px;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: #fdf1c8;
  
 }

a {
	text-decoration: none;
	color: black;
}
`;
