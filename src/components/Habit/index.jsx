import React from "react";
import { Container } from "./styles";

export function Habit({
    completed, 
    title,
    highestSequence,
    currentSequence,
}) {
    return (
        <Container>
            <div>
                <h3>{title}</h3>
                <p>Sequência atual: {currentSequence} dias</p>
                <p>Seu recorde: {highestSequence} dias</p>
            </div>
            <ion-icon name="checkbox"></ion-icon>
        </Container>
    )
}