import React from 'react';
import { FormGroup, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import useSketchBoard from '../Hooks/useSketchBoard';
const SketchBoard = () => {
    const { SelectValue, handleChange, SketchBoardSelected, TempWallName, IsLoading, handleSaveImage } = useSketchBoard();
    return (
        IsLoading ? ('') : (
            <div className="sketchboard">
                <iframe title="skethBoard" id='sketchBoardIframe' src={`http://104.248.174.124:8000/${TempWallName}`} style={{ width: "100%", height: "calc(100vh - 219px)" }}></iframe>
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
                            <input type="button" className='btn btn-primary w-100' value="Save" onClick={handleSaveImage} />
                        </div>
                        <div className='d-flex align-items-center justify-content-center ms-3' style={{ width: '100px' }}>
                            <input type="button" className='btn btn-primary w-100' value="Cancel" />
                        </div>
                    </div>
                </div>
            </div>
        )

    )
}

export default SketchBoard
