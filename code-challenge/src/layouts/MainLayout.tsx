import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout() {
  const token=localStorage.getItem("access");
  return (
    <div>
        <Header/>
        {(token)?(
          <Outlet/>
        ):(
          <Navigate to={"/login"}/>
        )}
    </div>
  )
}
