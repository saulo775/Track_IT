import React from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

import { SignIn } from "../SignIn";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { HabitDay } from "../../components/HabitDay";

import { 
    Container, 
    InfosDay, 
    ContainerHabits 
} from "./styles";

const HABITS_TODAY_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

const ArrayWeekDay = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
];
const data = new Date();
const monthDay = String(data.getDate()).padStart(2, "0");
const month = String(data.getMonth() + 1).padStart(2, "0");
const day = ArrayWeekDay.filter((item, index)=>{
    if (data.getDay() === index) {
        return item;
    }
})

export function Today() {
    const {token, setToken} = React.useContext(UserContext);
    const [habits, setHabits] = React.useState([]);

    console.log(habits)
    React.useEffect(()=>{
        const promise = axios.get(HABITS_TODAY_URL, {headers: {
            Authorization: `Bearer ${token}`
        }});
    
        promise.then((response)=>{
            setHabits(response.data);
        });
        promise.catch((err)=>{
            console.error(err);
        });
    }, []);


    return token ? (
        <Container>
            <Header/>
            <InfosDay>
                <h2>{day}, {monthDay}/{month}</h2>
                <p>Nenhum Hábito concluído ainda</p>
            </InfosDay>
            <ContainerHabits>
                {
                    habits.map((item)=>{
                        return (
                            <HabitDay
                                id={item.id}
                                key={item.id} 
                                title={item.name}
                                completed={item.done}
                                highestSequence={item.highestSequence}
                                currentSequence={item.currentSequence}
                            />
                        )
                    })
                }
            </ContainerHabits>
            <Footer/>
        </Container>
    ) : <SignIn/>
}