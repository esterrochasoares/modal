import React from "react";
function Button({text, handleClick}) {
  return (
    <>
       <button 
       onClick={handleClick}
       className=" px-2 py-1 my-6 rounded-md">{text}</button> 
    </>
  );
}

export default Button