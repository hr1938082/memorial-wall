import { useState, useRef, useEffect, useContext } from 'react';
import profileDummy from '../images/userDummy.png'
import useStateRequest from '../requests/useStateRequest';
import useCityRequest from '../requests/useCityRequest';
import useTempWallRequest from '../requests/useTempWallRequest';
import useBicksRequest from '../requests/useBicksRequest';
import { TempWallData } from '../Context/TempWallIDataContext';
import useMemorialRequest from '../requests/useMemorialRequest';
import useWallsRequest from '../requests/useWallsRequest';
import { UserContext } from '../Context/UserContext';
import { useHistory } from 'react-router-dom';
import { iframeHost } from '../Constants';

const useMemorialize = () => {
    const history = useHistory();
    const { getState } = useStateRequest();
    const { getCity } = useCityRequest();
    const { getTempWall } = useTempWallRequest();
    const { getBricks } = useBicksRequest();
    const { CreateMemorial } = useMemorialRequest();
    const { getAllWalls, getWallById } = useWallsRequest();
    const { tempWallData, TempWallUpdate } = useContext(TempWallData);
    const { User } = useContext(UserContext);
    const ImgPicker = useRef();
    const [GetSelect, setGetSelect] = useState({
        WallName: '',
        state: [],
        city: [],
        existingWalls: [],
        isLoading: true,
    })
    const [DisplayOnWall, setDisplayOnWall] = useState('community')
    const [ExistingWall, setExistingWall] = useState('');
    const [Values, setValues] = useState({
        name: '',
        bricks_id: '',
        wall_id: '',
        profile: 0,
        creator: 0,
        memorial_for: '',
        first_name: '',
        last_name: '',
        nick_name: '',
        prevImage: profileDummy,
        image: '',
        image_name: '',
        city: 0,
        state: 0,
        address: '',
        birthday: '',
        pass_date: ''
    });

    const [open, setOpen] = useState(false);
    const [SaveLoader, setSaveLoader] = useState(false);

    const getData = async () => {
        let imageName, stateData, existingWalls;
        if (tempWallData.status) {
            const tempWallName = await getTempWall(tempWallData.WallTempImageId, User.user.id);
            if (tempWallName) {
                console.log(tempWallName, 'tempppppppppppppppppp');
                imageName = tempWallName[0].image_name;
                setValues((prev) => {
                    return {
                        ...prev,
                        bricks_id: tempWallData.BricksId
                    }
                })
            }
        }
        else {
            const Bricks = await getBricks();
            if (Bricks) {
                imageName = await Bricks[0].image
                setValues((prev) => {
                    return {
                        ...prev,
                        bricks_id: Bricks[0].id
                    }
                })
            }


        }
        const state = await getState();
        stateData = state;

        const ExistingWalls = await getAllWalls();
        existingWalls = ExistingWalls;
        setGetSelect((prev) => {
            return {
                ...prev,
                WallName: imageName,
                state: stateData,
                existingWalls: existingWalls,
                isLoading: false
            }
        })
    }

    useEffect(() => {
        getData();
        const existingWallDropDown = document.getElementById('existingWallDropDown');
        if (DisplayOnWall === 'existing') {
            existingWallDropDown.classList.remove('d-none');
        }

    }, [])

    const getCityReq = async (stateId) => {
        const city = await getCity(stateId);
        if (city) {
            setGetSelect((prev) => {
                return {
                    ...prev,
                    city: city
                }
            })
        }
    }

    const handleChangeSwitch = (e) => {
        const { name } = e.target;

        setValues((prev) => {
            return {
                ...prev,
                [name]: name === 'profile' ? prev.profile === 0 ? 1 : 0 : prev.creator === 0 ? 1 : 0
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
        if (name === 'state') {
            getCityReq(value);
        }
        if (name === 'first_name' || name === 'last_name') {
            setValues((prev) => {
                return {
                    ...prev,
                    name: name === 'first_name' ? value + ' ' + prev.last_name : prev.first_name + ' ' + value
                }
            })
        }
    }

    const handlePicker = () => {
        ImgPicker.current.click();
    }

    const handleChangeImage = (e) => {
        const { files, value } = e.target;
        const splitedName = value.split('\\');
        if (files[0]) {
            const reader = new FileReader();
            reader.onload = () => {
                setValues((prev) => {
                    return {
                        ...prev,
                        prevImage: reader.result,
                        image: reader.result.split(',')[1],
                        image_name: splitedName[splitedName.length - 1]
                    }
                })
            }
            reader.readAsDataURL(files[0]);
        }
    }

    const handleChangeDisplayOnWall = (e) => {
        const value = e.target.value;
        if (value === 'existing') {
            const existingWallDropDown = document.getElementById('existingWallDropDown');
            existingWallDropDown.classList.contains('d-none') && existingWallDropDown.classList.remove('d-none');
        } else {
            const existingWallDropDown = document.getElementById('existingWallDropDown');
            !existingWallDropDown.classList.contains('d-none') && existingWallDropDown.classList.add('d-none');
        }
        setDisplayOnWall(value);

    }

    const handleChangeExistingWall = async (e) => {
        setGetSelect((prev) => {
            return {
                ...prev,
                isLoading: true,
            }
        })
        const value = e.target.value;
        const wall = await getWallById(value);
        if (wall) {
            setValues((prev) => {
                return {
                    ...prev,
                    wall_id: wall[0].id
                }
            })
            setExistingWall(value);
            setGetSelect((prev) => {
                return {
                    ...prev,
                    WallName: wall[0].image,
                    isLoading: false,
                }
            })
            const saveImage = e => {
                if (e.origin.startsWith(iframeHost) && e.data.for === 'SketchBoard') {
                    const dataToSet = {
                        WallTempImageId: e.data.id,
                        BricksId: wall[0].bricks_id,
                    }
                    TempWallUpdate(dataToSet);
                    setSaveLoader(false);
                    window.removeEventListener('message', saveImage);
                }
            }
            window.addEventListener('message', saveImage);
            const frame = document.getElementById('mainIframe');
            frame.contentWindow.postMessage({ userId: User.user.id }, iframeHost);
        }
    }

    const handleSubmit = () => {
        setSaveLoader(true);
        const frame = document.getElementById('mainIframe');
        frame.contentWindow.postMessage('CheckOut', iframeHost);
        const getImage = async (e) => {
            if (e.origin.startsWith(iframeHost) && e.data.for === 'CheckOut') {
                const data = {
                    wall_image: e.data.base64,
                    ...Values
                }
                const create = await CreateMemorial(data);
                if (create) {
                    setSaveLoader(false);
                    window.removeEventListener('message', getImage);
                    setOpen(true);
                    const redirectTimeOut = setTimeout(() => {
                        setOpen(false);
                        history.push('/');
                        clearTimeout(redirectTimeOut);
                    }, 2000);
                }
            }
        }
        window.addEventListener('message', getImage)
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };

    const handleClose = () => setOpen(false);
    return {
        Values,
        ExistingWall,
        DisplayOnWall,
        handleChangeSwitch,
        handleChange,
        ImgPicker,
        handlePicker,
        handleChangeImage,
        GetSelect,
        handleChangeDisplayOnWall,
        handleChangeExistingWall,
        handleSubmit,
        style,
        open,
        handleClose,
        SaveLoader
    }
}

export default useMemorialize
