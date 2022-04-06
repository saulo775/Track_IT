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
`;

export const Logo = styled.div`
    text-align: center;
    margin-top: 6rem;

    img {
        width: 8rem;
    }

    h1 {
        font-size: 3rem;
        color: var(--white);
        margin-top: 1rem;
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
`;