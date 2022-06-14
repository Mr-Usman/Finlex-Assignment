import { createGlobalStyle } from "styled-components";
import * as theme from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.text};
  font-family: Inter;
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
}

// theme buttons color
.light {
  background-color:${theme.light.colors.header};
}

.dark {
  background-color: ${theme.dark.colors.header};
}

// active theme
.active{
    border: 3px solid hsl(0, 0%, 87%);
    }
`;
