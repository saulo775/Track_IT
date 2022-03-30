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
    const [userAvatar, setUserAvatar] = React.useState();
    const navigate = useNavigate();
    
    function updateInputState(target, setState) {
        setState(target.value);
    }

    function handleDataForSignUp(event) {
        event.preventDefault();
        const promise = axios.post(SIGNUP_URL, {
            email: email,
            name: name,
            image: userAvatar,
            password: password,
        });

        promise.then((response)=>{
            console.log(response.data);
            navigate("/");
        });

        promise.catch((err)=>{
            alert("Algo deu errado. Tente novamente!")
            console.log(err);
        })
    }

    return (
        <Container>
            <Logo/>
            <FormData onSubmit={handleDataForSignUp} >
                <input 
                    type="email" 
                    placeholder="email"
                    value={email}
                    onChange={({target})=>{
                        updateInputState(target, setEmail);
                    }}
                    required 
                />
                <input 
                    type="text" 
                    placeholder="senha"
                    value={password}
                    onChange={({target})=>{
                        updateInputState(target, setPassword);
                    }}
                    required 
                />
                <input 
                    type="text" 
                    placeholder="nome"
                    value={name}
                    onChange={({target})=>{
                        updateInputState(target, setName);
                    }}
                    required 
                />
                <input 
                    type="url" 
                    placeholder="foto"
                    value={userAvatar}
                    onChange={({target})=>{
                        updateInputState(target, setUserAvatar);
                    }}
                    required 
                />
                <button type="submit">Cadastrar</button>
            </FormData>
            <Link to={"/"}>Já tem uma conta? Faça login!</Link>
        </Container>
    )
    
}