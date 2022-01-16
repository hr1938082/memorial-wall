import React, { useContext } from 'react';
import { FiEdit } from 'react-icons/fi'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import useProfile from '../Hooks/useProfile';
import { Box, Button, IconButton, InputAdornment, Modal, TextField, Tooltip } from '@mui/material';
import { UserContext } from '../Context/UserContext';

const UserProfile = () => {
    const { User } = useContext(UserContext);
    const { style, Image, ImageError, Name, NameError, Email, EmailError, Password, PassVisibility, NewPassVisibility, ConformPassVisibility, PasswordError, dpEditButton, ImageModel, handleChangeImage, handleChangeName, handleChangeEmail, handleChangePassword, handleChangePassVisibility, handleChangeNewPassVisibility, handleChangeConformPassVisibility, handleOpenImageModel, handleCloseImageModel, nameSubmit, emailSubmit } = useProfile();
    return (
        <div className='user-profile'>
            <div className="content">
                <div className="dp-wrapper">
                    <div className="dp">
                        <img src={Image.prevImg} height='150' width='150' alt='dp' />
                        <div className="edit" onClick={handleOpenImageModel}>
                            <FiEdit />
                        </div>
                    </div>
                    <Modal
                        open={ImageModel}
                        onClose={handleCloseImageModel}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style} className='d-flex justify-content-center flex-column align-items-center'>
                            {
                                ImageError.error && <span className='text-danger mb-2'>{ImageError.helpertext}</span>
                            }
                            <div style={
                                {
                                    position: 'relative',
                                    borderRadius: '20%',
                                    overflow: 'hidden',
                                    height: '250px',
                                    width: '250px',
                                    boxShadow: '0 0 5px rgba(0, 0, 0, 0.438)'
                                }
                            }>
                                <input type="file" hidden id='dpEdit' name='image' onChange={handleChangeImage} />

                                <img src={Image.prevImg} height='250' width='250' alt='dp' />
                                <div className="edit" onClick={dpEditButton} style={
                                    {
                                        position: 'absolute',
                                        height: '20px',
                                        width: '20px',
                                        top: '23px',
                                        right: '23px',
                                        padding: '.1rem',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'black',
                                        borderRadius: '5px',
                                        color: 'white',
                                        fontSize: '.7rem',
                                        cursor: 'pointer',
                                    }
                                }>
                                    <FiEdit />
                                </div>

                            </div>
                            <Button variant="contained" className='w-75 mt-3'>Submit</Button>
                        </Box>
                    </Modal>
                </div>
                <div className="form">
                    <div className="form-main-wrapper">
                        <div className="data-wrapper">
                            <div className="py-1">Name</div>
                            <div className="val-edit">
                                <div className="val">{User.user.name}</div>
                                <Tooltip placement='top' title="Edit">
                                    <IconButton size='small' data-bs-toggle="collapse" data-bs-target="#userName" aria-expanded="false" aria-controls="userName">
                                        <FiEdit />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                        <div className="collapse" id="userName">
                            <div className="input-wrapper">
                                <TextField variant='standard' label='Name' error={NameError.error} helperText={NameError.helpertext} className="w-100 my-2" value={Name} name='name' onChange={handleChangeName} />
                            </div>
                            <div className="input-wrapper">
                                <Button variant="contained" onClick={nameSubmit}>Submit</Button>
                            </div>
                        </div>
                    </div>
                    <div className="form-main-wrapper">
                        <div className="data-wrapper">
                            <div className="py-1">Email</div>
                            <div className="val-edit">
                                <div className="val">{User.user.email}</div>
                                <Tooltip placement='top' title="Edit">
                                    <IconButton size='small' data-bs-toggle="collapse" data-bs-target="#userEmail" aria-expanded="false" aria-controls="userEmail">
                                        <FiEdit />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                        <div className="collapse" id="userEmail">
                            <div className="input-wrapper">
                                <TextField variant='standard' error={EmailError.error} helperText={EmailError.helpertext} label='Email' className="w-100 my-2" value={Email} name='email' onChange={handleChangeEmail} />
                            </div>
                            <div className="input-wrapper">
                                <Button variant="contained" onClick={emailSubmit}>Submit</Button>
                            </div>
                        </div>
                    </div>
                    <div className="form-main-wrapper">
                        <div className="data-wrapper">
                            <div className="py-1">Password</div>
                            <div className="val-edit">
                                <div className="val">**********</div>
                                <Tooltip placement='top' title="Edit">
                                    <IconButton size='small' data-bs-toggle="collapse" data-bs-target="#userPassword" aria-expanded="false" aria-controls="userPassword">
                                        <FiEdit />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                        <div className="collapse" id="userPassword">
                            <div className="input-wrapper">
                                <TextField variant='standard' type={PassVisibility ? 'text' : 'password'} label='Old Password' className="my-2 w-100 px-1" value={Password.password} name='password' onChange={handleChangePassword}
                                    InputProps={{
                                        endAdornment: <InputAdornment position='end'>
                                            <IconButton size='small' onClick={handleChangePassVisibility}>
                                                {
                                                    PassVisibility ? <MdVisibility /> : <MdVisibilityOff />
                                                }
                                            </IconButton>
                                        </InputAdornment>
                                    }} />
                            </div>
                            <div className="input-wrapper">
                                <TextField variant='standard' type={NewPassVisibility ? 'text' : 'password'} error={PasswordError.newPassword.error} helperText={PasswordError.newPassword.helpertext} label='New Password' className="my-2 w-50 mx-1" value={Password.newPassword} name='newPassword' onChange={handleChangePassword}
                                    InputProps={{
                                        endAdornment: <InputAdornment position='end'>
                                            <IconButton size='small' onClick={handleChangeNewPassVisibility}>
                                                {
                                                    NewPassVisibility ? <MdVisibility /> : <MdVisibilityOff />
                                                }
                                            </IconButton>
                                        </InputAdornment>
                                    }} />
                                <TextField variant='standard' error={PasswordError.conformPassword.error} helperText={PasswordError.conformPassword.helpertext} type={ConformPassVisibility ? 'text' : 'password'} label='Conform Password' className="my-2 w-50 mx-1" value={Password.conformPassword} name='conformPassword' onChange={handleChangePassword}
                                    InputProps={{
                                        endAdornment: <InputAdornment position='end'>
                                            <IconButton size='small' onClick={handleChangeConformPassVisibility}>
                                                {
                                                    ConformPassVisibility ? <MdVisibility /> : <MdVisibilityOff />
                                                }
                                            </IconButton>
                                        </InputAdornment>
                                    }} />
                            </div>
                            <div className="input-wrapper">
                                <Button variant="contained" className='me-1'>Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default UserProfile
