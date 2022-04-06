import React from "react";

import {
    Container,
    Content,
    Logo,
    Form
} from "./styles";


export function SignUp() {
    return (
        <Container>
            <Content>
                <Logo>
                    <img src="/logo.png" alt="Logo da TrackIt" ></img>
                    <h1>TrackIt</h1>
                </Logo>

                <Form>
                    <input type="email" placeholder="email" required />
                    <input type="text" placeholder="senha" required />
                    <input type="text" placeholder="name" required />
                    <input type="url" placeholder="foto" />

                </Form>
            </Content>
        </Container>
    )
}