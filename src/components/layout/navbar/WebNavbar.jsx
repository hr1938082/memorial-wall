import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdSearch, MdMic, MdOutlineSettings, MdLogout, MdClose } from 'react-icons/md';
import { BsQuestionLg } from 'react-icons/bs';
import { GiCandleLight } from 'react-icons/gi';
import { Tooltip, Menu, MenuItem, Avatar, Divider, ListItemIcon, } from '@mui/material';
import user from '../../../images/userDummy.png'
import { UserContext } from '../../../Context/UserContext';
import AdvanceSearchLg from './AdvanceSearchLg';
const WebNavbar = () => {
    const { User, ClearLocalStorage } = useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className=''>
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">Memorial Wall</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Memorial Wall</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><MdClose /></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <NavLink className="nav-link d-block d-lg-none" activeClassName="active" to="/advancesearch">
                                        Advance Search
                                    </NavLink>
                                    <div className='adSearch d-lg-flex d-none' data-bs-toggle="collapse" data-bs-target="#AdSearch" aria-expanded="false" aria-controls="AdSearch">
                                        Advance Search
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="search">
                                        <MdSearch style={{ fontSize: '1.3rem' }} />
                                        <input type="text" name="search" className="" />
                                        <MdMic style={{ fontSize: '1.3rem' }} />
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <GiCandleLight
                                        style={{
                                            color: 'white',
                                            fontSize: '20px'
                                        }}
                                    />
                                </li>
                                <li className="nav-item">
                                    <select className="form-select" defaultValue={0} aria-label=".form-select-sm example">
                                        <option value="0" disabled>Wall</option>
                                        <option value="1">Community</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/funds">
                                        Fund
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" to="/memorialize">
                                        Memorialize
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <Tooltip title="setting">
                                        <NavLink className="nav-link" activeClassName="active" to="/setting">
                                            <MdOutlineSettings /> <span className="d-inline d-lg-none">Setting</span>
                                        </NavLink>
                                    </Tooltip>
                                </li>
                                <li className="nav-item">
                                    <Tooltip title="FAQ">
                                        <NavLink className="nav-link" activeClassName="active" to="/FAQ">
                                            <BsQuestionLg /> <span className="d-inline d-lg-none">FAQ</span>
                                        </NavLink>
                                    </Tooltip>
                                </li>
                                <li className="nav-item">
                                    <Tooltip title="Profile">
                                        <div>
                                            <div className="profile d-none d-lg-block" onClick={handleClick}>
                                                <img src={user} alt="User Profile" />
                                            </div>
                                            <Link to='/profile' style={{ textDecoration: 'none', color: 'white' }} >
                                                <div className="profile d-block d-lg-none">
                                                    <img src={user} alt="User Profile" />
                                                </div>
                                                <div className="d-block d-lg-none name"> {User.user.name}</div>
                                            </Link>
                                        </div>
                                    </Tooltip>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        onClick={handleClose}
                                        PaperProps={{
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&:before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        }}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <MenuItem>
                                            <Link to="/profile" style={{ display: 'flex', textDecoration: 'none', color: 'black' }}>
                                                <Avatar >
                                                    <img src={user} alt="User Profile" style={{ height: '100%' }} />
                                                </Avatar>
                                                {User.user.name}
                                            </Link>
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem onClick={ClearLocalStorage}>
                                            <ListItemIcon>
                                                <MdLogout fontSize="small" />
                                            </ListItemIcon>
                                            Logout
                                        </MenuItem>
                                    </Menu>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="collapse advanceSearchPanel shadow" id="AdSearch">
                <AdvanceSearchLg />
            </div>
        </div>
    )
}

export default WebNavbar
