import React from "react";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login"
import { Register } from "./Pages/Register";
import { BrowserRouter, createBrowserRouter, Route, createRoutesFromElements, Routes } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRouted/ProtectedRouter";
import { RestaurantPage } from "./Pages/RestaurantPage";

const Router = () => {

    return (

        <BrowserRouter >

            <div className="   ">
                <Routes>
                    <Route path="/restaurant" element={<RestaurantPage />} />
                    <Route path="/home"
                        element={<ProtectedRoute>
                            <Home />
                        </ProtectedRoute>} />
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>

        </BrowserRouter>
    )

}

export { Router }
