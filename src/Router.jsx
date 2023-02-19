import React from "react";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login"
import { Register } from "./Pages/Register";
import { BrowserRouter, createBrowserRouter, Route, createRoutesFromElements, Routes } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRouted/ProtectedRouter";
import { Restaurant } from "./components/Restaurant";

const Router = () => {

    return (

        <BrowserRouter >

            <div >
                <Routes>

                    <Route path="/home" element={<ProtectedRoute>
                        <Home />
                    </ProtectedRoute>} />
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/hola" element={<Restaurant />} />
                </Routes>
            </div>

        </BrowserRouter>
    )

}

export { Router }
