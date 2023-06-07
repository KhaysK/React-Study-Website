import React, { useContext } from "react";
import MyInput from "../component/UI/input/MyInput";
import MyButton from "../component/UI/button/MyButton";
import { AuthContext } from "../context";

function Login() {
    const {setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('isAuth', 'true');
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Email" />
                <MyInput type="password" placeholder="Password" />
                <MyButton>Sign In</MyButton>
            </form>
        </div>
    );
}

export default Login;
