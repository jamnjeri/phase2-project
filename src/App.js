import React from 'react';
import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Countries from './views/Countries';
import Map from './views/Map';
import Signin from './views/Signin';
import Signup from './views/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='countries' element={ <Countries/>}/>
        <Route path='map' element={ <Map/>}/>
        <Route path='sign-in' element={ <Signin/> }/>
        <Route path='sign-up' element={ <Signup/> }/>
      </Routes>
      
    </div>
  );
}

export default App;
