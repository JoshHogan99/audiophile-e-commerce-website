import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import ScrollToTop from "./components/ScrollToTop.jsx"
import Layout from "./components/Layout/Layout.jsx"
import Home from "./pages/Home/Home.jsx"
import Products from "./components/Products/Products.jsx"

import './App.css'

export default function App() {
    return(
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="headphones" element={<Products products="headphones" />}>
                    </Route>
                    <Route path="speakers" element={<Products products="speakers" />}>
                    </Route>
                    <Route path="earphones" element={<Products products="earphones" />}>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}