import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SignIn } from "../SignIn";
import { UserContext } from "../../contexts/UserContext";

import {
    Container,
} from "./styles";

export function Historic() {
    const {token} = React.useContext(UserContext);
    const navigate = useNavigate();

    return token ? (
        <Container>
            <Header/>
            <h2>Histórico</h2>
            <p>Em breve você poderá ver o histórico <br/> dos seus hábitos aqui!</p>
            <Footer/>
        </Container>
    ) : <SignIn/>
    
}