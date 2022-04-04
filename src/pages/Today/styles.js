import styled from "styled-components";

export const Container = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 40rem;
    width: 100%;
    margin: 4rem 0;
    background-color: var(--gray-ligth);
`;

export const InfosDay = styled.div`
    padding: 1.75rem 1rem;
    h2 {
        font-size: 1.5rem;
        font-weight: 400;
        color: var(--primary);
    }

    p.ativo {
        color: var(--green);
    }

    p {
        font-size: 1.1rem;
        font-weight: 400;
        color: var(--text-color-ligth);
    }
`;

export const ContainerHabits = styled.section`
    display: flex;
    gap: 0.7rem;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    padding: 0 1rem 1rem;
    ::-webkit-scrollbar {
        display: none;
    }
`;