import React from "react";
import { Container } from "./styles";

export function Habit() {
    return (
        <Container>
            <div>
                <h3>Titulo do habito</h3>
                <p>Sequência atual: 3 dias</p>
                <p>Seu recorde: 5 dias</p>
            </div>
            <ion-icon name="checkbox"></ion-icon>
        </Container>
    )
}