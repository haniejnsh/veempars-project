import { createBrowserRouter, RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AddPage from "../pages/add-page/AddPage";
import HomePage from "../pages/home-page/HomePage";
import LoginPage from "../pages/login-page/LoginPage";

const routes:RouteObject[]=([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                path:"/add",
                element:<AddPage/>
            }
        ],
    },
    {
        path:"/login",
        element:<LoginPage/>
    }
])

const router=createBrowserRouter(routes)
export default router
