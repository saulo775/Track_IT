import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    width: 100vw;
    background-color: red;
    justify-content: center;
    background-color: var(--primary);
    padding: 0.5rem 1rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    max-width: 40rem;
    padding: 0 1rem;

    h1 {
        font-size: 2.3rem;
        line-height: 49px;
        color: var(--white);
    }
    
    div {
        width: 3.1rem;
        height: 3.1rem;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
        }
    }
`;