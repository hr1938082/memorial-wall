import { useState, useRef, useEffect, useContext } from 'react';
import profileDummy from '../images/userDummy.png'
import { getState } from '../requests/StateRequest';
import { getCity } from '../requests/CityRequest';
import { getTempWall } from '../requests/TempWallRequest';
import { getBricks } from '../requests/BicksRequest';
import { TempWallData } from '../Context/TempWallIDataContext';
import { CreateMemorial } from '../requests/MemorialRequest';
import { getAllWalls, getWallById } from '../requests/WallsRequest';

const useMemorialize = () => {
    const { tempWallData } = useContext(TempWallData);
    const iframeHost = 'http://localhost:8000';
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


    const getData = async () => {
        let imageName, stateData, existingWalls;
        if (tempWallData.status) {
            const tempWallName = await getTempWall(tempWallData.WallTempImageId, 1);
            if (tempWallName) {
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
        console.log(DisplayOnWall, 'dddddddddddddddd');
        if (DisplayOnWall === 'existing') {
            existingWallDropDown.classList.remove('d-none');
        }

    }, [tempWallData])

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
                    wall_id: wall.id
                }
            })
            setExistingWall(value);
            setGetSelect((prev) => {
                return {
                    ...prev,
                    WallName: wall.image,
                    isLoading: false,
                }
            })
        }
    }

    const handleSubmit = () => {
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
                    console.log(create);
                }
                window.removeEventListener('message', getImage);
            }
        }
        window.addEventListener('message', getImage)
    }
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
        handleSubmit
    }
}

export default useMemorialize
