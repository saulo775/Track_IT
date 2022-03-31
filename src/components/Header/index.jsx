import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

import { Container, Content } from "./styles";

export function Header() {
    const { token, userAvatarURL } = React.useContext(UserContext);
    return (
        <Container>
            <Content>
                <Link to="/hoje">
                    <h1>TrackIt</h1>
                </Link>
                <div>
                    <img src={userAvatarURL} alt="avatar do usuário" />
                </div>
            </Content>
        </Container>
    )
}