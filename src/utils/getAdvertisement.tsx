import axios from "axios"

export default async()=>{
    const veri =await axios.get("http://localhost:8080/product/all");
    return veri.data;
}