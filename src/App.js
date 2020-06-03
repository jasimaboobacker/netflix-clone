import React from 'react';
import './css/App.css';
import Main from './pages'
import { Switch, BrowserRouter as Router, Route  } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Router>
        <Route path="/" component={Main}></Route>
      </Router>
    </Switch>
  );
}

export default App;
