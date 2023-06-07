import React from "react";
import classes from "./MyModal.module.css";
function MyModal({ children, active, setActive }) {
    const activeClasses = [classes.myModal];

    if (active) {
        activeClasses.push(classes.active);
    }

    return (
        <div
            className={activeClasses.join(" ")}
            onClick={() => setActive(false)}
        >
            <div
                className={classes.myModalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}

export default MyModal;
