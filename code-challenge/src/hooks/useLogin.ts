import { useMutation } from "@tanstack/react-query";
import axios from "../services/baseService";
import { AUTH_URL } from "../services/api";

export default function useLogin() {
  const mutation=useMutation({
    mutationFn:async (user)=>{
        const res=await axios.post(`${AUTH_URL.login}`,user);
        return res.data
    },
    onSuccess:(data)=>{
        console.log("success login",data);
        // localStorage.setItem("access",data)
        
    }
  })
  return mutation;
}
