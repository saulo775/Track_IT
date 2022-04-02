import React from "react";

import { Container } from  "./styles";
// const week= [
//     {day: domingo,short: D},
//     {day: segunda,short: S},
//     {day: terça,short: T},
//     {day: quarta,short: Q},
//     {day: quinta,short: Q},
//     {day: sexta,short: S},
//     {day: sabado,short: S},
// ];

export function CardHabit({id, title, days}) {
    return (
        <Container>
            <h3>{title}</h3>
            <div>
            </div>
            <ion-icon name="trash-outline"></ion-icon>
        </Container>
    )
}