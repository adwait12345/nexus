import React from 'react'
import './Profile.css';
import Navbar from '../Navbar';
// import WhatsHapp from '../WhatsHapp/Whats';
// import Onlinefriends from '../online-friends/online-friends';
// import profilephoto from './profile.jpeg'
import CreatePost from '../post/create-post';
// import coverphoto from './cover.jpg'
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
//  import Infinite from '../infinite-scroll';



export default function Profile() {
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const [user, setUser] = useState({});
const username = useParams().username;

useEffect(() => {
  const fetchUser = async () => {
    const res = await axios.get(`/users?username=${username}`);
    setUser(res.data);
  };
  fetchUser();
}, [username]);

    return (
        <div className='flex-container-profile'>
            <header className='comp1'> <Navbar /> </header>
            <div className='main-profile'>
                <div className='cover'>
                    <img src={
                         user.coverPicture
                         ? PF + user.coverPicture
                         : "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/nature-design.jpg"
                    } alt="cover" className='coverImage' />
                </div>
                <div className='display'>
                    <div className='dp-size'>
                        <img src={
                         user.profilePicture
                           ? PF + user.profilePicture
                          :  "https://www.howtogeek.com/wp-content/uploads/2021/07/Discord-Logo-Lede.png?height=200p&trim=2,2,2,2"
                        } alt="alt" className='dp' />
                    </div>
                </div>
                <div className='user-desc'>
                    <h2>{user.username}</h2>
                    <p>{user.desc}</p>
                </div>
                <div className='nav-profile'>
                    <nav>
                        <ul>
                            <li>Posts</li>
                            <li>About</li>
                            <li>Friends</li>
                            <li>Media</li>
                            <li>Groups</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='main-profile create-post-profile'>
                <div className='profile-sections left'>
                    Left Side
                </div>
                <div className='profile-sections right'>
                    <section ><CreatePost /></section>
        
                </div>
            </div>
        </div>
    )
}
