import { NavLink } from "react-router-dom";

export default function Header() {
  const userString=localStorage.getItem("information") as string
  const user=JSON.parse(userString)
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 py-5 px-6 bg-gray-100 shadow-md shadow-gray-200">
        
        {(user)?(
          <div className="flex items-center gap-2 md:w-[40%] text-lg text-emerald-800 font-bold">
          <div className="w-7">
            <img src={user.image} alt="img" className="w-full"/>
          </div>
          <div className="flex items-center gap-1">
            <span>Welcome</span>
            <span>{user.name}</span>
            <span>{user.family}</span>
          </div>
        </div>
        ):(
          <div className="md:w-[40%] text-xl text-emerald-800 font-bold">veempars code challenge</div>
        )}
        
        <div className="flex justify-around w-full lg:justify-start lg:gap-44 text-lg font-bold md:w-[60%]">
            <NavLink to={"/"} className={({isActive})=> isActive?"text-emerald-400":"text-gray-500 hover:text-emerald-300 transition"}>home</NavLink>
            <NavLink to={"/add"} className={({isActive})=> isActive?"text-emerald-400":"text-gray-500 hover:text-emerald-300 transition"}>add</NavLink>
            <NavLink to={"/login"} className={"text-gray-500 hover:text-emerald-400 transition"}>login</NavLink>
        </div>
    </div>
  )
}
