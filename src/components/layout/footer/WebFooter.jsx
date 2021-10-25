import React from 'react'
import { NavLink } from 'react-router-dom'

const WebFooter = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light fixed-bottom">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/">Home</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default WebFooter
