import { useEffect, useState } from "react";
import useGet from "../../hooks/useGet";
import { TODO_URL } from "../../services/api";
import Pagination from "./components/Pagination";
import TaskCard from "./components/TaskCard";
import DeleteModal from "./components/DeleteModal";
import EditModal from "./components/EditModal";

interface taskType { 
  id:number;
  todo:string;
  completed:boolean;
  userId:number;
}

export default function HomePage() {
  const [page,setPage]=useState(0)
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selected, setSelected] = useState({id:0,todo:"",completed:false,userId:0});

  const handleClose = () => setOpen(false);
  const handleCloseEdit = () => setOpenEdit(false);
 
  const {data,isLoading,isError,refetch}=useGet(`${TODO_URL}?limit=10&skip=${page}`)

  useEffect(
    ()=>{refetch()}
  ,[page,refetch])


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
  // console.log(data);
  const dataTotal=data?.total as number
  const totalPage:number=Math.ceil(dataTotal/10) 
  return (
    <div className="flex flex-col w-full items-center  pt-10 pb-6 px-8 gap-8">
      <h1 className="text-2xl font-bold text-emerald-800 mt-6 mb-8">
        All tasks
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6">
        {
          data?.todos?.map((task:taskType)=>{
            return(
              <>
                <TaskCard key={task.id} task={task} openModal={o => setOpen(o)} openEditModal={o => setOpenEdit(o)} selectedTask={s=>setSelected(s)}/>
                  
              </>
              
            )
          })
        }
      </div>
      <div className="py-4">
        <Pagination  totalPage={totalPage} pageNumber={page} pageCounter={p => setPage(p)}/>
      </div>
      <DeleteModal open={open} handleClose={handleClose} task={selected}/>
      <EditModal open={openEdit} handleClose={handleCloseEdit} task={selected}/>

    </div>
  )
}
