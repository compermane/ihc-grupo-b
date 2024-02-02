import React, { Component } from 'react';
import "./components/styles/Global.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Confirmacao from './components/Confirmacao';
import Questionario1 from './components/Questionario1';
import SintoMuito from './components/SintoMuito';
import Selecao from './components/Selecao'
import Feliz from './components/Feliz'
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Final from './components/final-page';

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
          <Route path="/" exact element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/final-page" element={<Final />} />
          <Route exact path="" element={<Confirmacao emocao = "triste"/>} />
          <Route path="/confirmacaoFeliz" element={<Confirmacao emocao = "feliz"/>} />
          <Route path="/confirmacaoAnsioso" element={<Confirmacao emocao = "ansioso"/>} />
          <Route path="/confirmacaoRaiva" element={<Confirmacao emocao = "raiva"/>} />
          <Route path="/confirmacaoTedio" element={<Confirmacao emocao = "tedio"/>} />
          <Route path="/triste" element={<Questionario1 emocao = "triste"/>} />
          <Route path="/raiva" element={<Questionario1 emocao = "raiva"/>} />
          <Route path="/tedio" element={<Questionario1 emocao = "entediado"/>} />
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