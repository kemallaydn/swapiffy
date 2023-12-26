import { context } from "..";
import axiosInstance from "../../utils/axiosInstance"

export const addProduct = (product) =>(sepetDispacth)=> {
    axiosInstance.post("v1/api/card/addCard",product).then((res) => {
        console.log(res.data)
        sepetDispacth({
            type:"ADD_SUCCES",
            payload:res.data
        })
    }).catch((err)=>{
        sepetDispacth({
            type:"ADD_FAİLED",
            payload:err.data
        })
    })
}