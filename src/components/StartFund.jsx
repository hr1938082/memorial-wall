import React from 'react'
import { Box, CircularProgress, InputAdornment, Modal, TextField, Typography } from '@mui/material'
import { BiDollar } from 'react-icons/bi'
import useFund from '../Hooks/useFund'


const StartFund = (props) => {
    const { funValues, handleChangeText, SelectValues, handleSubmit, validation, SubmitLoading, style, open, handleClose } = useFund();
    return (
        SelectValues.isLoading ? (
            <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircularProgress />
            </div>
        ) : (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <TextField
                            label="First Name"
                            fullWidth
                            variant="standard"
                            onChange={handleChangeText}
                            value={funValues.first_name}
                            name='first_name'
                        />
                        {
                            validation.first_name.error && <span className='text-danger'>{validation.first_name.helperText}</span>
                        }
                    </div>
                    <div className="col-lg-6 mb-3">
                        <TextField
                            label="Last Name"
                            fullWidth
                            variant="standard"
                            onChange={handleChangeText}
                            value={funValues.last_name}
                            name='last_name'
                        />
                        {
                            validation.last_name.error && <span className='text-danger'>{validation.last_name.helperText}</span>
                        }
                    </div>
                    <div className="col-lg-12 mb-3">
                        <TextField
                            label="Nick Name"
                            fullWidth
                            variant="standard"
                            onChange={handleChangeText}
                            value={funValues.nick_name}
                            name='nick_name'
                        />

                        {
                            validation.nick_name.error && <span className='text-danger'>{validation.nick_name.helperText}</span>
                        }
                    </div>
                    <div className="col-lg-6 mb-3">
                        <select className='form-control text-capitalize' name='state' value={funValues.state} onChange={handleChangeText}>
                            <option value='0' disabled>State</option>
                            {
                                SelectValues.state.map((val, index) => {
                                    return (
                                        <option value={val.id} key={index}>{val.name}</option>
                                    )
                                })
                            }
                        </select>

                        {
                            validation.state.error && <span className='text-danger'>{validation.state.helperText}</span>
                        }
                    </div>
                    <div className="col-lg-6 mb-3">
                        <select className='form-control text-capitalize' name='city' value={funValues.city} onChange={handleChangeText}>
                            <option value='0' disabled>City</option>
                            {
                                SelectValues.city.map((val, index) => {
                                    return (
                                        <option value={val.id} key={index}>{val.name}</option>
                                    )
                                })
                            }
                        </select>
                        {
                            validation.city.error && <span className='text-danger'>{validation.city.helperText}</span>
                        }
                    </div>
                    <div className="col-lg-6 mb-3">
                        <input type="date" className='form-control' value={funValues.born} name='born' onChange={handleChangeText} placeholder='Birth Date' />
                        {
                            validation.born.error && <span className='text-danger'>{validation.born.helperText}</span>
                        }
                    </div>
                    <div className="col-lg-6 mb-3">
                        <input type="date" className='form-control' placeholder='Passed Dated' name='passed' value={funValues.passed} onChange={handleChangeText} />
                        {
                            validation.passed.error && <span className='text-danger'>{validation.passed.helperText}</span>
                        }
                    </div>
                    <div className="col-lg-9 mb-3">
                        <TextField
                            label="Location"
                            fullWidth
                            variant="standard"
                            name='location'
                            value={funValues.location} onChange={handleChangeText}
                        />

                        {
                            validation.location.error && <span className='text-danger'>{validation.location.helperText}</span>
                        }
                    </div>
                    <div className="col-lg-3 mb-3">
                        <TextField
                            label="Initial Donation"
                            fullWidth
                            variant="standard"
                            name='donation'
                            value={funValues.donation} onChange={handleChangeText}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <BiDollar />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        {
                            validation.donation.error && <span className='text-danger'>{validation.donation.helperText}</span>
                        }
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary btn-sm' disabled={SubmitLoading} onClick={handleSubmit}>
                            {
                                SubmitLoading ? <CircularProgress color="inherit" /> : "Create"
                            }
                        </button>
                    </div>
                </div>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h1">
                            Fund Created
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Check Your Funds at contribute section
                        </Typography>
                    </Box>
                </Modal>
            </div>
        )
    )
}

export default StartFund
