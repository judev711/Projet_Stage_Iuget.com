// import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SignInButton } from "@clerk/clerk-react"


const Login = () => {
  return (
    <div className="justify-center items-center flex bg-slate-100 px-6 py-8 mx-auto md:h-screen ">
      <div className="flex w-full ">
        {/* section connection  */}
        <div className="bg-white w-full    ">
          <div className="p-8 xl:mt-5">
            <h1 className="text-2xl font-bold mb-5">Welcome Back</h1>
            <div className="grid grid-cols-2 gap-2 w-full max-md:grid-cols-1">
              {/*reseau sociaux */}
              <div onClick={()=> alert("Fonctionnalite non disponible ")}  className="flex items-center cursor-pointer border-2 rounded-lg  bg-black/50 border-gray-200 p-2 space-x-1  ">
                  <BiLogoFacebook className="text-xl font-bold" />
                  <p className="font-semi-bold text-nowrap">
                    Sign in with Facebook
                  </p>
              </div>
              {/* moteur de recherche */}
              <div className="flex items-center border-2 rounded-lg gap-1 bg-violet-500 text-white font-semibold   border-gray-200 p-2 cursor-pointer ">
                  
                  <FaGoogle className="text-xl font-bold" />
                  <div className="flex items-center gap-2  ">
                  <SignInButton mode="modal" signUpForceRedirectUrl='/admin' />
                  <p>With Google</p>
                  </div>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center mb-10">
              <hr className="border-t-1 flex-1  border-gray-300 " />
              <span className="mx-4 text-gray-400">Or</span>
              <hr className="border-t-1 flex-1 border-gray-300" />
            </div>
            <div className="">
              {/* formulaire */}
              <form method="Post" action="">
                <div>
                  <div className="mb-3 flex flex-col gap-1">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      className="rounded-md p-2 border-2 outline-none bg-gray-100"
                      placeholder="theo@Dev.com"
                    />
                  </div>
                  <div className="mb-6 flex flex-col gap-1">
                    <label className="font-semibold">Password</label>
                    <input
                      type="Password"
                      className="rounded-md p-2 border-2 outline-none bg-gray-100 placeholder:text-xl    "
                      placeholder="*********"
                    />
                  </div>
                  {/* remember me */}
                  <div className="mb-3 flex flex-row items-center justify-between">
                    <div className="gap-1 flex text-nowrap items-center  ">
                      <input type="checkbox" className="" />
                      <label className="text-gray-500">Remember me</label>
                    </div>
                    <div onClick={()=> alert("Fonctionnalite non disponible")}>
                      <p className="text-violet-800  text-nowrap bg-black/75 p-2 rounded cursor-pointer">
                          Forgot Password?{" "}
                      </p>
                    </div>
                  </div>
                  {/* different sign */}
                  <div className="flex  gap-3 items-center justify-between  ">
                    <Link to="/employee/dashboard">
                      <p className="text-white bg-violet-700 p-2 rounded-lg font-semibold hover:scale-105 transition-all duration-500 hover:bg-gray-900">
                        Sign In
                      </p>
                    </Link> 
                    <p className="font-poppins font-bold justify-between">Or</p>
                    <Link to="/Register">
                      <p className="text-white bg-violet-700 p-2 rounded-lg font-semibold hover:scale-105 transition-all duration-500 hover:bg-gray-900">
                        Register
                      </p>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* section information */}
        <div className=" w-full max-lg:hidden flex items-center p-4 border-black border-1">
          <div className="flex justify-center items-center  ">
            <img src="../src/assets/image_login.jpeg" alt="image_login" className="rounded-md bg-contain hover:scale- duration-300 mt-10"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
