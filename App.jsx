import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import ScrollToTop from "./components/ScrollToTop.jsx"

import Layout from "./components/Layout/Layout.jsx"
import Home from "./pages/Home/Home.jsx"

import Products from "./components/Products/Products.jsx"
import Product from "./components/Product/Product.jsx"

import './App.css'

export default function App() {
    return(
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="headphones" element={<Products />} />
                    <Route path="headphones/:id" element={<Product />} />
                    <Route path="speakers" element={<Products />} />
                    <Route path="speakers/:id" element={<Product />} />
                    <Route path="earphones" element={<Products />} />
                    <Route path="earphones/:id" element={<Product />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}