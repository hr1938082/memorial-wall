import { CircularProgress } from '@mui/material';
import React from 'react'
import useDonation from '../Hooks/useDonation'

const Donation = () => {
    const { donation, Donate, handleChangeDonate, onSubmit, Validation } = useDonation();
    return (
        <div className='donation'>
            <div className="mainWrapper">
                <div className='container-fluid'>
                    <div className="row m-0 mt-2">
                        <div className="col-12 text-center fw-bold">
                            Days Remaining: 11
                        </div>
                    </div>
                    <div className="row m-0 mt-2">
                        <div className="col-12 text-center fw-bold">
                            Contributions: $75
                        </div>
                    </div>
                    <div className="row m-0 mt-3">
                        <div className="col-6 text-center">
                            Name
                        </div>
                        <div className="col-6 text-center">
                            Donation
                        </div>
                    </div>
                    <div className="donationRows">
                        {
                            donation.isLoading ? (
                                <div className='d-flex justify-content-center align-items-center'>
                                    <CircularProgress />
                                </div>
                            ) : (
                                donation.values.map((val, index) => {
                                    return (
                                        <div className="row m-0 my-3" key={index}>
                                            <div className="col-6 text-center">
                                                {val.name}
                                            </div>
                                            <div className="col-6 text-center">
                                                {val.donation}
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <input type="number" className='form-control' value={Donate} onChange={handleChangeDonate} placeholder='Contribution in $' />
                            {
                                Validation.error && <span className='text-danger'>{Validation.helperText}</span>
                            }
                        </div>
                        <div className="col-lg-6 d-grid">
                            <input type="button" className='btn btn-primary' value="Contribute" onClick={onSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donation
