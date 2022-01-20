import React from 'react';
import useHome from '../Hooks/useHome';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { MdFileDownload } from 'react-icons/md'
import { Resizable } from 're-resizable';
import Draggable from 'react-draggable';
import { Tooltip, IconButton, CircularProgress } from '@mui/material';
import { ServerImg } from '../Constants';

const Home = () => {
    const home = useHome();
    return (
        home.IsLoading ? (
            <div className='d-flex justify-content-center align-items-center' style={{ height: 'calc(100vh - 112px)' }}>
                <CircularProgress />
            </div>
        ) : (

            <div className="home" id="home">
                <div className="dragable border" id="dragable" ref={home.dragable}
                    onDragOver={home.handleDragOver}
                    onDragLeave={home.handleDragLeave}
                    onDrop={home.handleDrop}
                >
                    <img src={ServerImg + '/' + home.BricksWallImage} /* style={{ width: `${home.BricksWallWidth}px` }} */ width="2000" className="bricks-wall" alt="Bricks Wall" />


                    <Tooltip title="Download as Image" className="downloadIcon" data-html2canvas-ignore="true">
                        <IconButton onClick={home.DownloadJpeg}>
                            <MdFileDownload className="text-dark" />
                        </IconButton>
                    </Tooltip>
                    <div
                        data-html2canvas-ignore="true"
                        className="chevron-left"
                        onClick={home.handleScrollLeft}
                        onMouseDown={() => { home.startLongPress('left') }}
                        onMouseUp={() => { home.endLongPress() }}
                        onTouchStart={() => { home.startLongPress('left') }}
                        onTouchEnd={() => { home.endLongPress() }}
                    >
                        <BsChevronLeft />
                    </div>
                    <div
                        data-html2canvas-ignore="true"
                        className="chevron-right"
                        onClick={home.handleScrollRight}
                        onMouseDown={() => { home.startLongPress('right') }}
                        onMouseUp={() => { home.endLongPress() }}
                        onTouchStart={() => { home.startLongPress('right') }}
                        onTouchEnd={() => { home.endLongPress() }}
                    >
                        <BsChevronRight />
                    </div>
                    <div className="dropable" data-html2canvas-ignore="true">
                        Drop Image Here
                    </div>
                    {
                        home.dropedImages.map((val, index) => {
                            return (
                                <Draggable key={index}>
                                    <div className="droppedImage">
                                        <Resizable
                                            defaultSize={{
                                                height: 200,
                                                width: 300
                                            }}
                                            style={{
                                                background: `url(${val})`,
                                                backgroundSize: '100% 100%',
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                        />
                                    </div>
                                </Draggable>
                            )
                        })
                    }
                </div>
                <div className="dragableSlider" data-html2canvas-ignore="true">
                    <div className="control" ref={home.sliderControl}>
                        <img src={ServerImg + '/' + home.BricksWallImage} alt="Bricks Wall" />
                        <div className="outerFrame">
                            <div className="innerFrame"></div>
                        </div>
                    </div>
                </div>
            </div >
        )
    )
}

export default Home
