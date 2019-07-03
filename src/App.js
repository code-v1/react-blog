
import React, {Component} from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Main from './Main'
import Login from '../src/Login/Login'
import ProtectedRoute from '../src/Login/ProtectedRoute'

class App extends Component {
  state = {
    isLoggedIn : false
  }


  handleLogin = () => {
    this.setState({ isLoggedIn: true})
  }


  render ()
{   


  
  return (
  <div className="container">
      <Router>
       <Switch>
         <Route 
         exact path="/" 
         component={Login} 
         />
         <ProtectedRoute 
         path="/main" 
         isLoggedIn={this.state.isLoggedIn}
         component={Main}
          />
       </Switch>
      </Router>

    </div>
  );
}
};

export default App;