
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
        
        --gray-icon: #EBEBEB;
        --input-color: #B3B3B3;
        --input-border: #d4d4d4;
        --placeholder-color: #DBDBDB;
        --text-color: #666666;
        --text-color-ligth: #BABABA;

        --white: #FFFFFF;
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

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        min-height: 100vh;
        background-color: var(--gray-ligth);
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