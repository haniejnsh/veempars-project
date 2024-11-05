import { useMutation } from "@tanstack/react-query";
import { TODO_URL } from "../services/api";
import axios from "../services/baseService";
import { queryClient } from "../lib/reactQuery";


export default function useDelete() {
    const mutation= useMutation({
        mutationFn: async (id:number) => {
          const res = await axios.delete(`${TODO_URL}/${id}`);
          return res.data;
        },
        onSuccess: () => {
            console.log("dalete");
            queryClient.invalidateQueries({
                  queryKey:["task"]
                })
          }
      });
    
      return mutation;
}
