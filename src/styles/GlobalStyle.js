import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${(props)=>props.user?'#f2f2f2':'#fff'};
        font-family: 'Lexend Deca', sans-serif;
    }
`;

export default GlobalStyle;