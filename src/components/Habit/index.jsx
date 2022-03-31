import React from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";
import { Container } from "./styles";

const URL_CHECK_HABIT = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/";

export function Habit({
    id,
    title,
    completed, 
    highestSequence,
    currentSequence,
}) {
    const {token} = React.useContext(UserContext);
    const [ isComplete, setIsComplete] = React.useState(completed)

    function handleSelectHabit() {
        setIsComplete(!isComplete);
        if (isComplete) {
            setCheckHabit("check");
        }else{
            setCheckHabit("uncheck");
        }
    }

    function setCheckHabit(finalRoute) {
        const promise = axios({
            method: "post",
            url: `${URL_CHECK_HABIT}+${id}/${finalRoute}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        promise.then((response)=>{
            console.log(response.status)
        })

        promise.catch((err)=>{
            console.log(err)
        })
    }


    return (
        <Container className={isComplete ? "#ff4": ""}>
            <div>
                <h3>{title}</h3>
                <p>Sequência atual: {currentSequence} dias</p>
                <p>Seu recorde: {highestSequence} dias</p>
            </div>
            <ion-icon name="checkbox" onClick={handleSelectHabit}></ion-icon>
        </Container>
    )
}