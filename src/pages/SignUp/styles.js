import styled from "styled-components";

export const Container = styled.section`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 40rem;

    a {
        color: var(--blue-ligth);
        font-size: 1rem;
    }
`;

export const FormData = styled.form`
    display: flex;
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    padding: 0 2.5rem;
    margin-bottom: 1.5rem;

    input {
        border-radius: 0.25rem;
        padding: 0.75rem;
        margin-bottom: 0.5rem;
        outline: none;
        border: 4px solid white;
        transition: 250ms;
        font-size: 1.25rem;
        background-color: #ffffff;

        :focus {
            border: 4px solid var(--blue-ligth);
        }
    }

    button {
        color: #ffffff;
        font-size: 1.5rem;
        line-height: 1.5rem;
        font-weight: 500;
        border-radius: 0.25rem;
        padding: 1rem;
        background-color: var(--primary-ligth);
        border: none;
    }
`;



