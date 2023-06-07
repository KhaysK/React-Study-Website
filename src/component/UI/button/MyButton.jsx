import React from "react";
import clasess from "./MyButton.module.css";

function MyButton({ children, ...props }) {
    return (
        <button {...props} className={clasess.myBtn}>
            {children}
        </button>
    );
}

export default MyButton;