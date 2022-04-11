import React from 'react';
import './App.css';
import Home from './Home.js'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import routes from './routes'


class App extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
  return (
<Router>

 {/* Hand in Routes the lazy way for now */}
    <Route exact path = '/home' render = {props => <Home {...props} activeRoute = {0} />} />
    <Redirect exact path="/" to="/home" />


</Router>
  );}
}

export default App;
