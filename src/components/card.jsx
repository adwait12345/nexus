import React from "react";
import './style.css';
// import { useState } from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


function Card({post}) {
    const [like,setLike] = useState(post.likes.length)
  const [isLiked,setIsLiked] = useState(false)
  const [user,setUser] = useState({})
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
 useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, []); 

  useEffect(()=>{
    const fetchUser = async () =>{
const res = await axios.get(`users/${post.userId}`)
   setUser(res.data) 
}
fetchUser()

},[]);



const { user: currentUser } = useContext(AuthContext);


  const likeHandler =()=>{
    try {
        axios.put("/posts/" + post._id + "/like", { userId: currentUser._id });
      } catch (err) {}
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }
    console.log(post)
    //
    let menustatus = true;
    const Moremenu = ()=>{
if(menustatus === false){
  const element1=  document.getElementById(post.userId);
   
        element1.style.visibility = "hidden";

  
    menustatus = true;
}else{
 const element2=   document.getElementById(post.userId)
    
  
        element2.style.visibility = "visible";

   
    menustatus = false;
}
    }
    //
   return (
<>
<div className="container1">
    <div className="top">
        <div className="left1">
            <div className="profile">
            <img src={ user.profilePicture ? PF+user.profilePicture :" https://www.howtogeek.com/wp-content/uploads/2021/07/Discord-Logo-Lede.png?height=200p&trim=2,2,2,2"} alt=""/>

            <p style={{position: 'relative', fontFamily: 'Segoe UI', fontSize: '15px', padding:'0 3px 0 12px'}}>
            {user.username}
            </p>      <a style={{textDecoration:'none',fontSize: '13px',width:'50%'}} href="#">&#8226; Follow  </a> <p style={{fontSize:'13px'}}>{format(post.createdAt)}</p>     </div>
            <div  className="dots" style={{display:'flex', alignItems: 'center'}}>
            <svg id="1112" onClick={Moremenu} aria-label="More options" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6.5" cy="12" r="1.5"></circle><circle cx="17.5" cy="12" r="1.5"></circle></svg>

           
            </div>     
             {/* <div id={post.userId} className="extension-menu">
                 <li>Edit post</li>
                 <li>Delete post </li>
             </div> */}
        </div>
    </div>
    <div className="img">
    <img onDoubleClick={likeHandler} style={{width: "99%",objectFit:"cover", height: "100%"}} id="photo" src={PF + post.img} alt=""/>

    </div>
    <div className="buttons">
    <div class="left">
        <div class="like" 
        style={{display: "flex",alignItems: "center"}}>
            <svg onClick={likeHandler} aria-label="Like" class="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
        
        </div>
        <div class="commentQ"
        style={{display: 'flex',alignItems:'center'}}
        
        >
            <svg aria-label="Comment" class="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
            
        </div>
        <div class="share"
        style={{display: 'flex',alignItems: 'center'}}
        >
            <svg aria-label="Share Post" class="_8-yf5 " color="#8e8e8e" fill="#8e8e8e" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
        </div></div>
        <div class="right">
            <div class="save"
            style={{display: 'flex',alignItems: 'center'}}
        
            >
                <svg aria-label="Saved" class="_8-yf5 " color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 32 32" width="16"><path d="M28.7 32c-.4 0-.8-.2-1.1-.4L16 19.9 4.4 31.6c-.4.4-1.1.6-1.6.3-.6-.2-.9-.8-.9-1.4v-29C1.8.7 2.5 0 3.3 0h25.4c.8 0 1.5.7 1.5 1.5v29c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM4.8 3v23.9l9.4-9.4c.9-.9 2.6-.9 3.5 0l9.4 9.4V3H4.8z"></path></svg>
            </div>
        </div>
    </div>
    <div className="l-c">
      {like} <span>likes</span>  {post.comment} <span>Comments</span>
        </div>
    
    <div className="txt">
    {post?.desc}
    </div>
    <div className="comment">
    <div class="emoji">
            <svg aria-label="Emoji" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg>
        </div>
        <div class="comment-inp">
            <input class="inp" type="text" placeholder="Add a comment..."/>
        </div>
    </div>
</div>
</>
   )









}
export default Card;

