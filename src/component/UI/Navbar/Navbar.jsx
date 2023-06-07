import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";

function Navbar() {
    const {setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.setItem('isAuth', 'false');
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>Sign Out</MyButton>
            <Link to="/about">About Page</Link>
            <Link to="/posts">Posts Page</Link>
        </div>
    );
}

export default Navbar;
