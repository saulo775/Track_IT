import styled from "styled-components";

export const Container = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 40rem;
    margin: 4rem 0;
    padding: 0 1rem 1rem;
    font-weight: 400;
    font-size: 1.1rem;
    color: var(--text-color);

    h2 {
        font-size: 1.5rem;
        color: var(--primary);
        margin: 1.75rem 0 1rem;
    }
`;