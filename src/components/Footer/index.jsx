import React, { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";

import { Container, Content } from "./style";

export function Footer() {
    const {percentage} = React.useContext(UserContext);
    return (
        <Container>
            <Content>
                <Link to="/habitos">Hábitos</Link>
                <Link to="/hoje">
                    <div >
                        <CircularProgressbar
                            value={percentage}
                            strokeWidth={8}
                            text={"Hoje"}
                            styles={buildStyles({
                                textSize: '24px',
                                pathColor: `#FFF`,
                                textColor: '#FFF',
                                backgroundColor: '#FFF',

                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                                
                            })}
                        />
                    </div>
                </Link>
                <Link to="/historico">Histórico</Link>
            </Content>
        </Container>
    )
}