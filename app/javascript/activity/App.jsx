import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
import Tiles from './Tiles';
import Question from './Question';
import Navbar from './Navbar';
import New from './New'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="navbar"><Navbar /></div>
      <div className="window">
        <div className="left-menu"><Route path='/activity' component={Question} /></div>
        <div className="center"><Route path='/activity' component={Tiles} />
                                <Route path='/new' component={New} /></div>
      </div>
      </BrowserRouter>  
    </div>
  )
}

export default App;
