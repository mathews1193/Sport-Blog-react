import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

class App extends React.Component {
  render(){
    return (
    <div>
      <div className="container">
          <Router>
            <Switch>
            </Switch>
          </Router> 
      </div>
    </div>
  );
  }
}
  

export default App;
