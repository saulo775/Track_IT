import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #76FA9E;
        --secondary: #00B0D9;
        --green: #73F9B8;
        --blue: #16A9D2;
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

    body {
        background: var(--background);
        -webkit-font-smooth: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 400;
    }

    a{
        text-decoration: none;
        color: currentColor;
    }

    button {
        cursor: pointer;
    }
`;