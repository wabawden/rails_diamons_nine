import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
import Tiles from './Tiles';
import Question from './Question';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="left-menu"><Route path='/activity' component={Question} /></div>
      <div className="center"><Route path='/activity' component={Tiles} /></div>
      </BrowserRouter>  
    </div>
  )
}

export default App;
