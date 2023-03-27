import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Layout} from "../components/Layouts/Layout.js";
import {Home} from "../components/Pages/Home.js";
import {Login} from "../components/Pages/Login.js";
import {NoPage} from "../components/Pages/NoPage.js";
import {AppProvider} from "../Context/AuthProvider.js";

export const Router = () => {
    return (
        <>
            <BrowserRouter>
                <AppProvider>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<NoPage />} />
                        </Route>
                    </Routes>
                </AppProvider>
            </BrowserRouter>
        </>
    )
}