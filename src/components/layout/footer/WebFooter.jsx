import React from 'react'
import { NavLink } from 'react-router-dom'

const WebFooter = () => {
    return (
        <footer className="navbar navbar-expand navbar-light">
            <div className="container-fluid justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/policy">Terms of Service</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/mission">Mission</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/pricing">Pricing</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/affiliates">Affiliates</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to="/legal">Legal</NavLink>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default WebFooter
