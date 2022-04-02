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
    padding: 1.1rem;
    position: relative;

    input {
        color: var(--text-color);
        padding:0.5rem 0.75rem;
        border: solid 1px var(--input-border);
        border-radius: 0.25rem;
        font-size: 1.25rem;
        
        ::placeholder {
            color: var(--placeholder-color);
        }

        :focus {
            border: 2px solid var(--primary-ligth);
            outline: var(--primary-ligth);
        }
    }

    span {
        display: flex;
        gap: 1.5rem;
        position: absolute;
        bottom: 1rem;
        right: 1rem;
    }

    button {
        font-size: 1rem;    
        font-weight: 400;
        color: var(--primary-ligth);
        border: none;
        outline: none;
        background-color: var(--white);
    }

    button[type="submit"] {
        background-color: var(--primary-ligth);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 5px;
    }
`

export const HabitsContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    flex-direction: column;
    margin: 1rem 0;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }
`;

export const DaysContainer = styled.div`
    display: flex;
    gap: 0.25rem;
    margin: 0.5rem 0 3.75rem;
`;

export const Day = styled.div``;