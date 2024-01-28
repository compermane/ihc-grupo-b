import React from "react";
import sorryPana from "./images/sorry-pana.png";
import "./styles/Global.css";

const SintoMuito = () => {
    return (
        <div class = "grid-container center">
            <div class = "grid-container-item item-1">
            <img src = {sorryPana} alt = "dana-triste"></img>
            </div>
            <div class = "grid-container-item item-2">
            <h1>Eu sinto muito que você esteja passando por isso</h1>
            </div>
        </div>
    )
}

export default SintoMuito