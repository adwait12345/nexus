import React from "react";
import Online from "./online";
import './online.css';
import { Users } from "../Dummydata/dummydata";


function Onlinefriends() {
    return (
<div className="onlineFriends">
    <h4 className="tit">Online Friends</h4>
    <div className="array-online">
    {Users.map((u) => (
        
            <Online key={u.id} user={u} />
          ))}

    </div>
</div>
    )}

    export default Onlinefriends;