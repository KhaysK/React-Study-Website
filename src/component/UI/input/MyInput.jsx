import React from "react";
import clasess from "./MyInput.module.css";

function MyInput(props) {
    return (  
        <input className={clasess.myInput} {...props}/>
    );
}

export default MyInput;