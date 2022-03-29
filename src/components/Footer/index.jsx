import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <>
            <Link to="/habitos">Hábitos</Link>
            <Link to="/hoje">Hoje</Link>
            <Link to="/historico">Histórico</Link>
        </>

    )
}