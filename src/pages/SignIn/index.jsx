import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import {
    Container,
    Logo,
    Form
} from "./styles";


export function SignIn() {
    const [disable, setDisable] = React.useState(false);
    const [userMail, setUserMail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate()

    async function handleSubmitDataLogin(e) {
        e.preventDefault();
        setDisable(true);
        try{
            const promise = await axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",{
                email: userMail,
                password: password
            });
            navigate("/today")
            console.log(promise.data);
        }catch(err){
            console.log(err);
            setDisable(true);
        }
    }
    
    return ( 
        <Container>
            <Logo>
                <img src="/logo.png" alt="Logo da TrackIt" ></img>
                <h1>TrackIt</h1>
            </Logo>
            <Form onSubmit={handleSubmitDataLogin}>
                <input 
                    value={userMail} 
                    onChange={(e)=>{setUserMail(e.target.value)}} 
                    type="email" 
                    placeholder="email" 
                    required 
                    disabled={disable}
                />
                <input 
                    value={password} 
                    onChange={(e)=>{setPassword(e.target.value)}} 
                    type="text" 
                    placeholder="senha" 
                    required 
                    disabled={disable}
                />
                <button>Entrar</button>
                <Link to="/register">Não tem uma conta? Cadastre-se!</Link>
            </Form>
        </Container>
    )
}