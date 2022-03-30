import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { 
    Container,
    FormData,
} from "../SignIn/styles";

const LOGIN_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

export function SignIn() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    
    function handleLogin(event) {
        event.preventDefault();
        const promise = axios.post(LOGIN_URL, {
            email: email,
            password: password,
        });
    
        promise.then((response)=>{
            navigate("/hoje");
            console.log(response.data);
        });
    
        promise.catch((err)=>{
            console.error(err);
        })
    }

    function updateInputState(target, setState) {
        setState(target.value);
    }

    return (
        <Container onSubmit={handleLogin}>
            <Logo/>
            <FormData>
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
                    placeholder="senha"
                    onChange={({target})=>{
                        updateInputState(target, setPassword);
                    }}
                    required
                />
                <button type="submit">Entrar</button>
            </FormData>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </Container>
    )
    
}