import React from "react";
import { UserContext } from "../../contexts/UserContext";

import {Header} from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Container } from "./styles";

const HABITS_TODAY_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

export function Today() {
    const {token, setToken} = React.useContext(UserContext);

    return (
        <Container>
            <Header/>
            <Footer/>
        </Container>
    )
}