import React from "react";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <Link to="/habitos">
            <h1>TrackIt</h1>
        </Link>
    )
}