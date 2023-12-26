import { context } from "..";
import axiosInstance from "../../utils/axiosInstance"

export const addProduct = (product) => (sepetDispacth)=> {
    axiosInstance.post("v1/api/card/addCard",product).then(async(res) => {
        console.log(res.data)
       await sepetDispacth({
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
export const deleteProduct = (product) => (sepetDispacth)=> {
    axiosInstance.post("v1/api/card/update",product).then(async(res) => {
        console.log(res.data)
       await sepetDispacth({
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