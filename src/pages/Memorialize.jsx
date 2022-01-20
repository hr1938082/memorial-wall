import React from "react";
import { FormControlLabel, FormGroup, Switch, Button, FormControl, InputLabel, Select, MenuItem, Modal, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useMemorialize from "../Hooks/useMemorialize";
import { MdEdit } from 'react-icons/md';
import { CircularProgress } from "@mui/material";
import { iframeHost } from "../Constants";

const Memorialize = () => {

    const { Values, isLoading, handleChangeSwitch, handleChange, ImgPicker, handlePicker, handleChangeImage, GetSelect, ExistingWall, DisplayOnWall, handleSubmit, handleChangeDisplayOnWall, handleChangeExistingWall, open, style, handleClose, SaveLoader, WallName } = useMemorialize();

    return (

        GetSelect.isLoading ? (
            <div className="row m-0">
                <div className="col-12 d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 112px)' }}>
                    <CircularProgress />
                </div>
            </div>
        ) : (
            <div className="memorialize row m-0 justify-content-center">
                <div className="col-lg-11 col-xl-9 main p-0">
                    <div className="d-flex align-items-end justify-content-center mt-4">
                        <div className="d-md-flex">
                            <FormGroup className="mx-2">
                                <h5>Profile</h5 >
                                <FormControlLabel control={<Switch checked={Values.profile} name="profile" onChange={handleChangeSwitch} />} label="Private" />
                            </FormGroup >

                            <FormGroup className="mx-2">
                                <h5>Creator</h5>
                                <FormControlLabel control={<Switch checked={Values.creator} name="creator" onChange={handleChangeSwitch} />} label="Anonymous" />
                            </FormGroup>
                        </div >
                        <div className="d-md-flex">
                            <FormGroup className="mb-2 mx-2 d-none d-lg-block">
                                <Link to="/sketchboard"><Button variant="contained">Sketch Pad</Button></Link>
                            </FormGroup>
                            <FormGroup className="mb-2 mx-2">
                                <FormControl variant="standard" sx={{ m: 0, minWidth: 120 }}>
                                    <InputLabel id="wall-for">Wall For</InputLabel>
                                    <Select
                                        labelId="wall-for"
                                        defaultValue={""}
                                        value={Values.memorial_for}
                                        label="Wall For"
                                        name="memorial_for"
                                        onChange={handleChange}
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
                    </div >
                    <div className="sketchpad">
                        <iframe src={`${iframeHost}/${WallName}`} id="mainIframe" title="staticHtml" frameBorder="0" style={{ width: '100%', height: '100%' }}></iframe>
                    </div>
                    <div className="d-flex justify-content-center flex-wrap my-3">
                        <div className="col-4 profile border">
                            <img src={Values.prevImage} className="img-fluid" alt="Profile" />
                            <input type="file" name="image" className="d-none" ref={ImgPicker} onChange={handleChangeImage} />
                            <button className="img-btn" onClick={handlePicker}>
                                <MdEdit className="edit-icon" />
                            </button>
                        </div>
                        <div className="col-lg-4 col-md-12 col-12 px-3">
                            <div className="d-flex mb-3">
                                <div className="mb-3 me-1">
                                    <label htmlFor="first_name">First name</label>
                                    <input type="text" name="first_name" value={Values.first_name} onChange={handleChange} className="form-control form-control-sm" />
                                </div>
                                <div className="mb-3 ms-1">
                                    <label htmlFor="lasr_name">Last name</label>
                                    <input type="text" name="last_name" value={Values.last_name} onChange={handleChange} className="form-control form-control-sm" />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="nickname">Nick Name</label>
                                <input type="text" id="nickname" name="nick_name" value={Values.nick_name} onChange={handleChange} className="form-control form-control-sm" />
                            </div>
                            <div className="d-flex mb-3">
                                <FormGroup className="me-2 w-50">
                                    <FormControl variant="standard" sx={{ m: 0, minWidth: 120 }}>
                                        <InputLabel id="state">State</InputLabel>
                                        <Select
                                            labelId="state"
                                            defaultValue={""}
                                            value={Values.state}
                                            label="state"
                                            name="state"
                                            onChange={handleChange}
                                        >
                                            {
                                                GetSelect.state.map((val, index) => {
                                                    return (
                                                        <MenuItem value={val.id} key={index}>{val.name}</MenuItem>
                                                    );
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup className="me-2 w-50">
                                    <FormControl variant="standard" sx={{ m: 0, minWidth: 120 }}>
                                        <InputLabel id="city">City</InputLabel>
                                        <Select
                                            labelId="city"
                                            defaultValue={""}
                                            value={Values.city}
                                            label="city"
                                            name="city"
                                            onChange={handleChange}
                                        >
                                            {
                                                GetSelect.city.map((val, index) => {
                                                    return (
                                                        <MenuItem value={val.id} key={index}>{val.name}</MenuItem>
                                                    );
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </FormGroup>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address">Address</label>
                                <textarea name="address" id="address" value={Values.address} onChange={handleChange} className="form-control" cols="10" rows="5"></textarea>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-12 px-3">
                            <div className="mb-3">
                                <label htmlFor="dob">Date of Birth</label>
                                <input type="date" id="dob" name="birthday" value={Values.birthday} onChange={handleChange} className="form-control form-control-sm" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dop">Date of Passed</label>
                                <input type="date" id="dop" name="pass_date" value={Values.pass_date} onChange={handleChange} className="form-control form-control-sm" />
                            </div>
                            <FormGroup className="mb-3">
                                <FormControl variant="standard" sx={{ m: 0, minWidth: 120 }}>
                                    <InputLabel id="displayOnWall">Display on Wall</InputLabel>
                                    <Select
                                        labelId="displayOnWall"
                                        defaultValue={""}
                                        label="displayOnWall"
                                        name="displayOnWall"
                                        value={DisplayOnWall}
                                        onChange={handleChangeDisplayOnWall}
                                    >
                                        <MenuItem value="new">New Wall</MenuItem>
                                        <MenuItem value="community">Community Wall</MenuItem>
                                        <MenuItem value="existing">Existing Wall</MenuItem>
                                    </Select>
                                </FormControl>
                            </FormGroup>
                            <FormGroup className="mb-3 d-none" id="existingWallDropDown">
                                <FormControl variant="standard" sx={{ m: 0, minWidth: 120 }}>
                                    <InputLabel id="existingWall">Existing Walls</InputLabel>
                                    <Select
                                        labelId="existingWall"
                                        defaultValue={""}
                                        label="existingWall"
                                        name="existingWall"
                                        value={ExistingWall}
                                        onChange={handleChangeExistingWall}
                                    >
                                        {
                                            GetSelect.existingWalls.map((val, index) => {
                                                return (
                                                    <MenuItem value={val.id} key={index}>{val.name}</MenuItem>
                                                );
                                            })
                                        }
                                    </Select>
                                </FormControl>
                            </FormGroup>
                            <button type="button" className="btn btn-primary form-control" onClick={handleSubmit}>
                                {
                                    SaveLoader ? <div class="spinner-border spinner-border-sm" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div> : "Create and CheckOut"
                                }
                            </button>
                        </div>
                    </div>
                </div >
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h1">
                            Memorial Created
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Find Your Memorial by Searching it
                        </Typography>
                    </Box>
                </Modal>
                <div className={isLoading ? 'overlay active' : 'overlay'}>
                    Loading...
                    <CircularProgress color="inherit" />
                </div>
            </div >
        )

    )
}

export default Memorialize
