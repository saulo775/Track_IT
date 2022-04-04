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

    ion-icon {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
    }
`;

export const Week = styled.div`
    display: flex;
    gap: 0.25rem;
`;

export const Day = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color:${(props)=>props.size};
    width: 30px;
    height: 30px;
    border: solid 1px var(--input-border);
    border-radius: 5px;
`;


