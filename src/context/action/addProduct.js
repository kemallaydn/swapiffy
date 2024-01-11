import axios from "axios";
import { context } from "..";
import axiosInstance from "../../utils/axiosInstance"

export const addProduct = (product) => (sepetDispacth)=> {
    axiosInstance.post("v1/api/card/addCard",product).then(async(res) => {
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
export const updateProduct = (product) => (sepetDispacth)=> {
    axios.put("http://localhost:8080/v1/api/card/update",product).then(async(res) => {
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
export const deleteProduct = (product) => async(sepetDispacth)=> {

    await axios.delete("http://localhost:8080/v1/api/card/delete",{data:product}).then(async(res) => {
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