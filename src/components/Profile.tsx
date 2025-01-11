// import React from 'react'
import {  SetStateAction, useState } from "react"
import { Link } from "react-router-dom"
import { BiHome } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdDarkMode, MdOutlineDateRange } from "react-icons/md";
import { MdReportGmailerrorred } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiSignOut } from "react-icons/pi";
import { FaDownload } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import { LuLogOut } from "react-icons/lu";
import { FaUserCheck } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import { FiFilter } from "react-icons/fi";
import { FaSort } from "react-icons/fa";
import { TbClockHour4 } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";

const Profile = () => {
  const [Tab, setTab]=useState(2);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [open, setopen]=useState(false)
const toggle = ()=>{
   setopen(!open)
}


//   const [Open, SetOpen]= useState(true)
  const HandlesTab = (Tab: SetStateAction<number>)=>{
 setTab(Tab)
  }

  return ( <>
  
 <nav  className={`fixed top-0 z-50 w-full bg-[#7e22ce] border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700`}>
  <div className="px-3 py-3 lg:px-5 lg:pl-3 ">
    <div className="flex items-center justify-between">
      {/* navbar logo */}
      <div  className="flex items-center justify-start rtl:justify-end ">
        
        {/* burger */}
        <button  onClick={toggleSidebar}   type="button" className="inline-flex items-center p-2 text-sm text-white  font-bold  dark:text-gray-400 dark:hover:bg-gray-700 " >
               <RxHamburgerMenu className={`w-5 h-5 `} />
            {/* burger */}
         </button>
         
         
        <a href="" className="flex ms-2 md:me-24  gap-2">
          <span className="self-center text-xl text-white font-extrabold sm:text-2xl whitespace-nowrap text dark:text-white">Theo</span>
        </a>
        {/* logo */}
      </div>
      {/* end of navbar logo */}
      {/* navbar of profil */}
 <div className="flex items-center">
        <div className="flex items-center ms-[1.29rem]">
          {/* user profile */}
          <div  className="flex items-center gap-5 max-md:gap-2">
            <Link to="/Login">
            <div className="group">
              <div className="flex items-center gap-2 group-hover:bg-white border  p-2 rounded-lg cursor-pointer">
                <PiSignOut className="flex-shrink-0 max-sm:w-5 max-sm:h-5 md: group-hover:text-black  text-white dark:text-gray-400  dark:group-hover:text-white" />
                <p className="text-white text-sm group-hover:text-black text-nowrap">Sign Out</p>
              </div>
            </div>  
            </Link>
            <MdNotifications className="flex-shrink-0 max-sm:w-5 max-sm:h-5 w-7 h-7 text-white cursor-pointer dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <MdDarkMode className="text-2xl text-white"/>
            <button
             
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              onClick={toggle}
            >
              <img
                className=" md:w-8 md:h-8 max-lg:w-8 max-lg:h-8  max-sm:w-8 max-sm:h-8 rounded-full cursor-pointer"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&amp;w=1000&amp;q=80" alt="Theodore711"
                
              />
            </button>
          </div>
          {/* user profil */}
                  <div
                  
                    className={`z-50 absolute right-0 mt-52 mx-2  py-2 w-54 bg-white rounded-md shadow-lg dark:bg-gray-700 ${
                      open ? 'block' : 'hidden'
                    }`}
                  >
                    <ul className="divide-y divide-gray-100 dark:divide-gray-600">
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          <p>Theo@711</p>
                          <p>theodore@gmail.com</p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:text-green-600 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                        Profile
                        </a>
                      </li>
                    
                      <li>
                      <Link to="/Login">
                        <a
                          href="#"
                          className="block px-4 py-2 hover:text-red-600 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </Link>
                      </li>
                    </ul>
                  </div>
          {/* **************** */}
        </div>
      </div>
  
    </div>
  </div>
</nav>
{/* start sidebar */}
<aside  className={`fixed  top-0 left-0 z-40  h-screen  pt-20  ${!isSidebarOpen ?'w-16':'w-56'}    bg-violet-100 border-r border-gray-200 transition-all duration-700  dark:bg-gray-800 dark:border-gray-700`} >
   <div  className={`h-full  px-[0.80rem] pb-4 overflow-y-auto  dark:bg-gray-800   `}>
      <ul className={`space-y-3 font-medium     ` }>
        {/* icon Dashboard */}
         <li className="">
          <Link to='/employee/dashboard'>
            <a href="#" className="flex items-center  p-2 text-gray-900 rounded-lg dark:text-white  hover:bg-gray-100 dark:hover:bg-gray-700 group ">
               <BiHome className={`flex-shrink-0 w-5 h-5 ${Tab ===1 ? 'text-blue-600 font-bold':'text-gray-500'}      dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white   `}/>
               <span  onClick={()=>HandlesTab(1)} className={`${Tab ===1 ? 'text-blue-600 font-bold':'text-gray-900'} ms-[1.29rem]   `} > Dashboard</span>
            </a>
            </Link>
         </li>
         <li>
         {/* profil users */}
            <Link to='/userdetail' >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <FiUser className={`flex-shrink-0 w-5 h-5 ${Tab ===2 ? 'text-blue-600 font-bold':'text-gray-500'}  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`} />
                  
               <span onClick={()=>HandlesTab(2)} className={`${Tab===2 ? 'text-blue-600 font-bold':'text-gray-900'} ms-[1.29rem] whitespace-nowrap  `} >Profile</span>
               
            </a>
            </Link>
         {/* profil users */}
         </li>
         <li>
         {/* Leaves Applications */}
          <Link to='/Leaves' >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <MdOutlineDateRange className={`flex-shrink-0 w-5 h-5 ${Tab ===3 ? 'text-blue-600 font-bold':'text-gray-500'}  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`} />
               <span  onClick={()=>HandlesTab(3)} className={`${Tab===3 ? 'text-blue-600 font-bold':'text-gray-900'} flex-1 ms-[1.29rem] whitespace-nowrap  `}>Leave Applications</span>
            </a>
            </Link>
         {/* Leaves Applications */}
         </li>
         <li>
          {/* Notifications */}
          <Link to='/Notifications' >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <IoNotificationsOutline  className={`flex-shrink-0 w-5 h-5 ${Tab ===4 ? 'text-blue-600 font-bold':'text-gray-500'} dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}/>
               <span  onClick={()=>HandlesTab(4)} className={`${Tab===4 ? 'text-blue-600 font-bold':'text-gray-900'} flex-1 ms-[1.29rem] whitespace-nowrap  `}>Notifications</span>
            </a>
            {/* Notifications */}
            </Link>
         </li>
         <li>
          {/* reportproblems */}
          <Link to='/Reportproblem' >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <MdReportGmailerrorred className={`flex-shrink-0 w-5 h-5 ${Tab ===5 ? 'text-blue-600 font-bold':'text-gray-500'}  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}/>
               <span  onClick={()=>HandlesTab(5)} className={`${Tab===5 ? 'text-blue-600 font-bold': 'text-gray-900'} flex-1 ms-[1.29rem] whitespace-nowrap  `}>Report a Problem</span>
            </a>
            </Link>
            {/*reportproblems  */}
         </li>
      </ul>
   </div>
</aside>
{/* End sidebar */}
<div className="p-4 ml-14 mt-5 ">
{/* Employee Details */}
   <div  className={`p-4 border-2 bg-white/45 ${isSidebarOpen ? 'translate-x-0':'14'} transition-transform  border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-10 `}>
      <div className="  mb-4 ">
        {/* les trois premiers grid (1re colone) */}
         <div className="flex flex-col  p-3    rounded bg-[#F3F4F6] dark:bg-gray-800">
            <div className="flex  justify-between max-sm:flex-col max-sm:items-start gap-6 mb-10     items-center w-full">
               <div className="flex gap-1 items-center">
                  <div className="bg-violet-700 p-1 rounded-lg w-2 h-[30px]"></div>
                  <p className="text-xl  text font-poppins  text-black dark:text-gray-500">Employee Details</p>
               </div>
               <div className="flex gap-1 items-center text-white p-3 rounded-lg bg-violet-700 cursor-pointer">
                  <FaDownload className="" />
                  <p className="text font-poppins dark:text-gray-500">Download Info</p>
               </div>
            </div>
            <div className="flex flex-row max-sm:flex-col max-sm:gap-2 ">
               <div className=" flex justify-center items-center">
                  <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&amp;w=1000&amp;q=80" alt="Bonnie image"/>
               </div>
               <div className="flex  items-center max-sm:justify-center text-xl md:text-2xl mb-2 px-6 py-3 max-sm:px-0 max-sm:py-0">John Doe</div>
            </div>
               {/* table 1 */}
                  <div className="relative overflow-x-auto">
                     {/* max-md:hidden */}
                     <table className="text-sm text-left hidden lg:block sm:block md:block ">
                        <thead className="text-xs  text-gray-500 uppercase bg-transparent">
                           <tr>
                              <td scope="col" className="px-6 py-3 ">Role</td>
                              <td scope="col" className="px-6 py-3">Phone Number</td>
                              <td scope="col" className="px-6 py-3">Email Address</td></tr>
                        </thead>
                        <tbody>
                           <tr className="bg-transparent text-textColor">
                              <th className="px-6 py-4 font-md">Web Dev</th>
                              <th className="px-6 py-4 font-md">673 330 148</th>
                              <th className="px-6 py-4 font-md">theo@gmail.com</th>
                              </tr>
                        </tbody>
                     </table>
                     {/* max-md:hidden */}
                     {/* table 2 */}
                     <table className=" text-sm text-left hidden max-sm:block   ">
                        <thead className="text-xl flex  max text-black uppercase bg-transparent w-full">
                           <th className="">Informations</th>
                        </thead>
                        <tbody>
                           <tr className="text-xs  text-gray-500 uppercase bg-transparent">
                              <th className="px-6 py-4 font-md">Role</th>
                              <td className="text-black font-bold text-sm">Web Dev</td>
                           </tr>
                           <tr className="text-xs  text-gray-500 uppercase bg-transparent">
                              <th className="px-6 py-4 font-md">PHONE NUMBER</th>
                              <td className="text-black font-bold text-sm"> 673 330 148</td>
                           </tr>
                           <tr className="text-xs  text-gray-500  bg-transparent">
                              <th className="px-6 py-4 font-md">EMAIL ADDRESS</th>
                              <td className="text-black font-bold text-sm">theo@gmail.com</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               {/* End table */}
               {/* starting of grids */}
               <div className="grid grid-cols-4 gap-4 mb-4 lg:grid-cols-4 max-lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1">
         <div className="flex p-3 rounded bg-slate-300 items-center h-28  dark:bg-gray-800 gap-3">
               <div className="flex rounded-full bg-slate-200 w-10 h-10 items-center justify-center">
                  <BiLogIn className=" flex items-center font-extrabold center text-2xl  dark:text-gray-500 " />
               </div>
               <div className=" flex flex-col ">
                  <p className="px-2">20</p>
                  <p className="text-sm">Total Attendance</p>
               </div>
         </div>
         <div className="flex p-3 rounded bg-slate-300 items-center h-28  dark:bg-gray-800 gap-3">
               <div className="flex rounded-full bg-slate-200 w-10 h-10 items-center justify-center">
                  <CiLogin  className=" flex items-center font-extrabold center text-2xl  dark:text-gray-500 " />
               </div>
               <div className=" flex flex-col ">
                  <p className="px-2">3 </p>
                  <p className="text-sm">Pending Leaves Request</p>
               </div>
         </div>
         <div className="flex p-3 rounded bg-slate-300 items-center h-28  dark:bg-gray-800 gap-3">
               <div className="flex rounded-full bg-slate-200 w-10 h-10 items-center justify-center">
                  <LuLogOut className=" flex items-center font-extrabold center text-2xl  dark:text-gray-500 " />
               </div>
               <div className=" flex flex-col ">
                  <p className="px-2">5</p>
                  <p className="text-sm">Total Leaves</p>
               </div>
         </div>
            <div className="flex p-3 rounded bg-slate-300 items-center h-28 dark:bg-gray-800 gap-3">
               <div className="flex rounded-full bg-slate-200 w-10 h-10 items-center justify-center">
                  <FaUserCheck className=" flex items-center font-extrabold center text-2xl  dark:text-gray-500 " />
               </div>
               <div className=" flex flex-col ">
                  <p className="px-2">2</p>
                  <p className="text-sm"> Total Absents</p>
               </div>
         </div>
      </div>
               {/* End starting grid */}
         </div>
      </div>
      {/* Historique */}
      <div className="flex flex-col p-3 bg-[#f3f4f6]  mb-4 rounded  dark:bg-gray-800 h-48 ">
         <div className="flex   justify-between  rounded  dark:bg-gray-800 w-full mb-4">
            <div className="flex  gap-2">
               <div className=" flex items-center h-[30px] w-2 rounded-lg bg-violet-700 p-1"></div>
               <p className="font-poppins text-xl text-gray-700">Attendance History</p>
            </div>
            <div className="flex flex-row gap-2 max-sm:hidden  ">
               <div className="bg-violet-700 p-1 rounded-lg h-[32px]">
                  <GrAppsRounded className="font-poppins text-white text-2xl"/>
               </div>
               <div className="bg-black p-1 rounded-lg h-[32px]">
                  <IoMenu className="font-poppins text-white text-2xl"/>
               </div>
               <div className="bg-black p-3 rounded-lg flex items-center h-[32px]  text-white   font-poppins gap-1">
                  <FiFilter/>
                  <p>Filter</p>
               </div>
               <div className="bg-black p-3  rounded-lg flex items-center h-[32px]  text-white font-poppins gap-1">
                  <FaSort />
                  <p>Sort</p>
               </div>
            </div>
            
         </div>
            <div className="flex justify-between w-[360px] max-sm:w-[285px] max-md:w-[500px] rounded-md bg-slate-300 font-poppins ">
                <div className="flex flex-col  p-3">
                  <div className="flex items-center gap-2 mb-4">
                     <TbClockHour4 className="font-poppins"/>
                     <p className="font-semibold ">Dec 24, 2024</p>
                  </div>
                  <div className="flex flex-col gap-1 text-sm">
                  <p className="text-gray-500">Check In time</p>
                  <p className="font-bold">9:00 AM</p>
                  </div>

                </div>
                <div className="flex flex-col  p-3">
                  <div className="mb-4">
                     <div className="rounded-full p-2 bg-green-200 flex items-center justify-center ">
                        <p className="text-green-400 text-xs font-extrabold">On Time</p>
                     </div>
                  </div>
                  <div className="flex flex-col gap-1  text-sm">
                     <p className="text-gray-500">Check Out Time</p>
                     <p className="font-bold">6:00 PM</p>
                  </div>
                </div>
            </div>
      </div>
      <div className="flex items-center justify-center gap-3 font-poppins mb-4 rounded  dark:bg-gray-800">
        <div className="rounded-lg p-3 bg-slate-300 cursor-pointer">
           <p>Previous</p>
        </div>
        <div className="rounded-lg p-3 bg-violet-700 cursor-pointer text-white">
           <p>1</p>
        </div>
        <div className="rounded-lg p-3 bg-slate-300 cursor-pointer">
          <p>Next</p>
        </div>
      </div>
         <div className="flex flex-col p-3 gap-2 font-poppins rounded bg-slate-100 h-48 dark:bg-gray-800 mb-4">
            <div className="flex gap-2 mb-4">
               <div className="h-[30px] flex items-center  bg-violet-700 w-2 rounded-lg"></div>
               <p className=" text-gray-700 text-xl dark:text-gray-500">
                  Reviews
               </p>
            </div>
            <div className="flex flex-col gap-3  font-poppins ">
               <div className="flex flex-row gap-3 items-center font-poppins px-6">
                  <div className="flex flex-row gap-3 text-amber-400 text-xl items-center">
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                     <FaStar/>
                  </div>
                  <p className="text-2xl ">|</p>
                  <p className="text-gray-600 font-poppins">24 Dec 2024</p>
            </div>
            <p className="px-6 font-bold">He is a good student</p>
            <hr className="border-black"></hr>

         </div>
         </div>
         
      
   </div>
</div>

  </>
  )
}

export default Profile