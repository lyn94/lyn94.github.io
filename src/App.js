import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Globalstyle from './components/styled/Global';
import MainHome from './components/main/MainHome';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Globalstyle />
        <MainHome />
      </div>
    </Router>
  );
};

export default App;