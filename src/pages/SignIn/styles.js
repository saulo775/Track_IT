import styled from "styled-components";

export const Container = styled.section`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 40rem;
    background-color: white;

    a {
        color: var(--primary-ligth);
        text-decoration: underline;
        font-size: 1rem;
        margin: 1.5rem 0;
    }
`;

export const FormData = styled.form`
    display: flex;
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    padding: 0 2.5rem;

    input {
        border-radius: 0.25rem;
        padding: 0.5rem 0.75rem;
        margin-bottom: 0.5rem;
        color: var(--text-color);
        outline: none;
        border: 4px solid white;
        transition: 250ms;
        font-size: 1.25rem;
        background-color: #ffffff;
        border: solid 1px var(--input-border);
        
        ::placeholder{
            color: var(--placeholder-color);
        }
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 1.25rem;
        line-height: 1.5rem;
        font-weight: 500;
        border-radius: 0.25rem;
        padding: 0.5rem 1rem;
        background-color: var(--primary-ligth);
        border: none;
        text-align: center;
    }
`;




