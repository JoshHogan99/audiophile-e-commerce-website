import React from "react"
import { NavLink } from "react-router-dom"

import logoIcon from "../../assets/shared/desktop/logo.svg"
import facebookIcon from "../../assets/shared/desktop/icon-facebook.svg"
import instagramIcon from "../../assets/shared/desktop/icon-instagram.svg"
import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg"

import "./Footer.css"

export default function Footer() {
    return(
        <footer>
            <div className="divider"></div>

            <div className="footer">
                <div className="navlinks-container">
                    <NavLink to="/">
                        <img src={logoIcon} alt="Logo" className="footer-logo" /> 
                    </NavLink>

                    <div className="navlinks">
                        <NavLink to="/">HOME</NavLink>
                        <NavLink to="headphones">HEADPHONES</NavLink>
                        <NavLink to="speakers">SPEAKERS</NavLink>
                        <NavLink to="earphones">EARPHONES</NavLink>
                    </div>
                </div>

                <div className="info-container">
                    <p className="text">
                        Audiophile is an all in one stop to fulfill your audio needs. 
                        We're a small team of music lovers and sound specialists 
                        who are devoted to helping you get the most 
                        out of personal audio. Come and 
                        visit our demo facility - 
                        we're open 7 days a week.
                    </p>

                    <div className="info">
                        <p className="copyright">
                            Copyright 2021. All Rights Reserved
                        </p>

                        <div className="social-links">
                            <img src={facebookIcon} alt="Facebook Logo" />

                            <img src={instagramIcon} alt="Instagram Logo" />

                            <img src={twitterIcon} alt="Twitter Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}