import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.25rem;
    color: var(--text-color);
    padding: 0.75rem;
    background-color: var(--white);

    h3 {
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1rem;
        padding-bottom: 0.5rem;
    }

    p {
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1rem;
    }

    ion-icon {
        font-size: 4.25rem;
        color: var(--gray-icon);
    }

    .is-complete ion-icon{
        color: #444487;
    }
`;