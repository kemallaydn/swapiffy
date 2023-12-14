import axios from "axios"

export default async()=>{
    const veri =await axios.get("http://localhost:3000/kitaplar");
    return veri.data;
}