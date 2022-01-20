import { useRef, useState, useLayoutEffect } from "react";
import html2canvas from "html2canvas";
import useWallsRequest from '../requests/useWallsRequest'

const useHome = () => {
    const { getCommunityWall } = useWallsRequest();
    let scrollTo = 0;
    let controlScrollTo = 0;
    let timeOut;
    let timeInterval;
    const dragable = useRef();
    const sliderControl = useRef();
    const BricksWallWidth = 2000;
    const [dropedImages, setdropedImages] = useState([]);
    const [BricksWallImage, setBricksWallImage] = useState('');
    const [IsLoading, setIsLoading] = useState(true);
    const getCommunity = async () => {
        const community = await getCommunityWall();
        if (community) {
            setBricksWallImage(community[0].image);
            setIsLoading(false);
        }
    }
    useLayoutEffect(() => {
        getCommunity();
    }, [])


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
        dragable.current.children[3].classList.add('active');
    }
    const handleDragLeave = () => {
        dragable.current.children[3].classList.remove('active');
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
                }
                fileReader.readAsDataURL(file);
                dragable.current.children[3].classList.remove('active');
            }
            else {
                alert('Only Images are Allowes!!');
            }
        }
        else {
            dragable.current.children[3].classList.remove('active');
        }
    }
    const handleDrag = (e) => {
        const width = BricksWallWidth - window.innerWidth;
        const pxToScroll = width / 600;
        let prevX = e.clientX;
        const Drag = (e) => {
            if (scrollTo < 0) {
                scrollTo = 0
            }
            else if (scrollTo > width) {
                scrollTo = width - 1
            }
            else {
                let newX = e.clientX - prevX;
                scrollTo = scrollTo + (pxToScroll * newX);
                dragable.current.scrollTo(scrollTo, 0)
                prevX = e.clientX
            }
        }
        const mouseup = () => {
            window.removeEventListener('mousemove', Drag);
            window.removeEventListener('mousseup', mouseup);
        }
        window.addEventListener('mousemove', Drag);
        window.addEventListener('mouseup', mouseup);
    }

    const DownloadJpeg = () => {
        html2canvas(dragable.current, {
            width: BricksWallWidth,
            windowWidth: BricksWallWidth,
        }).then((canvas) => {
            const img = canvas.toDataURL("image/png");
            const a = document.createElement('a');
            a.href = img;
            a.download = "Wall.png";
            a.click();
        });
    }
    return {
        dragable,
        sliderControl,
        BricksWallWidth,
        dropedImages,
        handleScrollLeft,
        handleScrollRight,
        startLongPress,
        endLongPress,
        handleDragOver,
        handleDragLeave,
        handleDrop,
        handleDrag,
        DownloadJpeg,
        BricksWallImage,
        IsLoading
    }
}

export default useHome

