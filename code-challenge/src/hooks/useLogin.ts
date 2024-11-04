import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios from "../services/baseService";
import { AUTH_URL } from "../services/api";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

interface userType {
    username:string;
    password:string;
    expiresInMins:number;
}
interface loginResponse {
    id: number;
    accessToken: string;
    refreshToken: string;
    firstName: string;
    lastName: string;
    image: string;
    username: string;
    email: string;
    gender: string;
}


export default function useLogin(): UseMutationResult<loginResponse,AxiosError,userType> {
    const navigate=useNavigate()
  const mutation=useMutation<loginResponse,AxiosError,userType>({
    mutationFn:async (user:userType)=>{
        const res=await axios.post(`${AUTH_URL.login}`,user);
        return res.data
    },
    onSuccess:(data)=>{
        console.log("success login",data);
        localStorage.setItem("access",data.accessToken)
        localStorage.setItem("refresh",data.refreshToken
        )
        localStorage.setItem("information",JSON.stringify({name:data.firstName,family:data.lastName,image:data.image}))
        navigate("/")
    }
  })
  return mutation;
}
