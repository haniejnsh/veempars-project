import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "../services/baseService";

interface taskType { 
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}

interface dataType {
    limit: number;
    skip: number;
    todos: taskType[];
    total: number;
}

export default function useGet(address:string):UseQueryResult<dataType> {
    const query = useQuery<dataType>({
        queryKey: ["task"],
        queryFn: async () => {
            const res = await axios.get<dataType>(address);
            return res.data;
        }
    });
    return query;
}