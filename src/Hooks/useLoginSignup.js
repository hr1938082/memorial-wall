import { useRef, useState } from 'react'

const useLoginSignup = () => {
    const overLay = useRef();
    const loginForm = useRef();
    const signupForm = useRef();
    const [PassIcon, setPassIcon] = useState(false);
    const [loginValues, setloginValues] = useState({
        email: '',
        password: '',
        remember: true
    })
    const [signupValues, setsignupValues] = useState({
        name: '',
        email: '',
        password: '',
        policy: false
    })
    const handleContent = () => {
        overLay.current.classList.contains('active') ? overLay.current.classList.remove('active') : overLay.current.classList.add('active')
        loginForm.current.classList.contains('active') ? loginForm.current.classList.remove('active') : loginForm.current.classList.add('active');
        signupForm.current.classList.contains('active') ? signupForm.current.classList.remove('active') : signupForm.current.classList.add('active');
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
        handleContent
    }
}

export default useLoginSignup
