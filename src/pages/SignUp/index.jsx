import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import { Logo } from "../../components/Logo";
import { UserContext } from "../../contexts/UserContext";

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

    const { disable, setDisable} = React.useContext(UserContext);
    
    function updateInputState(target, setState) {
        setState(target.value);
    }

    function handleDataForSignUp(event) {
        event.preventDefault();
        setDisable(true);
        const promise = axios.post(SIGNUP_URL, {
            email: email,
            name: name,
            image: userAvatar,
            password: password,
        });

        promise.then((response)=>{
            console.log(response.data);
            navigate("/");
            setDisable(false);

        });

        promise.catch((err)=>{
            alert("Algo deu errado. Tente novamente!")
            setDisable(false);
            console.log(err);
        })
    }

    return (
        <Container>
            <Logo/>
            <FormData onSubmit={handleDataForSignUp} disabled={disable}>
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
                    type="password" 
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
                <button type="submit">
                    {
                        disable
                        ?<ThreeDots color="white" height={30} width={60}/>
                        :<h4>Cadastrar</h4>
                    }
                    </button>
            </FormData>
            <Link to={"/"}>Já tem uma conta? Faça login!</Link>
        </Container>
    )
    
}