import React from 'react';
import './App.css';
import Home from './Home.js'
import {BrowserRouter as Router, Routes, Navigate, Route} from 'react-router-dom'
import routes from './routes'


class App extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
  return (
<Router>
  {/* <Routes>

    <Route exact path = '/' render = {props => <Home {...props} activeRoute = {0} />} />
    <Route exact path="/" to="/home" />
    </Routes> */}
  <Home />
</Router>
  );}
}

export default App;
