import React from 'react'
import Navbar from '../Navbar';
import Infinite from '../infinite-scroll';
import WhatsHapp from '../WhatsHapp/Whats';
import Onlinefriends from '../online-friends/online-friends';
import CreatePost from '../post/create-post';
import Eventts from '../Events/events';
import './home.css';
export default function Home() {
    return (
        <>
        <header className='comp1'> <Navbar /> </header>
        
        <div className="master">
        <div className="left-section">
             <div className='comp6' >
             <Eventts />
            </div>  
        </div>
        <div className="middle-section">
           <div className='comp4'>
           <CreatePost />
            </div>  
            <div className='comp2'>
              <Infinite /> 
              </div> </div>
              <div className="right-section">
             
             <div className='comp3' >
             <WhatsHapp />
            </div>    
             <div className='comp5' >
             <Onlinefriends />
            </div> 
      </div>
      </div>
    </> 
    )
}
