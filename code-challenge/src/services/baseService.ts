import axios from "axios"
import {  AUTH_URL, BASE_URL } from "./api"

interface refreshResponseType {
    refreshToken:string;
    accessToken:string;
}

axios.defaults.baseURL=BASE_URL
let isFirst=true
axios.interceptors.request.use((req)=>{
    const token=localStorage.getItem("access")
    if(token){
        req.headers.Authorization=`Bearer ${token}`
    }
    console.log("req",req);
    return req
})
axios.interceptors.response.use(
    (response)=>{
        isFirst=true
        return response
    },
    async(error)=>{
        const originalReq=error.config
        
        
        if(error.response.status!=401){
            return Promise.reject(error)
        }
        if(error.response.status==403 && originalReq.url==AUTH_URL.refresh){
            localStorage.removeItem("access")
            return Promise.reject(error)
        }
        if(error.response.status==401 && originalReq.url!=AUTH_URL.login){
            if(isFirst){
                isFirst=false
            try{
                const refreshRes:refreshResponseType = await axios.post(
                    `${BASE_URL}${AUTH_URL.refresh}`,
                    {
                        refreshToken: localStorage.getItem("refresh"),
                        expiresInMins: 30
                    }
                );
                localStorage.setItem("access",refreshRes.accessToken);
                localStorage.setItem("refresh",refreshRes.refreshToken);
                const res=await axios.request(originalReq)
                    return Promise.resolve(res)
            }catch(e){
                console.log("retry ",e);
                localStorage.removeItem("access")
            }
        }}
       
        return Promise.reject(error)
    }
)
export default axios


