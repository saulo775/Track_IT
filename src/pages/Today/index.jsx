import React from "react";
import { UserContext } from "../../contexts/UserContext";

const HABITS_TODAY_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

export function Today() {
    const {token, setToken} = React.useContext(UserContext);

    return (
        <h1>Today</h1>
    )
}