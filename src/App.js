

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Footer from "./components/Footer";
import Main from './components/Main';
import Nav from './components/Nav';

class App extends Component{
  render(){
      return (
        <Router>
           <Nav/>
      
    

    <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/create" component={Create}/>
          <Route exact path="/edit:id" component={Edit}/>
           
        </Switch>
        <Footer/>
    </Router>
  );
}

}


export default App;
