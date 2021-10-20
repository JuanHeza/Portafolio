import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .nav-bar, .footer {
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
  }
.nav-bar::after{
    border-right: 2vw solid ${({ theme }) => theme.text};
}

.nav-bar::before{
    border-left: 2vw solid ${({ theme }) => theme.text};
}
.home, .loading{
    color: ${({ theme }) => theme.text};
}
.home article{
    box-shadow: 5px 5px 10px ${({ theme }) => theme.text};

}
.home article .icon{
    background: ${({ theme }) => theme.text};
}
.home article .button{
    background-color:${({ theme }) => theme.enfasis};
    color: ${({ theme }) => theme.body};
    border: solid 2px ${({ theme }) => theme.body};
}
.home article .button:active,
.home article .button:hover{
  filter: drop-shadow(2px 4px 10px ${({ theme }) => theme.enfasis});
}
.projectCard .info{
  background-color:  ${({ theme }) => theme.text};
  color:  ${({ theme }) => theme.body};
}
  a {
    color: ${({ theme }) => theme.body};
  }
`;