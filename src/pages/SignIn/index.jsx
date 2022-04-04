import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner"

import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo";
import { Container, FormData } from "../SignIn/styles";
import { UserContext } from "../../contexts/UserContext";

const LOGIN_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

export function SignIn() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const { 
        setToken, 
        disable,
        setDisable, 
        setUserAvatarURL 
    } = React.useContext(UserContext);

    const navigate = useNavigate();
            
    function handleLogin(event) {
        event.preventDefault();
        setDisable(true);
        const promise = axios.post(LOGIN_URL, {
            email: email,
            password: password,
        });

        promise.then((response) => {
            setDisable(false);
            const { data } = response;
            setToken(data.token);
            setUserAvatarURL(data.image);
            navigate("/hoje");
        });

        promise.catch((err) => {
            console.error(err);
            alert("Ocorreu um erro, Tente novamente!");
            setDisable(false);
        })
    }

    function updateInputState(target, setState) {
        setState(target.value);
    }

    return (
        <Container onSubmit={handleLogin} >
            <Logo />
            <FormData disabled={disable}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={({ target }) => {
                        updateInputState(target, setEmail);
                    }}
                    required
                />
                <input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={({ target }) => {
                        updateInputState(target, setPassword);
                    }}
                    required
                />

                <button type="submit">
                    {
                        disable
                        ?<ThreeDots color="white" height={30} width={60}/>
                        :<h4>Entrar</h4>
                    }
                </button>
            </FormData>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </Container>
    )

}