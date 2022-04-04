import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { CardHabit } from "../../components/CardHabit";
import { Day } from "../../components/Day";

import {
    Container,
    Title,
    CreateHabitCard,
    HabitsContainer,
    DaysContainer,
} from "./styles";

const URL_HABITS = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

export function Habits() {
    const { token } = React.useContext(UserContext);
    const [ habit, setHabit ] = React.useState('');
    const [ allHabits, setAllHabits ] = React.useState([]);
    const [ cardCreate, setCardCreate] = React.useState(false);
    const [ days, setDays ] = React.useState([]);

    const [rechargeHabits, setRechargeHabits] = React.useState(true);

    React.useEffect(() => {
        const promise = axios({
            method: "get",
            url: `${URL_HABITS}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        promise.then((response) => {
            setAllHabits(response.data);
            console.log(response.data);
        })
        promise.catch((err) => {
            console.log(err)
        })
    }, [rechargeHabits]);

    function handleSaveNewHabit() {
        if (habit === null || days.length < 1) {
            alert("Preencha todos os campos");
        }else{
            const promise = axios({
                method: "post",
                url: `${URL_HABITS}`,
                data: {
                    name: `${habit}`,
                    days: days,
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            promise.then((response) => {
                setHabit('');
                console.log(response.data);
                setCardCreate(false)
                setDays([]);
                setRechargeHabits(!rechargeHabits);
            });
            promise.catch((err) => {
                console.error(err);
            })
        }
    }

    function generateFormToCreateHabits() {
        return cardCreate ? (
            <CreateHabitCard>
                <input
                    type="text"
                    placeholder="Nome do hábito"
                    value={habit}
                    onChange={({ target }) => {
                        setHabit(target.value);
                    }}
                />
                <DaysContainer>
                    <Day title="D" id={0} days={days} setDays={setDays}/>
                    <Day title="S" id={1} days={days} setDays={setDays}/>
                    <Day title="T" id={2} days={days} setDays={setDays}/>
                    <Day title="Q" id={3} days={days} setDays={setDays}/>
                    <Day title="Q" id={4} days={days} setDays={setDays}/>
                    <Day title="S" id={5} days={days} setDays={setDays}/>
                    <Day title="S" id={6} days={days} setDays={setDays}/>
                </DaysContainer>
                <span>
                    <button onClick={()=>{
                        setCardCreate(false);
                    }}>Cancelar</button>
                    <button onClick={handleSaveNewHabit} type="submit">Salvar</button>
                </span>
            </CreateHabitCard>
        ): '';

    }

    function generateHabitsContainer() {
        return allHabits.length >0 ? (
            <HabitsContainer>
                {
                    allHabits.map((item)=>{ 
                        return (
                            <CardHabit
                                id={item.id}
                                key={item.id}
                                title={item.name}
                                days={item.days}
                                rechargeHabits={rechargeHabits}
                                setRechargeHabits={setRechargeHabits}
                            />
                        );
                    })
                }
            </HabitsContainer> ) :
            <p>
                Você não tem nenhum hábito cadastrado ainda. <br />
                Adicione um hábito para começar a trackear!
            </p>
        }

    const habitsContainer = generateHabitsContainer()
    const formHabitCard = generateFormToCreateHabits()
    return token ? (
        <Container>
            <Header />
            <Title>
                <h2>Meus Hábitos</h2>
                <button onClick={()=>{
                    setCardCreate(true)
                }}>+</button>
            </Title>
            { formHabitCard }
            { habitsContainer }
            

            <Footer />
        </Container>
    ) : <Navigate to="/"/>

}