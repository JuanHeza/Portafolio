import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
.projectCard .info{
  background-color:  ${({ theme }) => theme.text};
  color:  ${({ theme }) => theme.body};
}
`;