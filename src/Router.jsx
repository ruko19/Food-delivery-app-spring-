import React from "react";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login"
import { Register } from "./Pages/Register";
import { BrowserRouter, createBrowserRouter, Route, createRoutesFromElements, Routes } from "react-router-dom"

const Router = () => {

    return (

        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Register />} />
            </Routes>

        </BrowserRouter>
    )

}

export { Router }
