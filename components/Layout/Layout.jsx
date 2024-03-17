import React from "react"
import { Outlet } from "react-router-dom"

import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"

import "./Layout.css"

export default function Layout(){
    return(
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}