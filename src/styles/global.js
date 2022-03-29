
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --primary: #126BA5;
        --primary-ligth: #52B6FF;
        --green: #8FC549;
        --red: #EA5766;
        --yellow: #FFFF81;
        --white: #FFFFFF;

        --gray: #CFCFCF;
        --gray-ligth: #F2F2F2;
        
        --input-color: #B3B3B3;
        --text-color: #666666;



        /*===CORES ALTERA NO FUTURO=== */
        --black: #181A1D;
        --black2: #262A2E;
        --teste1: #6AFF99;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93,75%;
        }

        @media (max-width: 720px){
            font-size: 87,5%;
        }
    }

    body{
        -webkit-font-smooth: antialiased;
        font-family: 'Lexend Deca', sans-serif;
    }

    h1 {
        font-family: 'Playball', cursive;
    }

    a{
        text-decoration: none;
        color: currentColor;
    }

    button {
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;