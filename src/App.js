import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/Home/home';
import Login from './components/Login/login'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/home" element={<Home/>}>
      </Route>
      <Route exact path="/login" element={<Login/>}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
