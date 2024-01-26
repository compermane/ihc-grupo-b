import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Confirmacao from './components/Confirmacao';
import Questionario1 from './components/Questionario1';

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
          <Route path="/" element={<Confirmacao />} />
          <Route path="/questionario1" element={<Questionario1 />} />
        </Routes>
      </Router>
    );
  }
}

// const App = () => {
//   return (
//       <Router>
//         <Routes>
//           <Route path="/" element={<Confirmacao />} exact />
//           <Route path="/bruh" component={<Confirmacao />} />
//         </Routes>
//       </Router>
//   );
// }
export default App;