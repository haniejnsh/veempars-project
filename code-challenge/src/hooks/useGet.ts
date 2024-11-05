import { useQuery } from "@tanstack/react-query";
import axios from "../services/baseService";

export default function useGet(address:string) {
    const query=useQuery({
        queryKey:["task"],
        queryFn: async ()=>{
            const res=await axios.get(address)
            return res.data
        }
    })
    return query
}
