import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from'./containers/Home/home';
import Feed from './containers/Feed/feed';
import Profile from './containers/Profile/profile';
import About from './containers/AboutUs/about';
import News from './containers/News/news';
import SignIn from './containers/SignIn/signIn';
import SignUp from'./containers/SignUp/signUp';

class App extends Component {
  render(){
    return (
    <div>
      <div className="container">
          <Router>
            <Switch>
            <Route exact path="/" component={Home}>
                <Home/>
            </Route>
            <Route path="/feed" component={Feed}>
                <Feed/>
            </Route>
            <Route path="/profile" component={Profile}>
                <Profile/>
              </Route>
              <Route path="/about"component={About}>
                <About/>
              </Route>
              <Route path="/news"component={News}>
                <News/>
              </Route>
              <Route path="/signin"component={SignIn}>
                <SignIn/>
              </Route>
              <Route path="/signup" component={SignUp}>
                <SignUp/>
            </Route>
            </Switch>
          </Router> 
      </div>
    </div>
  );
  }
}
  

export default App;
