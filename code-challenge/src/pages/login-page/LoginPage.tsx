import { Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center py-12 px-6 mx-auto gap-10 sm:w-[500px] w-[450px]">
      <h1 className="text-2xl font-bold text-emerald-800">Login form</h1>
      <LoginForm/>
      <div className="flex gap-1 text-emerald-800">
        <span>come back to </span>
        <Link to={"/"} className="text-emerald-500 font-bold hover:text-emerald-400 transition">Home</Link>
      </div>
    </div>
  )
}
