import React from "react";
import axios from "axios";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { UserContext } from "../../contexts/UserContext";

import {
    Container,
    Title,
    CreateHabitCard,
} from "./styles";

const URL_NEW_HABIT = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

export function Habits() {
    const [habit, setHabit] = React.useState();
    const { token } = React.useContext(UserContext);

    function handleSaveNewHabit(){
        const promise = axios({
            method: "post",
            url: `${URL_NEW_HABIT}`,
            data: {
                name: `${habit}`,
                days: [1, 3, 4, 6],
            },
            headers: {
                Authorization: `Bearer ${token}`
            }

        });

        promise.then((response)=>{
            console.log(response);
        });

        promise.catch((err)=>{
            console.error(err);
        })
    }

    return (
        <Container>
            <Header/>
            <Title>
                <h2>Meus Hábitos</h2>
                <button>+</button>
            </Title>
            <CreateHabitCard>
                <input 
                    type="text" 
                    placeholder="Nome do hábito"
                    onChange={({target})=>{
                        setHabit(target.value);
                    }}
                />
                <span>
                    <button>Cancelar</button>
                    <button onClick={handleSaveNewHabit} type="submit">Salvar</button>
                </span>
            </CreateHabitCard>
            <p>
                Você não tem nenhum hábito cadastrado ainda. <br/>
                Adicione um hábito para começar a trackear!
            </p>


            <Footer/>
        </Container>
    )
    
}