import styled from "styled-components";

export const Container = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 40rem;
    padding: 0 1rem;
    margin: 4rem 0;
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.75rem 0;

    h2 {
        font-weight: 400;
        font-size: 1.5rem;
        color: var(--primary);
    }

    button {
        width: 2.5rem;
        height: 2rem;
        font-size: 1.5rem;
        color: var(--white);
        background-color: var(--primary-ligth);
        border: none;
        border-radius: 0.25rem;
    }
`;

export const CreateHabitCard = styled.div`
    display: flex;
    flex-direction: column;

    background-color: var(--white);
`