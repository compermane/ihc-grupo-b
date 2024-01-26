import React from "react";
import "./styles/Global.css"
import thinkingPana from "./images/pana-thinking.png"
import arrow from "./images/BsArrowRight.png"

const Questionario1 = () => {
    return (
        <div class = "grid-container questionario1 center">
            <h1 class = "header">Quais palavras melhor te descrevem agora?</h1>
            <div class = "image-words">
                <div class = "image-words item images">
                    <img src = {thinkingPana}></img>
                </div>
                <div class = "image-words item words">
                    <div class = "opcoes-palavras">
                        <div class = "emocoes-row">
                            <input type = "checkbox" id = "preocupado" class = "emocao-checkbox" />
                                <label for = "preocupado" class = "emocao-label">Preocupado</label>
                            <input type = "checkbox" id = "luto" class = "emocao-checkbox" />
                                <label for = "luto" class = "emocao-label">Luto</label>
                            <input type = "checkbox" id = "cansado" class = "emocao-checkbox" />
                                <label for = "cansado" class = "emocao-label">Cansado</label>
                        </div>
                        <div class = "emocoes-row">
                            <input type = "checkbox" id = "deprimido" class = "emocao-checkbox" />
                                <label for = "deprimido" class = "emocao-label">Deprimido</label>
                            <input type = "checkbox" id = "estressado" class = "emocao-checkbox" />
                                <label for = "estressado" class = "emocao-label">Estressado</label>
                            <input type = "checkbox" id = "ansioso" class = "emocao-checkbox" />
                                <label for = "ansioso" class = "emocao-label">Ansioso</label>
                        </div>
                        <div class = "emocoes-row">
                            <input type = "checkbox" id = "solidao" class = "emocao-checkbox" />
                                <label for = "solidao" class = "emocao-label">Solidão</label>
                            <input type = "checkbox" id = "frustrado" class = "emocao-checkbox" />
                                <label for = "frustrado" class = "emocao-label">Frustrado</label>
                            <a href="/sintomuito" class = "botao-seta">
                                <img src = {arrow} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questionario1