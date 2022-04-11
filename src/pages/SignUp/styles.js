import styled from "styled-components"


export const Container = styled.section`
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: #76fa9e;
    background-image: linear-gradient(169deg, #76fa9e 0%, #00b0d9 55%);
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 40rem;
    flex-direction: column;
    text-align: center;
`;

export const Logo = styled.div`
    text-align: center;
    margin-top: 2rem;

    img {
        width: 10rem;
    }

    h1 {
        font-size: 3rem;
        color: var(--white);
    }
`;

export const Form = styled.form`
    flex: 1;
    display: flex;
    gap: 0.25rem;
    width: 100%;
    margin: 3rem 0;
    padding: 0 2rem;
    flex-direction: column;

    input {
        padding: 0.75rem 1rem;
        font-size: 1.25rem;
        border: 2px solid var(--blue);
        border-radius: 4px;
        transition: 200ms;
        color: var(--black);
        :focus {
            outline:solid 2px var(--green);
        }
    }

    button {
        background-color: white;
        color: var(--secondary);
        max-width: 16rem;
        border-radius: 2rem;
        border: 2px solid var(--secondary-ligth);
        padding: 0.75rem 2rem;
        font-size: 1.25rem;
        margin: 1rem auto 0.75rem;
        -webkit-box-shadow: 2px 2px 21px -10px rgba(25,25,25,1);
        -moz-box-shadow: 2px 2px 21px -10px rgba(25,25,25,1);
        box-shadow: 2px 2px 21px -10px rgba(25,25,25,1);
        transition: 200ms;

        :hover {
            background-color: #73F9B870;
            color: white;
        }
    }

    a {
        color: var(--green);
        font-weight: 700;
        font-size: 1rem;
    }
`;