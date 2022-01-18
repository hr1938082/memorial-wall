import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";
import dummy from '../images/userDummy.png';
import validator from 'validator';

const useProfile = () => {
    const defaultError = { error: false, helpertext: '' };
    const { User } = useContext(UserContext);
    const [Image, setImage] = useState({
        prevImg: dummy,
        image: '',
        image_name: 'default.png',
    })
    const [PassVisibility, setPassVisibility] = useState(false);
    const [NewPassVisibility, setNewPassVisibility] = useState(false);
    const [ConformPassVisibility, setConformPassVisibility] = useState(false);
    const [ImageError, setImageError] = useState(defaultError);
    const [Name, setName] = useState(User.user.name);
    const [NameError, setNameError] = useState(defaultError);
    const [Email, setEmail] = useState(User.user.email);
    const [EmailError, setEmailError] = useState(defaultError);
    const [Password, setPassword] = useState({
        password: '',
        newPassword: '',
        conformPassword: ''
    })
    const [PasswordError, setPasswordError] = useState({
        password: defaultError,
        newPassword: defaultError,
        conformPassword: defaultError,
    })
    const [ImageModel, setImageModel] = useState(false);
    const dpEditButton = () => {
        const dpEdit = document.getElementById('dpEdit');
        dpEdit.click();
    }
    const handleChangeImage = (e) => {
        const { value, files } = e.target;
        const splitName = value.split('\\');
        const extension = splitName[splitName.length - 1].split('.')[1];

        if (extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'bmp') {
            const reader = new FileReader();
            reader.onload = () => {
                setImage({
                    prevImg: reader.result,
                    image: reader.result.split(',')[1],
                    image_name: splitName[splitName.length - 1]
                })
            }
            reader.readAsDataURL(files[0]);

            setImageError({ error: false, helpertext: '' })
        } else {
            setImageError({ error: true, helpertext: ' Image not supported' })
        }

    }

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const nameSubmit = () => {
        if (!(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u).test(Name)) {
            setNameError({ error: true, helpertext: 'A name which is use in your daily life' });
        }
        else {
            setNameError({ error: false, helpertext: '' });
        }
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const emailSubmit = () => {
        if (!validator.isEmail(Email)) {
            setEmailError({ error: true, helpertext: 'An Email that relates with you' });
        }
        else {
            setEmailError({ error: false, helpertext: '' });
        }
    }

    const handleChangePassword = (e) => {
        const { name, value } = e.target;

        if (name === 'conformPassword') {
            if (value !== Password.newPassword) {
                setPasswordError((prev) => {
                    return {
                        ...prev,
                        conformPassword: { error: true, helpertext: 'Does not match!!' }
                    }
                })
            } else {
                setPasswordError((prev) => {
                    return {
                        ...prev,
                        conformPassword: { error: false, helpertext: '' }
                    }
                })
            }

            setPassword((prev) => {
                return {
                    ...prev,
                    conformPassword: value
                }
            })
        }
        if (name === 'newPassword') {
            if (!(value.length >= 8)) {
                console.log(true);
                setPasswordError((prev) => {
                    return {
                        ...prev,
                        newPassword: { error: true, helpertext: 'Password must be more more than 8 characters!!' }
                    }
                })
            }
            else {
                console.log(false);
                setPasswordError((prev) => {
                    return {
                        ...prev,
                        newPassword: { error: false, helpertext: '' }
                    }
                })
            }
        }

        setPassword((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const handleChangePassVisibility = () => {
        setPassVisibility(!PassVisibility);
    }

    const handleChangeNewPassVisibility = () => {
        setNewPassVisibility(!NewPassVisibility);
    }
    const handleChangeConformPassVisibility = () => {
        setConformPassVisibility(!ConformPassVisibility);
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
    const handleOpenImageModel = () => setImageModel(true);
    const handleCloseImageModel = () => {
        setImageError({ error: false, helpertext: '' })
        setImageModel(false)
    };
    return {
        style,
        Image,
        ImageError,
        Name,
        NameError,
        Email,
        EmailError,
        Password,
        PassVisibility,
        NewPassVisibility,
        ConformPassVisibility,
        PasswordError,
        dpEditButton,
        ImageModel,
        handleChangeImage,
        handleChangeName,
        handleChangeEmail,
        handleChangePassword,
        handleChangePassVisibility,
        handleChangeNewPassVisibility,
        handleChangeConformPassVisibility,
        handleOpenImageModel,
        handleCloseImageModel,
        nameSubmit,
        emailSubmit
    }
}

export default useProfile
