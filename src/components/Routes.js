import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Confirmacao from './Confirmacao';
import Questionario1 from './Questionario1';
import SintoMuito from './SintoMuito';
import Selecao from './Selecao'
import Feliz from './Feliz'


const routes = () => {
    <Router>
        <Routes>
        <Route exact path="" element={<Confirmacao emocao = "triste"/>} />
        <Route path="/triste" element={<Questionario1 emocao = "triste"/>} />
        <Route path="/raiva" element={<Questionario1 emocao = "raiva"/>} />
        <Route path="/entediado" element={<Questionario1 emocao = "entediado"/>} />
        <Route path="/ansioso" element={<Questionario1 emocao = "ansioso"/>} />
        <Route path="/sintomuito" element={<SintoMuito />} />
        <Route path="/selecao" element={<Selecao />} />
        <Route path="/feliz" element={<Feliz />} />
        </Routes>
  </Router>
}

export default routes;