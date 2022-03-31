import React from "react";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

import { SignIn } from "../SignIn";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Container } from "./styles";

const HABITS_TODAY_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

export function Today() {
    const {token, setToken} = React.useContext(UserContext);

    React.useEffect(()=>{
        const promise = axios.get(HABITS_TODAY_URL, {headers: {
            Authorization: `Bearer ${token}`
        }});
    
        promise.then((response)=>{
            console.log(response.data);
        });
        promise.catch((err)=>{
            console.error(err);
        });
    }, []);


    return token ? (
        <Container>
            <Header/>
            <Footer/>
        </Container>
    ) : <SignIn/>
}