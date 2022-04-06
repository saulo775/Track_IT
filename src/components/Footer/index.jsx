import React from "react";
import { Link } from "react-router-dom";


export function Footer() {
    return (
        <Footer>
            <Link to={"/habits"}>Hábitos</Link>
            <Link to={"/today"}>Hoje</Link>
            <Link to={"/history"}>Histórico</Link>
        </Footer>
    )
}