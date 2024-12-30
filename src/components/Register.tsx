// import { BiLogoFacebook } from "react-icons/bi";
// import { FaGoogle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <div className="justify-center items-center flex bg-slate-100 max-sm:px-3 md:px-6 md:py-8 max-sm:py-3 mx-auto md:h-screen ">
          <div className="flex w-full ">
            {/* section connection  */}
            <div className="bg-white w-full    ">
              <div className="max-sm:p-3 md:p-6 ">
                <h1 className=" max-sm:text-xl text-3xl font-bold">WELCOME</h1>
                <h1 className="text-center text-xl font-bold mb-5 mt-3 ">Registration Form</h1>
                <hr className="border-t-1 border-black flex-1   mb-5 " />
                <div className="">
                  {/* formulaire */}
                  <form method="Post" action="">
                    <div className="w-full font-poppins max-sm:text-sm">
                      {/* Premier Group */}
                      <div className="mb-4 grid grid-cols-2   gap-2 w-full  "> 
                        <div className="flex flex-col ">
                          <label className="font-semibold">LastName</label>
                        <input
                          type="text" required
                          className="rounded-md p-2 border-2 outline-none bg-gray-100 "
                          placeholder="Siyandji"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="font-semibold">FirstName</label>
                         <input
                          type="text" required
                          className="rounded-md p-2 border-2 outline-none bg-gray-100 "
                          placeholder="Theodore"/>
                        </div>
                      </div>
                      <div className="mb-4 grid grid-cols-2  gap-2 w-full  "> 
                        <div className="flex flex-col ">
                          <label className="font-semibold">Date Of Birth</label>
                        <input
                          type="date" required
                          className="rounded-md p-2 border-2 outline-none bg-gray-100 "
                          placeholder="Siyandji"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="font-semibold">Sexe</label>
                         <select id="sexe" className="rounded-md p-2 border-2 outline-none bg-gray-100" required>
                          <option value="Maxculin">Masculin</option>
                          <option value="Feminin">Feminin</option>
                          <option value="Intersexe">Intersexe</option>
                         </select>
                        </div>
                      </div>
                      {/* Deuxieme grupe */}
                      <div className="mb-4 grid grid-cols-2   gap-2 w-full  "> 
                        <div className="flex flex-col ">
                          <label className="font-semibold">Role</label>
                        <select id="sexe" className="rounded-md p-2 border-2 outline-none bg-gray-100" required>
                          <option value="Maxculin">Employee</option>
                          <option value="Feminin">Web Dev</option>
                          <option value="Intersexe">Maintainer</option>
                         </select>
                        </div>
                        <div className="flex flex-col">
                          <label className="font-semibold">Phone Number</label>
                         <input
                          type="text" required
                          className="rounded-md p-2 border-2 outline-none bg-gray-100 "
                          placeholder="ex: 671 234 569"/>
                        </div>
                      </div>
                      <div className="mb-4 grid grid-cols-2   gap-2 w-full  "> 
                        <div className="flex flex-col ">
                          <label className="font-semibold">Email</label>
                        <input
                          type="Email" required
                          className="rounded-md p-2 border-2 outline-none bg-gray-100 "
                          placeholder="Theo@gmail.com"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="font-semibold">Password</label>
                         <input
                          type="Password" required
                          className="rounded-md p-2 border-2 outline-none bg-gray-100 "
                          placeholder="****"/>
                        </div>
                      </div>
                      {/* remember me */}
                      <div className="mb-3 flex flex-row items-center justify-between">
                        <div className="gap-1 flex text-nowrap items-center  ">
                          <input type="checkbox" required/>
                          <label className="text-gray-500">Remember me</label>
                        </div>
                        <div>
                          <p className="text-violet-800 font-semibold  text-nowrap">
                            <a
                              href=""
                              className="hover:underline"
                            >
                              Forgot Password?{" "}
                            </a>
                          </p>
                        </div>
                      </div>
                      {/* different sign */}
                      <div className="flex  items-center justify-center mt-8 ">
                        <Link to="/login">
                          <button type="submit" className="text-white bg-violet-700 p-2 rounded-lg font-semibold px-6 hover:bg-gray-900">Signup</button>
                       </Link>
                      </div>
                      <p className="font-mono font-bold mt-5 text-center">@2024 Theodore*711 </p>
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
  )
}

export default Register