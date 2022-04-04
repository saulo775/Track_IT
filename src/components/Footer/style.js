import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    width: 100vw;
    background-color: red;
    justify-content: center;
    background-color: var(--white);
    padding: 1.25rem 2.25rem 1.5rem;
    position: fixed;
    bottom: 0;
    left: 0;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;
    max-width: 40rem;

    div {
        position: absolute;
        bottom: 10px;
        margin-left: -35px;
        width: 90px;
        height: 90px;
        background-color: var(--primary-ligth);
        border-radius: 50%;
        border: solid 8px var(--primary-ligth);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        color: var(--primary-ligth);
        font-size: 1rem;
    }
`;