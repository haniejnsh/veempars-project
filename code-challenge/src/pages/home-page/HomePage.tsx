import useGet from "../../hooks/useGet";
import { TODO_URL } from "../../services/api";
import Pagination from "./components/Pagination";
import TaskCard from "./components/TaskCard";

interface taskType { 
  id:number;
  todo:string;
  completed:boolean;
  userId:number;
}

export default function HomePage() {
  
 
  const {data,isLoading,isError}=useGet(`${TODO_URL}?limit=10&skip=10`)
  if(isLoading){
    return(
      <div className="text-emerald-600 flex w-full items-center justify-center text-xl pt-20 font-bold" >is loading . . .</div>
    )
  }
  if(isError){
    return(
      <div className="text-red-600 flex w-full items-center justify-center text-xl pt-20 font-bold">Error occurred</div>
    )
  }
  console.log(data,data?.todos);
  
  return (
    <div className="flex flex-col w-full items-center  pt-10 pb-6 px-8 gap-8">
      <h1 className="text-2xl font-bold text-emerald-800">
        All tasks
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6">
        {
          data?.todos?.map((task:taskType)=>{
            return(
              <TaskCard key={task.id} task={task}/>
            )
          })
        }
      </div>
      <div className="py-4">
        <Pagination/>
      </div>

    </div>
  )
}
