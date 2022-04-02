import styled from "styled-components";

export const Container = styled.div`
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border: 1px solid var(--input-border);
        border-radius: 0.25rem;
        background-color: var(--white);
    }
    
    h2 {
        font-size: 1.25rem;
        font-weight: 400;
        color: var(--placeholder-color);
        text-align: center;
    }

    .select {
        background-color: var(--gray);
        h2 {
            color: var(--white);
        }
    }
`;