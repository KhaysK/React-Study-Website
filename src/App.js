import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./component/UI/Navbar/Navbar";
import AppRouter from "./component/AppRouter";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";

function App() {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("isAuth") === "true") {
            setIsAuth(true);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isAuth,
                setIsAuth,
            }}
        >
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
