import { useContext, useRef, useState } from 'react';
import validator from 'validator';
import { UserContext } from '../Context/UserContext';
import { Login, Signup } from '../requests/UserRequest';

const useLoginSignup = () => {
    const { SaveUserInfo } = useContext(UserContext);
    const overLay = useRef();
    const loginForm = useRef();
    const signupForm = useRef();
    const [PassIcon, setPassIcon] = useState(false);
    const defaultValidator = { error: false, helperText: ' ' };

    const [isLoading, setisLoading] = useState(false)

    const [loginValues, setloginValues] = useState({
        email: '',
        password: '',
    })
    const [LoginValidator, setLoginValidator] = useState({
        email: defaultValidator,
        password: defaultValidator,
    })
    const [signupValues, setsignupValues] = useState({
        name: '',
        email: '',
        password: '',
        policy: false,
        platform: 'web'
    })
    const [SignupValidator, setSignupValidator] = useState({
        name: defaultValidator,
        email: defaultValidator,
        password: defaultValidator,
        policy: defaultValidator
    })
    const handleContent = () => {
        overLay.current.classList.contains('active') ? overLay.current.classList.remove('active') : overLay.current.classList.add('active')
        loginForm.current.classList.contains('active') ? loginForm.current.classList.remove('active') : loginForm.current.classList.add('active');
        signupForm.current.classList.contains('active') ? signupForm.current.classList.remove('active') : signupForm.current.classList.add('active');
    }
    const LoginValidatorfx = () => {
        let error = false;
        let email = { error: false, helperText: ' ' }
        let password = { error: false, helperText: ' ' }
        if (!validator.isEmail(loginValues.email)) {
            email = { error: true, helperText: 'An Email that relates with you' };
            error = true;
        }
        if (loginValues.password === '') {
            password = { error: true, helperText: 'Password is required for Login' };
            error = true;
        }
        setLoginValidator({
            email: email,
            password: password
        })
        return error;
    }
    const loginSubmit = async () => {
        if (!LoginValidatorfx()) {
            setisLoading(true);
            const login = await Login({ email: loginValues.email, password: loginValues.password });
            if (login) {
                SaveUserInfo(login);
                console.log(login);
            }
        }
    }
    const SignupValidatorfx = () => {
        let error = false;
        let name = { error: false, helperText: ' ' }
        let email = { error: false, helperText: ' ' }
        let password = { error: false, helperText: ' ' }
        let policy = { error: false, helperText: ' ' }
        if (!(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u).test(signupValues.name)) {
            name = { error: true, helperText: 'A name which is use in your daily life' }
            error = true;
        }
        if (!validator.isEmail(signupValues.email)) {
            email = { error: true, helperText: 'An Email that relates with you' }
            error = true;
        }
        if (validator.isEmpty(signupValues.password)) {
            password = { error: true, helperText: 'Password is an important key for signin' }
            error = true;
        }
        if (signupValues.password.length < 8) {
            password = { error: true, helperText: 'Its looks like less than 8 characters' }
            error = true;
        }
        if (signupValues.policy !== true) {
            policy = { error: true, helperText: 'We can not let you signin without agree our terms and policy' }
            error = true;
        }

        setSignupValidator({
            name: name,
            email: email,
            password: password,
            policy: policy
        })

        return error;
    }
    const SingupSubmit = async () => {
        if (!SignupValidatorfx()) {
            setisLoading(true);
            const signup = await Signup(signupValues);
            if (signup) {
                if (signup !== 'User already exist!') {
                    const login = await Login({ email: signupValues.email, password: signupValues.password });
                    if (login) {
                        SaveUserInfo(login);
                    }
                }
                else {
                    setSignupValidator((prev) => {
                        return {
                            ...prev,
                            email: { error: true, helperText: 'User already exist!' }
                        }
                    })
                    setisLoading(false);
                }
            }
        }

    }
    return {
        overLay,
        loginForm,
        signupForm,
        PassIcon,
        setPassIcon,
        loginValues,
        setloginValues,
        signupValues,
        setsignupValues,
        handleContent,
        LoginValidator,
        loginSubmit,
        SignupValidator,
        SingupSubmit,
        isLoading
    }
}

export default useLoginSignup
