import React from "react";
import tristeDana from "./images/triste-dana.png"
import felizDana from "./images/feliz-dana.png"
import raivaDana from "./images/raiva-dana.png"
import tedioDana from "./images/tedio-dana.png"
import "./styles/Global.css"

const Confirmacao = (props) => {
    let image = tristeDana
    if(props.emocao === "feliz") 
        image = felizDana
    else if(props.emocao === "raiva")
        image = raivaDana
    else if(props.emocao === "tedio")
        image = tedioDana
return (    
    <div class = "grid-container center">
        <div class = "grid-container-item item-1">
        <img src = {image} alt = "dana-triste"></img>
        </div>
        <div class = "grid-container-item item-2">
        <h1>Você está {props.emocao}?</h1>
        <div class = "opcoes">
        <a class = "opt-button left" href={`/${props.emocao}`}>Sim</a>
        <a class = "opt-button right" href="/selecao">Não</a>
        </div>
        </div>
    </div>
    )
}

export default Confirmacao;