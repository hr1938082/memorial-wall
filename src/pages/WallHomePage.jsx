import React from 'react';
import { Link } from 'react-router-dom';
import useWallHomePage from '../Hooks/useWallHomePage';
import dummy from '../images/userDummy.png'

const WallHomePage = () => {
    const { wallHomePage } = useWallHomePage()
    return (
        wallHomePage.isLoading ? ('') : (
            <div className='container-fluid'>
                <div className="row justify-content-center py-2 fw-bold" style={{ fontSize: '1.1rem' }}>
                    Created By: Hasan Raza
                </div>
                <div className="row py-3 bg-dark text-white">
                    <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
                        <h2 className="display-2 text-capitalize">
                            {
                                `${wallHomePage.value.first_name} ${wallHomePage.value.last_name}`
                            }
                        </h2>
                        <h3 className='text-capitalize'>
                            {
                                wallHomePage.value.nick_name
                            }
                        </h3>
                        <h3 className='display-5 fw-bold'>
                            {
                                wallHomePage.value.years
                            }
                        </h3>
                        <h5 className='text-capitalize'>
                            {
                                wallHomePage.value.address
                            }
                        </h5>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center position-relative">
                        <img src={dummy} alt="DP" height="400" width="350" />
                        <Link to="/report" className='btn btn-outline-danger position-absolute rounded-0' style={{ top: 0, right: 5, fontSize: '.7rem' }}>Report Page</Link>
                        <div className='position-absolute' style={{ bottom: 0, right: 5 }}>Account No:14325</div>
                    </div>
                </div>
                <div className="row py-2 justify-content-center">
                    <button className='btn btn-primary me-1 col-2'>Gift</button>
                    <Link to={`/wall/${wallHomePage.value.wall_id}/sketchboard`} className='btn btn-primary col-2'>Wall</Link>
                </div>
                <div className="row" style={{ height: '300px' }}>
                    <div className="col-12 d-flex justify-content-center align-items-center rounded border">
                        <h1>facebook Section</h1>
                    </div>
                </div>
            </div>
        )
    )
}

export default WallHomePage
