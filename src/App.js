import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from'./containers/Home/home';
import Feed from './containers/Feed/feed';
import Profile from './containers/Profile/profile';
import About from './containers/AboutUs/about';
import News from './containers/News/news';
import SignIn from './containers/SignIn/signIn';
import Login from'./containers/Login/Login';
import Footer from './components/Footer/Footer';

const App = () => {

    return (
    <div> 
      <Router>
        <NavBar/>
        <div className="container">
            <Route exact path="/" component={Home}/>
            <Route path="/feed" component={Feed}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/about"component={About}/>
            <Route path="/news"component={News}/>
            <Route path="/signin"component={SignIn}/>
            <Route path="/login" component={Login}/>
        </div> 
      <Footer/>
      </Router> 
    </div>
  );
  }
  

export default App;
