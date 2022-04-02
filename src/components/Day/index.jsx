import React from "react";
import { Container } from  "./styles";

export function Day({title, days, setDays, id}) {
    const [status, setStatus] = React.useState(false);
    let day = [...days];

    function handleSetStatus() {

        let index = day.indexOf(id);

        if (index > -1) {
            day.splice(index, 1);
        }else{
            day.push(id);
        }

        setDays(day);
        setStatus(!status);
    }

    return (
        <Container
            onClick={handleSetStatus}   
        >
            <div className={status === true ? "select" : ""}>
                <h2>{title}</h2>
            </div>
        </Container>
    )
}