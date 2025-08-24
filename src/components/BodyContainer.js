import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";



const BodyContainer= ()=>{
    return (
        <div className="col-span-11">
          
           <ButtonList/>
           <VideoContainer/>
           
        </div>
    )

}

export default BodyContainer