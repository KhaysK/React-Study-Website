import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../pages/Error";
import { privateRoutes, publicRoutes } from "../router";
import Login from "../pages/Login";
import { AuthContext } from "../context";

function AppRouter() {
    const { isAuth } = useContext(AuthContext);
    return isAuth ? (
        <Routes>
            {privateRoutes.map((route) => (
                <Route
                    path={route.path}
                    element={route.component}
                    key={route.path}
                />
            ))}
            <Route path="*" element={<Error />} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map((route) => (
                <Route
                    path={route.path}
                    element={route.component}
                    key={route.path}
                />
            ))}
            <Route path="*" element={<Login />} />
        </Routes>
    );
}

export default AppRouter;
