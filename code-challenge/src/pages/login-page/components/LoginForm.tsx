import { Form, Formik, Field} from "formik";
import * as Yup from "yup";

export default function LoginForm() {
  return (
    <Formik
    initialValues={{username:"",password:""}}
    onSubmit={
        (value)=>{
            console.log(value);
            
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
                            <Field id="username" name="username" placeholder="Enter your user name" className="px-2 py-2 text-sm text-gray-600 rounded-md focus:outline-none border border-gray-100 focus:border-gray-300"/>
                            <span className="text-xs text-red-600 pl-2 h-4">{errors.username}</span>
                        </label>
                        <label htmlFor="password" className="flex flex-col w-full gap-[2px]">
                            <span className="text-emerald-700 mb-1">Password</span>
                            <Field id="password" name="password" placeholder="Password" className="px-2 py-2 text-sm text-gray-600 rounded-md focus:outline-none border border-gray-100 focus:border-gray-300"/>
                            <span className="text-xs text-red-600 pl-2 h-4">{errors.password}</span>
                        </label>
                        <button type="submit" className="bg-emerald-600 w-24 h-9 text-white font-bold rounded-lg shadow-md shadow-emerald-800 hover:bg-emerald-500 ">Login</button>
                        {/* <span className="text-red-600 text-xs">is error</span> */}
                    </Form>
                )
            }
        }
    </Formik>
  )
}
