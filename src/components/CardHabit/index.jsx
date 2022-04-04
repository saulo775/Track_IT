import axios from "axios";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";


import { Container, Week, Day } from  "./styles";
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
    const [daysWeek, setDaysWeek] = React.useState([
        {dia:"D", id:0, status:false},
        {dia:"S", id:1, status:false}, 
        {dia:"T", id:2, status:false},
        {dia:"Q", id:3, status:false},
        {dia:"Q", id:4, status:false},
        {dia:"S", id:5, status:false},
        {dia:"S", id:6, status:false},
    ]);

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
            <Week >
                {
                    daysWeek.map((day)=>{
                        return (
                            <Day key={day.id}>
                                <p className={day.status ? "ativo": ""}>{ day.dia}</p>
                            </Day>
                        )
                    }) 
                }
            </Week>
            <ion-icon onClick={()=>{
                handleDeleteHabit(id)
            }} name="trash-outline"></ion-icon>
        </Container>
    )
}

