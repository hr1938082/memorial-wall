import { Box, CircularProgress, Typography, Button, Modal } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useWallHomePage from '../Hooks/useWallHomePage';
import dummy from '../images/userDummy.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};
const WallHomePage = () => {
    const { wallHomePage } = useWallHomePage();
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        wallHomePage.isLoading ? (
            <div className='d-flex justify-content-center align-items-center' style={{height:"calc(100vh - 112px)"}}>
                <CircularProgress/>
            </div>
        ) : (
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
                    <button onClick={handleOpen} className='btn btn-primary me-1 col-2'>Gift</button>
                    <Link to={`/wall/${wallHomePage.value.wall_id}/sketchboard`} className='btn btn-primary col-2'>Wall</Link>
                </div>
                <div className="row" style={{ height: '500px' }}>
                    <div className="col-12 d-flex justify-content-center align-items-center rounded border">
                        <h1>facebook Section</h1>
                    </div>
                </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
            </div>
        )
    )
}

export default WallHomePage
