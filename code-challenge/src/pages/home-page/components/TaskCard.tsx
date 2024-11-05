import { MdModeEdit, MdDeleteForever  } from "react-icons/md";

export default function TaskCard({task}) {
    const complete:boolean=task.completed
  return (
    <div className="flex bg-gray-50 w-[440px] sm:w-[560px] lg:w-[440px] xl:w-[560px] mx-auto  items-center justify-between rounded-xl border border-gray-100 shadow-lg shadow-gray-200 px-4 py-4 gap-6">

        <div className={`${complete?"bg-emerald-500 hover:bg-emerald-400":"hover:bg-emerald-100"} border border-gray-500 w-4 h-4 rounded-full transition cursor-pointer`}></div>

        <div className="grow text-gray-800">
            {task.todo}
        </div>

        <div className="flex gap-2 items-center text-xl">
            <MdModeEdit className="text-yellow-600 hover:text-yellow-500 cursor-pointer transition"/>
            <MdDeleteForever className="text-red-600 hover:text-red-400 cursor-pointer transition"/>
        </div>

    </div>
  )
}
