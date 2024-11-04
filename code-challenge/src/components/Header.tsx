import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex gap-2 py-5 px-6 bg-gray-200 text-gray-800 ">
        <div className="w-[40%] text-xl text-gray-600 font-bold">veempars code challenge</div>
        <div className="flex justify-start gap-44 text-lg font-bold w-[60%]">
            <NavLink to={"/"} className={({isActive})=> isActive?"text-red-400":"text-gray-500 hover:text-red-300 transition"}>home</NavLink>
            <NavLink to={"/add"} className={({isActive})=> isActive?"text-red-400":"text-gray-500 hover:text-red-300 transition"}>add</NavLink>
            <NavLink to={"/login"} className={"text-gray-500 hover:text-red-300 transition"}>login</NavLink>
        </div>
    </div>
  )
}
