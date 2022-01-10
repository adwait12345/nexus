import logo from './logo.svg';
import React from 'react';
import Profile from './components/Profile/Profile';
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
// import Chat from './components/chat/chat';



function App() {

  const {user} = useContext(AuthContext)
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={user ?<Home/> : <Login/>}> </Route>
        
     
      <Route exact path="/login" element={user ?<Navigate to="/"/> :<Login/>}>
      </Route>     
       <Route exact path="/profile" element={ user?<Profile to="/profile"/>  :<Login/>}>
      </Route>

      {/* <Route exact path="/chat" element={ user?<Chat to="/chat"/>  :<Login/>}>
      </Route> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
