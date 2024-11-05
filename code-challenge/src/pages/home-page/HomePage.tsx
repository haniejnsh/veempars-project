import TaskCard from "./components/TaskCard";

export default function HomePage() {
  interface taskType { 
    id:number;
    todo:string;
    completed:boolean;
    userId:number;
  }
  const tasks:taskType[]=[
    {id:1,todo:"Watch1 a classic movie",completed:true,userId:68},
    {id:2,todo:"Watch2 a classic movie",completed:false,userId:25},
    {id:3,todo:"Watch3 a classic movie",completed:true,userId:32}
  ]
  return (
    <div className="flex flex-col w-full items-center  pt-10 pb-6 px-8 gap-8">
      <h1 className="text-2xl font-bold text-emerald-800">
        All tasks
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-6">
        {
          tasks.map(task=>{
            return(
              <TaskCard task={task}/>
            )
          })
        }
      </div>
      

    </div>
  )
}
