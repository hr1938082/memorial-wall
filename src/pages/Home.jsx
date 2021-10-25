import React, { useRef, useEffect, useState } from 'react';
import WebLayout from '../components/layout/WebLayout';
import BricksWallImage from '../images/wall.jpg';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Resizable } from 're-resizable';
import Draggable from 'react-draggable';

const Home = () => {
    const [BricksWallWidth, setBricksWallWidth] = useState(0);
    const [dropedImages, setdropedImages] = useState([]);
    let scrollTo = 0;
    let controlScrollTo = 0;
    let timeOut;
    let timeInterval;
    const dragable = useRef();
    const sliderControl = useRef();
    useEffect(() => {
        const BricksWall = dragable.current.children[0];
        setBricksWallWidth(BricksWall.naturalWidth);
    }, [BricksWallWidth])
    const handleScrollLeft = () => {
        const width = BricksWallWidth - window.innerWidth;
        const pxToScroll = (800 - 210) / (width / 5);
        if (scrollTo > 0) {
            scrollTo = scrollTo - 5;
            dragable.current.scrollTo(scrollTo, 0)
            controlScrollTo = controlScrollTo - pxToScroll;
            sliderControl.current.children[1].style.left = `${controlScrollTo}px`;
        }
        else {

            dragable.current.scrollTo(0, 0)
            scrollTo = 0;
            sliderControl.current.children[1].style.left = '-10px';
        }
    }
    const handleScrollRight = () => {
        const width = BricksWallWidth - window.innerWidth;
        const pxToScroll = (800 - 210) / (width / 5);
        if (scrollTo < width) {
            scrollTo = scrollTo + 5;
            dragable.current.scrollTo(scrollTo, 0)
            controlScrollTo = controlScrollTo + pxToScroll;
            sliderControl.current.children[1].style.left = `${controlScrollTo}px`;
        }
        else {
            dragable.current.scrollTo(BricksWallWidth, 0)
            sliderControl.current.children[1].style.left = `${controlScrollTo}px`;
        }
    }
    const startLongPress = (press) => {
        timeOut = setTimeout(() => {
            timeInterval = setInterval(() => {
                if (press === 'left') {
                    handleScrollLeft();
                }
                else {
                    handleScrollRight();
                }
            }, 10);
        }, 400);
    }
    const endLongPress = () => {
        clearInterval(timeInterval);
        clearTimeout(timeOut);
    }
    const handleDragOver = (e) => {
        e.preventDefault();
        // dragable.current.children[3].classList.add('active');
    }
    const handleDragLeave = () => {
        // dragable.current.children[3].classList.remove('active');
    }
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            const fileType = file.type;
            const typeAllowed = ['image/jpeg', 'image/jpg', 'image/png'];
            if (typeAllowed.includes(fileType)) {
                const fileReader = new FileReader();
                fileReader.onload = () => {
                    const fileUrl = fileReader.result;
                    setdropedImages((prev) => {
                        return [
                            ...prev,
                            fileUrl
                        ]
                    })
                    // dragable.current.children[3].classList.remove('active');
                }
                fileReader.readAsDataURL(file);
            }
            else {
                alert('Only Images are Allowes!!');
            }
        }
        else {
            // dragable.current.children[3].classList.remove('active');
        }
    }
    return (
        <WebLayout>
            <div className="dragable" ref={dragable}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <img src={BricksWallImage} style={{ width: `${BricksWallWidth}px` }} className="bricks-wall" alt="Bricks Wall" />
                <div
                    className="chevron-left"
                    onClick={handleScrollLeft}
                    onMouseDown={() => { startLongPress('left') }}
                    onMouseUp={() => { endLongPress() }}
                    onTouchStart={() => { startLongPress('left') }}
                    onTouchEnd={() => { endLongPress() }}
                >
                    <BsChevronLeft />
                </div>
                <div
                    className="chevron-right"
                    onClick={handleScrollRight}
                    onMouseDown={() => { startLongPress('right') }}
                    onMouseUp={() => { endLongPress() }}
                    onTouchStart={() => { startLongPress('right') }}
                    onTouchEnd={() => { endLongPress() }}
                >
                    <BsChevronRight />
                </div>
                {
                    dropedImages.map((val, index) => {
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
                <div className="control" ref={sliderControl}>
                    <img src={BricksWallImage} alt="Bricks Wall" />
                    <div className="outerFrame">
                        <div className="innerFrame"></div>
                    </div>
                </div>
            </div>
        </WebLayout>
    )
}

export default Home
