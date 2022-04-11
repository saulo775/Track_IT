import React from "react";
import { Link } from "react-router-dom";

import {Input} from "../../components/Input";

import {
    Container,
    Logo,
    Form
} from "./styles";


export function SignIn() {
    const [disable, setDisable] = React.useState(false);
    const [userMail, setUserMail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    return (
        <Container>
            <Logo>
                <img src="/logo.png" alt="Logo da TrackIt" ></img>
                <h1>TrackIt</h1>
            </Logo>
            <Form>
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