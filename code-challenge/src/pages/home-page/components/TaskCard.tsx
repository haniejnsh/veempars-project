import { Button, IconButton } from "@mui/material";
import { MdModeEdit, MdDeleteForever  } from "react-icons/md";
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface taskType { 
  id:number;
  todo:string;
  completed:boolean;
  userId:number;
}
interface propsType {
  task:taskType;
  openModal:(o:boolean)=>void;
}

export default function TaskCard({task , openModal}:propsType) {
    const complete:boolean=task.completed
    const handleOpen = () => openModal(true);

  return (
    <div className="flex bg-gray-50 w-[440px] sm:w-[560px] lg:w-[440px] xl:w-[560px] mx-auto  items-center justify-between rounded-xl border border-gray-100 shadow-lg shadow-gray-200 px-4 py-2 gap-6 h-20">

        <div className={`${complete?"bg-emerald-500 hover:bg-emerald-400":"hover:bg-emerald-100"} border border-gray-500 min-w-4 w-4 h-4 mr-2 rounded-full transition cursor-pointer`}></div>

        <div className="grow text-gray-800">
          <span className="text-emerald-600">{task.id}</span>
          <span className="mx-1">-</span>
          <span>{task.todo}</span>
            
        </div>

        <div className="flex gap-2 items-center text-xl">
            <MdModeEdit className="text-yellow-600 hover:text-yellow-500 cursor-pointer transition"/>
            {/* <Button variant="text" onClick={handleOpen} color="error" > */}
            <IconButton aria-label="delete" color="error" onClick={handleOpen}>
              <DeleteForeverIcon />
            </IconButton>
            
              {/* <MdDeleteForever className="text-red-600 hover:text-red-400 cursor-pointer transition"/> */}
              
            {/* </Button> */}
            
        </div>

    </div>
  )
}
