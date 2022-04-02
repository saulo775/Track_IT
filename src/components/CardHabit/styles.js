import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    padding: 0.75rem 1rem 1rem;
    position: relative;

    h3 {
        margin-bottom: 0.62rem;
    }

    div {
        display: flex;
        gap: 0.25rem
    }

    ion-icon {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
    }
`;