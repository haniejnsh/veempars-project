import { useMutation } from "@tanstack/react-query";
import axios from "../services/baseService"
import { TODO_URL } from "../services/api";
import { queryClient } from "../lib/reactQuery";


export default function useEdit() {

  const mutation= useMutation({
    mutationFn: async (task) => {
      const res = await axios.patch(`${TODO_URL}/${task.id}`,task.information);
      return res.data;
      
    },
    onSuccess: (data) => {
        console.log("edit",data);
        queryClient.invalidateQueries({
          queryKey:["task"]
        })
        
      },
  });

  return mutation;
}