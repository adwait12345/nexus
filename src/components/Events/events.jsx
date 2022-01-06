import React from "react";
import './eve.css';



function Eventts() {
    return (
        <>
        <div className="eventsarray">
            <div className="quarkup">
             <h3>Events</h3>
            </div>
            <div className="quarkdown">
                
                <div className="eventimg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ys24oHtzvNdXDuGrR--JSrQqJqFyVqfJbg&usqp=CAU" alt="" />
                </div>
                <div className="eventdesc">
                 <h4> Carnival at SGGS</h4>
                 <p>4K members particapating</p>
                 <button className="joinevent">Join</button>
                </div>
            </div>
        </div>
        </>
    )}

    export default Eventts;