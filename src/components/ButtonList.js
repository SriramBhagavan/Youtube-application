import React from "react";
import Button from "./Button";

const ButtonList = () => {
  // Step 1: Create a list of button names
  const list = ["All", "Movies", "Songs", "Live", "Food", "Games", "News", "Sports", "Vlogs","Cooking","Cartoon"];

  return (
    <div className="flex">
      {/* Step 2: Loop through the list and render Button for each item */}
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
