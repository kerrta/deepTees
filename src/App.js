import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Home from './components/home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
    </Fragment>
  )
}

export default App;
