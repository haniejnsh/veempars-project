import axios from "axios"
import {  BASE_URL } from "./api"

axios.defaults.baseURL=BASE_URL
axios.interceptors.request.use((req)=>{
    const token=localStorage.getItem("access")
    if(token){
        req.headers.Authorization=`Bearer ${token}`
    }
    console.log("req",req);
    return req
})

export default axios


