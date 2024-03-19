import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import ScrollToTop from "./components/ScrollToTop.jsx"

import Layout from "./components/Layout/Layout.jsx"
import Home from "./pages/Home/Home.jsx"

import Headphones from "./pages/Products/Headphones/Headphones.jsx"
import HeadphoneDetail from "./pages/Products/HeadphoneDetail/HeadphoneDetail.jsx"

import Speakers from "./pages/Products/Speakers/Speakers.jsx"
import SpeakersDetail from "./pages/Products/SpeakersDetail/SpeakersDetail.jsx"

import Earphones from "./pages/Products/Earphones/Earphones.jsx"
import EarphonesDetail from "./pages/Products/EarphonesDetail/EarphonesDetail.jsx"

import './App.css'

export default function App() {
    return(
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="headphones" element={<Headphones />} />
                    <Route path="headphones/:id" element={<HeadphoneDetail />} />
                    <Route path="speakers" element={<Speakers />} />
                    <Route path="speakers/:id" element={<SpeakersDetail />} />
                    <Route path="earphones" element={<Earphones />} />
                    <Route path="earphones/:id" element={<EarphonesDetail />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>
    )
}