import React from "react";
import felizDana from "./images/tela-feliz.png";
import "./styles/Global.css";

const Feliz = () => {
    return (
        <div class = "grid-container center">
            <div class = "grid-container-item item-1">
            <img src = {felizDana} alt = "dana-triste"></img>
            </div>
            <div class = "grid-container-item item-2">
            <h1>Que bom que você está se sentindo assim!</h1>
            </div>
        </div>
    )
}

export default Feliz