import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from'./containers/Home/home';

class App extends React.Component {
  render(){
    return (
    <div>
      <div className="container">
        <Home/>
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
