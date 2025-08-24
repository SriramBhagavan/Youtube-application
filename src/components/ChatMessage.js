import React from "react";

const ChatMessage=({name,message})=>{
    return(
        <div className="flex items-center shadow-sm p-2 ">
         <img
          className="h-8 mr-2"
          alt="user"
          src="https://cdn-icons-png.flaticon.com/128/149/149071.png"
        />
        <span className="font-bold mr-2">{name}</span>
        <span>{message}</span>
        

        </div>
    )
}

export default ChatMessage