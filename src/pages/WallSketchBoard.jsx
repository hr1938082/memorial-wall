import React from 'react';
import { iframeHost } from '../Constants';
import useWallSketchBoard from '../Hooks/useWallSketchBoard';

const WallSketchBoard = () => {
    const { Wall, handleClickCancel, ButtonLoader, handleSaveImage } = useWallSketchBoard();
    return (

        Wall.isLoading ? ('') : (
            <div className="sketchboard">
                <iframe title="skethBoard" id='wallSketchBoard' src={`${iframeHost}/${Wall.value.image}`} style={{ width: "100%", height: "calc(100vh - 219px)" }}></iframe>
                <div style={{ height: '100px' }}>
                    <div className="d-flex">
                        <div className='d-flex align-items-center justify-content-center ms-3' style={{ width: '100px' }}>
                            <button className='btn btn-primary w-100' onClick={handleSaveImage}>
                                {
                                    ButtonLoader ?
                                        <div class="spinner-border spinner-border-sm" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div> : "Save"
                                }
                            </button>
                        </div>
                        <div className='d-flex align-items-center justify-content-center ms-3' style={{ width: '100px' }}>
                            <input type="button" className='btn btn-primary w-100' value="Back" onClick={handleClickCancel} />
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default WallSketchBoard
