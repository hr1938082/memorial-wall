import React from 'react';
import useHome from '../Hooks/useHome';
import BricksWallImage from '../images/wall.jpg';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Resizable } from 're-resizable';
import Draggable from 'react-draggable';

const Home = () => {
    const home = useHome();
    return (
        <div className="home">
            <div className="dragable" ref={home.dragable}
                onDragOver={home.handleDragOver}
                onDragLeave={home.handleDragLeave}
                onDrop={home.handleDrop}
            >
                <img src={BricksWallImage} style={{ width: `${home.BricksWallWidth}px` }} className="bricks-wall" alt="Bricks Wall" />
                <div
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
                    className="chevron-right"
                    onClick={home.handleScrollRight}
                    onMouseDown={() => { home.startLongPress('right') }}
                    onMouseUp={() => { home.endLongPress() }}
                    onTouchStart={() => { home.startLongPress('right') }}
                    onTouchEnd={() => { home.endLongPress() }}
                >
                    <BsChevronRight />
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
                <div className="dropable">
                    Drop Image Here
                </div>
            </div>
            <div className="dragableSlider">
                <div className="control" ref={home.sliderControl}>
                    <img src={BricksWallImage} alt="Bricks Wall" />
                    <Draggable bounds={{ top: 0, left: 0, right: 600, bottom: 0 }} onMouseDown={home.handleDrag}>
                        <div className="outerFrame">
                            <div className="innerFrame"></div>
                        </div>
                    </Draggable>
                </div>
            </div>
        </div>
    )
}

export default Home
