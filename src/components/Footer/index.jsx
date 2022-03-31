import React from "react";
import { Link } from "react-router-dom";

import { Container, Content } from "./style";

export function Footer() {
    return (
        <Container>
            <Content>
                <Link to="/habitos">Hábitos</Link>
                <Link to="/hoje">Hoje</Link>
                <Link to="/historico">Histórico</Link>
            </Content>
        </Container>
    )
}