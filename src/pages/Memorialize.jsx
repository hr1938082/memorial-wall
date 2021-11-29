// import React, { useRef, useEffect, useState } from "react";
import { FormControlLabel, FormGroup, Switch, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import profileDummy from '../images/userDummy.png'
// let Zwibbler = window["Zwibbler"];

const Memorialize = () => {
    // const el = useRef();
    // useEffect(() => {
    //     const ctx = Zwibbler.create(el.current, {
    //         setFocus: false,
    //         showToolbar: true,
    //     })
    //     return () => {
    //         ctx.destroy();
    //     }
    // }, []);
    return (
        <div className="memorialize row m-0 justify-content-center">
            <div className="col-lg-11 col-xl-9 main p-0">
                <div className="d-flex align-items-end justify-content-center mt-4">
                    <div className="d-md-flex">
                        <FormGroup className="mx-2">
                            <h5>Profile</h5>
                            <FormControlLabel control={<Switch />} label="Private" />
                        </FormGroup>

                        <FormGroup className="mx-2">
                            <h5>Creator</h5>
                            <FormControlLabel control={<Switch />} label="Anonymous" />
                        </FormGroup>
                    </div>
                    <div className="d-md-flex">
                        <FormGroup className="mb-2 mx-2 d-none d-lg-block">
                            <Link to="/sketchboard" target="_blank"><Button variant="contained">Sketch Pad</Button></Link>
                        </FormGroup>
                        <FormGroup className="mb-2 mx-2">
                            <FormControl variant="standard" sx={{ m: 0, minWidth: 120 }}>
                                <InputLabel id="wall-for">Wall For</InputLabel>
                                <Select
                                    labelId="wall-for"
                                    defaultValue={""}
                                    // value={age}
                                    label="Age"
                                // onChange={handleChange}
                                >
                                    <MenuItem value={"Individual"}>Individual</MenuItem>
                                    <MenuItem value={"Pet"}>Pet</MenuItem>
                                    <MenuItem value={"Other"}>Other</MenuItem>
                                </Select>
                            </FormControl>
                        </FormGroup>
                    </div>
                    <div className="d-md-flex mx-3">
                        <div className="briksusedbyfont mb-2 mx-md-2">
                            Bricks:14
                        </div>
                        <div className="total mb-2 mx-md-2">
                            Total: <span>16$</span>
                        </div>
                    </div>
                </div>
                <div className="sketchpad">
                    <iframe src="http://localhost:8000/" title="staticHtml" frameBorder="0" style={{ width: '100%', height: '100%' }}></iframe>
                </div>
                <div className="d-flex justify-content-center flex-wrap my-3">
                    <div className="col-4 profile border">
                        <img src={profileDummy} className="img-fluid" alt="Profile" />
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 px-3">
                        <div className="mb-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className="form-control form-control-sm" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="nickname">Nick Name</label>
                            <input type="text" id="nickname" name="nickname" className="form-control form-control-sm" />
                        </div>
                        <div className="d-flex mb-3">
                            <div className="me-2">
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" name="city" className="form-control form-control-sm" />
                            </div>
                            <div className="ms-2">
                                <label htmlFor="state">State</label>
                                <input type="text" id="state" name="state" className="form-control form-control-sm" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address">Address</label>
                            <textarea name="address" id="address" className="form-control" cols="10" rows="5"></textarea>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-12 px-3">
                        <div className="mb-3">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" id="dob" name="dob" className="form-control form-control-sm" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dop">Date of Passed</label>
                            <input type="date" id="dop" name="dop" className="form-control form-control-sm" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="wall">Display on Wall</label>
                            <select name="wall" id="wall" defaultValue={""} className="form-control w-100">
                                <option value="community">Community Wall</option>
                                <option value="new-wall">New Wall</option>
                                <option value="existing-wall">Existing Wall</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-primary form-control">Create and CheckOut</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Memorialize
