import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useWallsRequest from '../requests/useWallsRequest';
import { useHistory } from 'react-router-dom';
import { iframeHost } from '../Constants';

const useWallSketchBoard = () => {
    const history = useHistory();
    const { id } = useParams();
    const { getWallById } = useWallsRequest();
    const [Wall, setWall] = useState({
        value: {},
        isLoading: true,
    });
    const [ButtonLoader, setButtonLoader] = useState(false);

    const getData = async () => {
        setWall({ value: {}, isLoading: true });
        const wall = await getWallById(id);
        if (wall) {
            setWall({ value: wall[0], isLoading: false });
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const saveImage = e => {
        if (e.origin.startsWith(iframeHost) && e.data.hasOwnProperty('status')) {
            setButtonLoader(false);
            window.removeEventListener('message', saveImage);
            getData();
        }
    }
    window.addEventListener('message', saveImage);
    const handleSaveImage = () => {
        setButtonLoader(true);
        const frame = document.getElementById('wallSketchBoard');
        frame.contentWindow.postMessage({ name: Wall.value.image }, iframeHost);
    }

    const handleClickCancel = () => {
        history.goBack();
    }
    return {
        Wall,
        handleClickCancel,
        ButtonLoader,
        handleSaveImage
    }
}

export default useWallSketchBoard
