import React, { Component } from 'react';
import "./components/styles/Global.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Confirmacao from './components/Confirmacao';
import Questionario1 from './components/Questionario1';
import SintoMuito from './components/SintoMuito';
import Selecao from './components/Selecao'
import Feliz from './components/Feliz'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  render() {
    return (
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
    );
  }
}

export default App;