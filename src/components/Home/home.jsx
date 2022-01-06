import React from 'react'
import Navbar from '../Navbar';
import Infinite from '../infinite-scroll';
import WhatsHapp from '../WhatsHapp/Whats';
import Onlinefriends from '../online-friends/online-friends';
import CreatePost from '../post/create-post';
import Eventts from '../Events/events';
export default function Home() {
    return (
        <>
        <header className='comp1'> <Navbar /> </header>
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
            </section>     </> 
    )
}
