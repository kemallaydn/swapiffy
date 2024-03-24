import axiosInstance from "../../utils/axiosInstance"

export const Login = (loginForm) => (authDispatch)=> (onSucces)=>{
    axiosInstance.post("v1/auth/login",loginForm).then((res) => {
        authDispatch({
            type:"LOGIN_SUCCESS",
            payload:res.data
        })
        onSucces(res.data.id);
    }).catch((err)=>{
        authDispatch({
            type:"LOGIN_FAİLED",
            payload:err.data
        })
    })
}
