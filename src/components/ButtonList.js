import React from "react";
import Button from "./Button";

const ButtonList = () => {
  
  const list = ["All", "Movies", "Songs", "Live", "Food", "Games", "News", "Sports", "Vlogs","Cooking","Cartoon"];

  return (
    <div className="flex">
      
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
