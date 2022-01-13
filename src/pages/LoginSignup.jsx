import React from 'react';
import useLoginSignup from '../Hooks/useLoginSignup';
import useHandleChange from '../functions/useHandleChange';
import { TextField, InputAdornment, Checkbox, CircularProgress } from '@mui/material';
import { FaEyeSlash, FaEye, FaFacebookF, FaTwitter, FaGoogle, FaYahoo } from 'react-icons/fa';
import { SiAol, SiMyspace } from 'react-icons/si'
import { Link, } from 'react-router-dom';

const LoginSignup = () => {
    const login = useLoginSignup();
    const { handleTextFeilds, handleCheckBox, handlePassIcon } = useHandleChange();
    return (
        <div className="LoginSignup">
            <div className="main">
                <div className="form loginForm" ref={login.loginForm}>
                    <div className="header">
                        <h1>Login</h1>
                    </div>
                    <div className="body">
                        <TextField error={login.LoginValidator.email.error} helperText={login.LoginValidator.email.helperText} label="Email" className="text-feild" variant="standard" name='email'
                            value={login.loginValues.email} onChange={e => handleTextFeilds(e, login.setloginValues)} />
                        <TextField error={login.LoginValidator.password.error} helperText={login.LoginValidator.password.helperText} label="Password" type={login.PassIcon ? "text" : "password"} className="text-feild"
                            variant="standard" name='password' value={login.loginValues.password} onChange={e =>
                                handleTextFeilds(e, login.setloginValues)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        {
                                            login.PassIcon ?
                                                <FaEye className="showpass" onClick={() => handlePassIcon(login.PassIcon, login.setPassIcon)} /> :
                                                <FaEyeSlash className="showpass" onClick={() => handlePassIcon(login.PassIcon, login.setPassIcon)} />
                                        }
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Link to="#">Forgot Password?</Link>
                        {
                            login.isLoading ? (
                                <button type="button" className="bttn" disabled>
                                    <CircularProgress color="inherit" />
                                </button>
                            ) : (
                                <button type="button" className="bttn" onClick={login.loginSubmit}>Login</button>
                            )
                        }
                    </div>
                    <div className="footer">
                        <h5 className="text-muted mt-2">Login With Social Accounts</h5>
                        <ul>
                            <li>
                                <FaFacebookF />
                            </li>
                            <li>
                                <FaTwitter />
                            </li>
                            <li>
                                <SiMyspace />
                            </li>
                            <li>
                                <FaGoogle />
                            </li>
                            <li>
                                <SiAol />
                            </li>
                            <li>
                                <FaYahoo />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="form signupForm active" ref={login.signupForm}>
                    <div className="header">
                        <h1>Signup</h1>
                    </div>
                    <div className="body">
                        <TextField error={login.SignupValidator.name.error} helperText={login.SignupValidator.name.helperText} label="Name" className="text-feild" variant="standard" name="name" value={login.signupValues.name} onChange={e => handleTextFeilds(e, login.setsignupValues)} />
                        <TextField error={login.SignupValidator.email.error} helperText={login.SignupValidator.email.helperText} label="Email" className="text-feild" variant="standard" name="email" value={login.signupValues.email} onChange={e => handleTextFeilds(e, login.setsignupValues)} />
                        <TextField error={login.SignupValidator.password.error} helperText={login.SignupValidator.password.helperText} label="Password" type={login.PassIcon ? "text" : "password"} className="text-feild"
                            variant="standard" value={login.signupValues.password} onChange={e => handleTextFeilds(e, login.setsignupValues)}
                            name='password' InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        {
                                            login.PassIcon ?
                                                <FaEye className="showpass" onClick={() => handlePassIcon(login.PassIcon, login.setPassIcon)} /> :
                                                <FaEyeSlash className="showpass" onClick={() => handlePassIcon(login.PassIcon, login.setPassIcon)} />
                                        }
                                    </InputAdornment>
                                ),
                            }} />
                        <div className="policy">
                            <Checkbox checked={login.signupValues.policy} name="policy" onChange={e => handleCheckBox(e, login.setsignupValues, login.signupValues.policy)} />
                            <span>
                                I have readd and agree with
                                <Link to="#"> Privacy Policy </Link>
                                and
                                <Link to="#"> Terms of Service </Link>
                            </span>
                            <div className='text-danger'>
                                {
                                    login.SignupValidator.policy.helperText
                                }
                            </div>
                        </div>
                        {
                            login.isLoading ? (
                                <button type="button" className="bttn" disabled>
                                    <CircularProgress color="inherit" />
                                </button>
                            ) : (
                                <button type="button" className="bttn" onClick={login.SingupSubmit} >Signup</button>
                            )
                        }
                    </div>
                </div>
                <div className="overlay" ref={login.overLay}>
                    <div className="content login">
                        <div className="header">
                            <h1>One of US?</h1>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, deleniti. Impedit adipisci non </p>
                        </div>
                        <div className="footer">
                            <input type="button" value="CLICK Here" onClick={login.handleContent} />
                        </div>
                    </div>
                    <div className="content signup">
                        <div className="header">
                            <h1>Wana be One of us?</h1>
                        </div>
                        <div className="body">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, deleniti. Impedit adipisci non </p>
                        </div>
                        <div className="footer">
                            <input type="button" value="CLICK Here" onClick={login.handleContent} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup