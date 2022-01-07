import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './components/Home/home';
import Login from './components/Login/login'
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";



function App() {

  const {user} = useContext(AuthContext)
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/home" element={user ?<Home/> : <Login/>}>
        
      </Route>
      <Route exact path="/login" element={user ?<Navigate to="/home"/> :<Login/>}>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
