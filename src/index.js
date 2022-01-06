import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import Navbar from './components/Navbar';


// import Infinite from './components/infinite-scroll';
// import WhatsHapp from './components/WhatsHapp/Whats';
// import Onlinefriends from './components/online-friends/online-friends';
// import CreatePost from './post/create-post';
// import Eventts from './components/Events/events';
import reportWebVitals from './reportWebVitals';
// import { Posts } from "./Dummydata/dummydata";


ReactDOM.render(
  <React.StrictMode>
   {/* <header className='comp1'> <Navbar /> </header>
   <section className='comp4'>
   <CreatePost />
    </section>  
     
    <section className='comp2'>
      <Infinite /> 
      
    </section>  
     <section className='comp3' >
     <WhatsHapp />
    </section>    
     <section className='comp5' >
     <Onlinefriends />
    </section> 
         <section className='comp6' >
     <Eventts />
    </section>        
      <section className='comp6' >
     <Eventts />
    </section>      
<Login />  */}
     
    
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
