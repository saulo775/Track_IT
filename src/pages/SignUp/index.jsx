import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo";

import { 
    Container,
    FormData,
} from "./styles";

const SIGNUP_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";


export function SignUp() {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [name, setName] = React.useState();
    const [photo, setPhoto] = React.useState();
    const navigate = useNavigate();
    
    function updateInputState(target, setState) {
        setState(target.value);
    }

    function handleDataForSignUp(event) {
        event.preventDefault();
        const promise = axios.post(SIGNUP_URL, {
            email: email,
            name: name,
            image: photo,
            password: password,
        });

        promise.then((response)=>{
            console.log("deu bom ", response);
            navigate("/");
        });

        promise.catch((err)=>{
            console.log("deu merda");
        })
    }

    return (
        <Container>
            <Logo/>
            <FormData onSubmit={handleDataForSignUp} >
                <input 
                    type="email" 
                    placeholder="email"
                    onChange={({target})=>{
                        updateInputState(target, setEmail);
                    }}
                    required 
                />
                <input 
                    type="text" 
                    required 
                    placeholder="senha"
                    onChange={({target})=>{
                        updateInputState(target, setPassword);
                    }}
                />
                <input 
                    type="text" 
                    placeholder="nome"
                    onChange={({target})=>{
                        updateInputState(target, setName);
                    }}
                    required 
                />
                <input 
                    type="url" 
                    placeholder="foto"
                    onChange={({target})=>{
                        updateInputState(target, setPhoto);
                    }}
                    required 
                />
                <button type="submit">Cadastrar</button>
            </FormData>
            <Link to={"/"}>Já tem uma conta? Faça login!</Link>
            
        </Container>
    )
    
}