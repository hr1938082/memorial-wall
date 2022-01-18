import React from 'react';
import { FormGroup, FormControl, InputLabel, Select, MenuItem, CircularProgress } from '@mui/material';
import useSketchBoard from '../Hooks/useSketchBoard';
import { iframeHost } from '../Constants';
const SketchBoard = () => {
    const { SelectValue, handleChange, SketchBoardSelected, TempWallName, IsLoading, handleSaveImage, handleCancel, SaveLoader } = useSketchBoard();
    return (
        IsLoading ? (
            <div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: "calc(100vh - 112px)" }}>
                <CircularProgress />
            </div>
        ) : (
            <div className="sketchboard">
                <iframe title="skethBoard" id='sketchBoardIframe' src={`${iframeHost}/${TempWallName}`} style={{ width: "100%", height: "calc(100vh - 219px)" }}></iframe>
                <div style={{ height: '100px' }}>
                    <div className="d-flex">
                        <FormGroup className="Bricks-select">
                            <FormControl variant="standard">
                                <InputLabel id="bricks">Bricks</InputLabel>
                                <Select
                                    labelId="bricks"
                                    defaultValue={SketchBoardSelected}
                                    value={SketchBoardSelected}
                                    label="bricks"
                                    name="bricks"
                                    onChange={handleChange}
                                >
                                    {
                                        SelectValue.map((val, index) => {
                                            return (
                                                <MenuItem
                                                    className='text-capitalize'
                                                    value={val}
                                                    key={index}>
                                                    {val.name}
                                                </MenuItem>
                                            );
                                        })
                                    }
                                </Select>
                            </FormControl>
                        </FormGroup>
                        <div className='d-flex align-items-center justify-content-center ms-3' style={{ width: '100px' }}>
                            <button className='btn btn-primary w-100' onClick={handleSaveImage}>
                                {
                                    SaveLoader ?
                                        <div class="spinner-border spinner-border-sm" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div> : "Save"
                                }
                            </button>
                        </div>
                        <div className='d-flex align-items-center justify-content-center ms-3' style={{ width: '100px' }}>
                            <input type="button" className='btn btn-primary w-100' value="Cancel" onClick={handleCancel} />
                        </div>
                    </div>
                </div>
            </div>
        )

    )
}

export default SketchBoard
