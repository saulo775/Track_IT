import React from "react";
import axios from "axios"

import {
    Container,
    Content,
    Logo,
    Form
} from "./styles";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export function SignUp() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [avatarUrl, setAvatarUrl] = React.useState('');
    const [disable, setDisable] = React.useState(false);


    const navigate = useNavigate();

    async function handleSendDataRegister(e) {
        e.preventDefault();
        setDisable(true);
        try {
            const promise = await axios.post(
                "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
                {
                    email: email,
                    name: name,
                    image: avatarUrl,
                    password: password
                }
            );
            navigate("/");
            console.log(promise.data);
            
        }catch(err){
            console.log(err)
            setDisable(false);
        }
        
    }

    return (
        <Container>
            <Content>
                <Logo>
                    <img src="/logo.png" alt="Logo da TrackIt" ></img>
                    <h1>TrackIt</h1>
                </Logo>
                <Form onSubmit={handleSendDataRegister}>
                    <input 
                        value={email} 
                        onChange={(e)=>{setEmail(e.target.value)}} 
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
                    <input 
                        value={name} 
                        onChange={(e)=>{setName(e.target.value)}} 
                        type="text" 
                        placeholder="Nome" 
                        required 
                        disabled={disable}
                    />
                    <input 
                        value={avatarUrl} 
                        onChange={(e)=>{setAvatarUrl(e.target.value)}} 
                        type="url"
                        placeholder="Link da foto" 
                        disabled={disable}
                    />
                    <button >Cadastrar</button>
                <Link to={"/"}>Já possui uma conta? faça login!</Link>
                </Form>
            </Content>
        </Container>
    )
}