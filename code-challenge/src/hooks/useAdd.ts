import { useMutation } from "@tanstack/react-query";
import axios from "../services/baseService";
import { ADD_URL } from "../services/api";
import { queryClient } from "../lib/reactQuery";

export default function useAdd() {

  const mutation= useMutation({
    mutationFn: async (task) => {
      const res = await axios.post(ADD_URL,task);
      return res.data;
    },

    onSuccess: (data) => {
        console.log("add",data);
        queryClient.invalidateQueries({
          queryKey:["task"]
        })
      },
  });

  return mutation;
}