import axios from "axios";
import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

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

        
const URL_DELETE = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/"

export function CardHabit({id, title, days, rechargeHabits, setRechargeHabits}) {
    const { token } = useContext(UserContext);

    function handleDeleteHabit(id) {
        const confirm = window.confirm("Quer Realmente deletar?");

        if(confirm){
            const promise = axios({
                method: "delete",
                url: `${URL_DELETE}+${id}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            promise.then((response)=>{
                console.log(response);
                setRechargeHabits(!rechargeHabits);
            });
    
            promise.catch((err)=>{
                console.log(err);
                alert("Não foi possível excluir")
            });
        }
    }

    return (
        <Container>
            <h3>{title}</h3>
            <div>
            </div>
            <ion-icon onClick={()=>{
                handleDeleteHabit(id)
            }} name="trash-outline"></ion-icon>
        </Container>
    )
}