import React from 'react';

import './App.css';
import {Counter} from './components/Counter/Counter';
import {RouterCounter} from './RouterComponents/Counter/RouterCounter';
import {HashRouter} from 'react-router-dom';

function App() {
  return (
       <HashRouter>
          <div className="App">
              <Counter/>
              <RouterCounter/>
          </div>
      </HashRouter>
  );
}

export default App;
