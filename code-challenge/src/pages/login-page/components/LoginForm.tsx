import { Form, Formik, Field} from "formik";
import * as Yup from "yup";
import useLogin from "../../../hooks/useLogin";
import { useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";

interface LoginFormValuesType {
    username:string;
    password:string;
    expiresInMins:number;
}
interface formValues {
    username: string;
    password: string;
  }


export default function LoginForm() {
    const {mutate,isError,error}=useLogin()
    const [hidden,setHidden]=useState("password")
    if(isError){console.log(error);
    }
  return (
    <Formik<formValues>
    initialValues={{username:"",password:""}}
    onSubmit={
        (value:formValues)=>{
            const loginInformation:LoginFormValuesType={...value,expiresInMins: 30}
            mutate(loginInformation)
        }
    }
    validationSchema={
        Yup.object({
            username:Yup.string().required("username is important"),
            password:Yup.string().required("password is important"),
        })
    }
    validateOnChange={false} 
    validateOnBlur={false}
    >
        {
            ({errors})=>{
                return(
                    <Form className="flex flex-col justify-center items-center bg-gray-100 shadow-md shadow-gray-200 px-6 pt-8 pb-8 gap-4 w-full rounded-lg">
                        <label htmlFor="username" className="flex flex-col w-full gap-[2px]">
                            <span className="text-emerald-700 mb-1">Username</span>
                            <Field id="username" name="username" placeholder="Enter your username" className="px-2 py-2 text-sm text-gray-600 rounded-md focus:outline-none border border-gray-100 focus:border-gray-300"/>
                            <span className="text-xs text-red-600 pl-2 h-4">{errors.username}</span>
                        </label>
                        <label htmlFor="password" className="flex flex-col w-full gap-[2px]" >
                            <span className="text-emerald-700 mb-1">Password</span>
                            {(hidden=="password")?<IoEyeSharp onClick={()=>setHidden("text")} className="relative sm:-right-[370px] -right-[325px] top-7 text-gray-500 cursor-pointer transition"/>:<BsEyeSlashFill onClick={()=>setHidden("password")} className="relative sm:-right-[370px] -right-[325px] top-7 text-gray-500 cursor-pointer transition"/>}
                            <Field type={hidden} id="password" name="password" placeholder="Enter your password" className="px-2 py-2 text-sm text-gray-600 rounded-md focus:outline-none border border-gray-100 focus:border-gray-300"/>
                            <span className="text-xs text-red-600 pl-2 h-4">{errors.password}</span>
                        </label>
                        <button type="submit" className="bg-emerald-600 w-24 h-9 text-white font-bold rounded-lg shadow-md shadow-emerald-800 hover:bg-emerald-500 ">Login</button>
                        {(() => {
                            if (isError) {
                                const mes = error?.response?.data as { message: string };
                                return (
                                <span className="text-red-600 text-xs">
                                    error: {mes.message || "An unexpected error occurred"}
                                </span>
                                );}
                            return ""; 
                        })()}
                    </Form>
                )
            }
        }
    </Formik>
  )
}
