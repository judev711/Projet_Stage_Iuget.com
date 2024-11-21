// import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" h-screen justify-center items-center flex bg-gray-200 ">
      <div className="flex w-full p-5">
        {/* section connection  */}
        <div className="bg-white w-full    ">
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-5">Welcome Back</h1>
            <div className="grid grid-cols-2 gap-2 w-full max-md:grid-cols-1">
              {/*reseau sociaux */}
              <div className="flex items-center border-2 rounded-lg   border-gray-200 p-2 space-x-1 ">
                <a
                  href="https://monecoledigitale.com/wp-content/uploads/2024/01/DEVELOPPEUR-WEB-ET-WEB-MOBILE%E2%80%93-RNCP-37674BC01.pdf"
                  className="flex items-center"
                >
                  <BiLogoFacebook className="text-xl font-bold" />
                  <p className="font-semi-bold text-nowrap">
                    Sign in with Facebook
                  </p>
                </a>
              </div>
              {/* moteur de recherche */}
              <div className="flex items-center border-2 rounded-lg   border-gray-200 p-2  ">
                <a
                  href="https://monecoledigitale.com/wp-content/uploads/2024/01/DEVELOPPEUR-WEB-ET-WEB-MOBILE%E2%80%93-RNCP-37674BC01.pdf"
                  className="flex items-center gap-2"
                >
                  <FaGoogle className="text-xl font-bold" />
                  <p className="font-semi-bold text-nowrap">
                    Sign in with Google
                  </p>
                </a>
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
                    <div className="gap-3 flex text-nowrap">
                      <input type="checkbox" className="" />
                      <label className="text-gray-500">Remember me</label>
                    </div>
                    <div>
                      <p className="text-violet-800  text-nowrap">
                        <a
                          href="https://monecoledigitale.com/wp-content/uploads/2024/01/DEVELOPPEUR-WEB-ET-WEB-MOBILE%E2%80%93-RNCP-37674BC01.pdf"
                          className="hover:underline"
                        >
                          Forgot Password?{" "}
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* different sign */}
                  <div className="flex flex-col gap-3 items-start ">
                    <Link to="/employee/dashboard">
                      <p className="text-white bg-violet-700 p-2 rounded-lg font-semibold">
                        Sign in as employee
                      </p>
                    </Link>
                    <p className="text-white bg-violet-700 p-2 rounded-lg font-semibold">
                      <a href="https://monecoledigitale.com/wp-content/uploads/2024/01/DEVELOPPEUR-WEB-ET-WEB-MOBILE%E2%80%93-RNCP-37674BC01.pdf">
                        Sign in as team lead
                      </a>
                    </p>
                    <p className="text-white bg-violet-700 p-2 rounded-lg font-semibold">
                      <a href="https://monecoledigitale.com/wp-content/uploads/2024/01/DEVELOPPEUR-WEB-ET-WEB-MOBILE%E2%80%93-RNCP-37674BC01.pdf">
                        Sign in as admin
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* section information */}
        <div className="bg-violet-600 w-full max-lg:hidden flex items-center p-4">
          <div className="">
            <h1 className="text-white text-5xl font-bold mb-4 ">
              {" "}
              Lorem ipsum dolor sit amet consectetur ?
            </h1>
            <p className="text-xl text-white mb-12 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sint
              obcaecati magnam adipisci ullam dolor minus, quasi autem
              voluptates odit consequuntur labore. Alias, unde illo dolorem quam
              quia odio veritatis!
            </p>
            <div className="flex items-center">
              <a
                href="https://monecoledigitale.com/wp-content/uploads/2024/01/DEVELOPPEUR-WEB-ET-WEB-MOBILE%E2%80%93-RNCP-37674BC01.pdf"
                className="flex items-center hover:scale-105 duration-300"
              >
                <p className="p-6 text-white font-bold">Get Started</p>
                <FaArrowRight className="text-xl text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
