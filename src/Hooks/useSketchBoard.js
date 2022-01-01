import { useContext, useEffect, useState } from "react"
import { getBricks } from "../requests/BicksRequest";
import { useHistory } from "react-router-dom";
import { getTempWall } from "../requests/TempWallRequest";
import { TempWallData } from "../Context/TempWallIDataContext";

const useSketchBoard = () => {
    const { tempWallData, TempWallUpdate } = useContext(TempWallData);
    const iframeHost = 'http://localhost:8000';
    const history = useHistory();
    const [SelectValue, setSelectValue] = useState([]);
    const [SketchBoardSelected, setSketchBoardSelected] = useState({
        id: 0,
        name: '',
        image: ''
    })
    const [TempWallName, setTempWallName] = useState('');
    const [IsLoading, setIsLoading] = useState(true);


    const getData = async () => {
        const bricks = await getBricks();
        if (bricks) {
            setSelectValue(bricks);
        }

        let imageName;
        if (tempWallData.status) {
            const tempWallName = await getTempWall(tempWallData.WallTempImageId, 1);
            if (tempWallName) {
                imageName = tempWallName[0].image_name;
            }
        }
        else {
            imageName = await bricks[0].image
            setSketchBoardSelected(bricks[0])
        }
        setTempWallName(imageName);
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, [tempWallData])

    const saveImage = e => {
        if (e.origin.startsWith(iframeHost) && e.data.for === 'SketchBoard') {
            const dataToSet = {
                WallTempImageId: e.data.id,
                BricksId: SketchBoardSelected.id,
            }
            TempWallUpdate(dataToSet);
            window.removeEventListener('message', saveImage);
            history.push('/memorialize');
        }
    }
    window.addEventListener('message', saveImage);
    const handleSaveImage = () => {
        const frame = document.getElementById('sketchBoardIframe');
        frame.contentWindow.postMessage('saveImageSketchBoard', iframeHost);
    }
    const handleChange = (e) => {
        const { value } = e.target;
        setSketchBoardSelected(value)
        setTempWallName(value.image)
    }
    return {
        SelectValue,
        SketchBoardSelected,
        handleChange,
        TempWallName,
        IsLoading,
        handleSaveImage
    }
}

export default useSketchBoard
