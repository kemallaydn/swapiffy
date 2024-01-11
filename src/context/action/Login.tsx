import axiosInstance from "../../utils/axiosInstance"

export const Login = (loginForm) => (authDispatch)=> {
    axiosInstance.post("http://localhost:8080/v1/auth/login",loginForm).then((res) => {
        authDispatch({
            type:"LOGIN_SUCCESS",
            payload:res.data
        })
    }).catch((err)=>{
        authDispatch({
            type:"LOGIN_FAİLED",
            payload:err.data
        })
    })
}