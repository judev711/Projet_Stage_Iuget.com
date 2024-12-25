// import React from 'react'
import {  SetStateAction, useState } from "react"
import { Link } from "react-router-dom"
import { BiHome } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { MdReportGmailerrorred } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiSignOut } from "react-icons/pi";
import { MdModeEditOutline } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import { FiFilter } from "react-icons/fi";
import { FaSort } from "react-icons/fa";
import { TbClockHour4 } from "react-icons/tb";

const Leaves = () => {
  const [Tab, setTab]=useState(3);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [open, setopen]=useState(false)
const toggle = ()=>{
   setopen(!open)
}
const [open2, setopen2]=useState(true)
const toggle2 = ()=>{
   setopen2(!open2)
}
//   const [Open, SetOpen]= useState(true)
  const HandlesTab = (Tab: SetStateAction<number>)=>{
 setTab(Tab)
  }

  return ( <>
  
<nav className="fixed top-0 z-50 w-full bg-[#7e22ce] border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div className="px-3 py-3 lg:px-5 lg:pl-3 ">
    <div className="flex items-center justify-between">
      {/* navbar logo */}
      <div  className="flex items-center justify-start rtl:justify-end " onClick={toggle2}>
        
        {/* burger */}
        <button onClick={toggleSidebar}   type="button" className="inline-flex items-center p-2 text-sm text-white rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
               <RxHamburgerMenu className={`w-6 h-6 `} />
            {/* burger */}
         </button>
         
         
        <a href="https://www.tiktok.com/@theosmith57/video/7414610311086378273?is_from_webapp=1&sender_device=pc" className="flex ms-2 md:me-24  gap-2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhhhkrDZVCNQn3HT_6UToRIoC_AP4qpufmIA&s" className="w-8 h-8 rounded-full " />
          <span className="self-center text-xl text-white font-extrabold sm:text-2xl whitespace-nowrap text dark:text-white">Theo</span>
        </a>
        {/* logo */}
      </div>
      {/* end of navbar logo */}
      {/* navbar of profil */}
 <div className="flex items-center">
        <div className="flex items-center ms-3">
          {/* user profile */}
          <div className="flex items-center gap-5 max-md:gap-2">
            <Link to="/Login">
            <div className="group">
              <div className="flex items-center gap-2 group-hover:bg-white border  p-2 rounded-lg cursor-pointer">
                <PiSignOut className="flex-shrink-0 max-sm:w-5 max-sm:h-5 md: group-hover:text-black  text-white dark:text-gray-400  dark:group-hover:text-white" />
                <p className="text-white text-sm group-hover:text-black text-nowrap">Sign Out</p>
              </div>
            </div>  
            </Link>
            <MdNotifications className="flex-shrink-0 max-sm:w-5 max-sm:h-5 w-7 h-7 text-white cursor-pointer dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              onClick={toggle}
            >
              <img
                className=" md:w-8 md:h-8 max-lg:w-8 max-lg:h-8  max-sm:w-8 max-sm:h-8 rounded-full cursor-pointer"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
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
               <BiHome className="flex-shrink-0 w-5 h-5  text-gray-500    dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white   "/>
               <span  onClick={()=>HandlesTab(1)} className={`${Tab ===1 ? 'text-blue-600 font-bold':'text-gray-900'} ms-3 ${!open2 && 'hidden'}  `} > Dashboard</span>
            </a>
            </Link>
         </li>
         <li>
         {/* profil users */}
            <Link to='/userdetail' >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <FiUser className="flex-shrink-0 w-5 h-5 text-gray-500  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  
               <span onClick={()=>HandlesTab(2)} className={`${Tab===2 ? 'text-blue-600 font-bold':'text-gray-900'} ms-3 whitespace-nowrap ${!open2 && 'hidden'} `} >Profile</span>
               
            </a>
            </Link>
         {/* profil users */}
         </li>
         <li>
         {/* Leaves Applications */}
          <Link to='/Leaves' >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <MdOutlineDateRange className="flex-shrink-0 w-5 h-5 text-gray-500  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
               <span  onClick={()=>HandlesTab(3)} className={`${Tab===3 ? 'text-blue-600 font-bold':'text-gray-900'} flex-1 ms-3 whitespace-nowrap ${!open2 && 'hidden'} `}>Leave Applications</span>
            </a>
            </Link>
         {/* Leaves Applications */}
         </li>
         <li>
          {/* Notifications */}
          <Link to='/Notifications' >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <IoNotificationsOutline  className="flex-shrink-0 w-5 h-5 text-gray-500  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
               <span  onClick={()=>HandlesTab(4)} className={`${Tab===4 ? 'text-blue-600 font-bold':'text-gray-900'} flex-1 ms-3 whitespace-nowrap ${!open2 && 'hidden'} `}>Notifications</span>
            </a>
            {/* Notifications */}
            </Link>
         </li>
         <li>
          {/* reportproblems */}
          <Link to='/Reportproblem' >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <MdReportGmailerrorred className="flex-shrink-0 w-5 h-5 text-gray-500  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
               <span  onClick={()=>HandlesTab(5)} className={` ${Tab===5 ? 'text-blue-600 font-bold': 'text-gray-900'} flex-1 ms-3 whitespace-nowrap ${!open2 && 'hidden duration-500'} `}>Report a Problem</span>
            </a>
            </Link>
            {/*reportproblems  */}
         </li>
      </ul>
   </div>
</aside>
{/* End sidebar */}
<div className="p-4 ml-14 mt-5  ">
   <div  className={`p-4 border-2 bg-blue-100 ${isSidebarOpen ? 'translate-x-0':'14'} transition-transform  border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-10`}>
      
        {/*  Leaves */}
         <div className="flex items-center p-3 h-20 rounded bg-gray-50 dark:bg-gray-800 mb-4 font-poppins">
            <div className="flex items-center justify-between  bg-gray-50 dark:bg-gray-800 w-full">
               <div className="flex flex-row gap-2">
                  <div className="h-[30px] bg-violet-700 w-2 rounded-lg"></div>
                  <p className="text-xl text-black dark:text-gray-500">Leaves</p>
               </div>
               <div className="flex items-center gap-2 bg-violet-700 p-2 px-4 rounded-lg cursor-pointer">
                  <MdModeEditOutline className="text-white text-2xl "/>
                  <p className="text-[15px] text-white dark:text-gray-500">Leave Request</p>
               </div>
            </div>
            
         </div>
           {/* Leaves History */}
      <div className="flex flex-col  mb-4  rounded bg-gray-50 dark:bg-gray-800">
         <div className="flex   justify-between p-3  rounded  dark:bg-gray-800 w-full mb-4">
            <div className="flex  gap-2">
               <div className=" flex items-center h-[30px] w-2 rounded-lg bg-violet-700 p-1"></div>
               <p className="font-poppins text-xl text-black dark:text-gray-500">Leaves History</p>
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
         {/* ici */}
           <div className="grid grid-cols-4 gap-4 p-3 -mt-4 mb-6 max-sm:grid-cols-1 md:grid-cols-1 max-md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4   ">
               <div className="flex justify-between   rounded-md bg-slate-300 font-poppins ">
                  <div className="flex flex-col  p-3">
                     <div className="flex items-center gap-2 mb-5">
                        <TbClockHour4 className="font-poppins"/>
                        <p className="font-semibold ">Dec 25, 2024</p>
                     </div>
                     <div className="flex flex-col gap-1 text-sm">
                        <p className="text-gray-500">From Date</p>
                        <p className="font-bold">Jan 01, 2025</p>
                     </div>
                  </div>
                  <div className="flex flex-col  p-3 ">
                     <div className="mb-4">
                        <div className="rounded-full p-2 bg-green-100 flex items-center justify-center ">
                           <p className="text-green-400 text-xs font-extrabold">Approved</p>
                        </div>
                     </div>
                     <div className="flex flex-col gap-1  text-sm">
                        <p className="text-gray-500">To Date</p>
                        <p className="font-bold">Jan 13, 2025</p>
                     </div>
                  </div>
               </div>
          <div className="flex justify-between   rounded-md bg-slate-300 font-poppins ">
                  <div className="flex flex-col  p-3">
                     <div className="flex items-center gap-2 mb-5">
                        <TbClockHour4 className="font-poppins"/>
                        <p className="font-semibold ">Dec 25, 2024</p>
                     </div>
                     <div className="flex flex-col gap-1 text-sm">
                        <p className="text-gray-500">From Date</p>
                        <p className="font-bold">Jan 20, 2025</p>
                     </div>
                  </div>
                  <div className="flex flex-col  p-3">
                     <div className="mb-4">
                        <div className="rounded-full p-2 bg-yellow-100 flex items-center justify-center ">
                           <p className="text-yellow-300 text-xs font-extrabold">Pending</p>
                        </div>
                     </div>
                     <div className="flex flex-col gap-1  text-sm">
                        <p className="text-gray-500">To Date</p>
                        <p className="font-bold">Jan 25, 2025</p>
                     </div>
                  </div>
               </div>
          <div className="flex justify-between   rounded-md bg-slate-300 font-poppins ">
                  <div className="flex flex-col  p-3">
                     <div className="flex items-center gap-2 mb-5">
                        <TbClockHour4 className="font-poppins"/>
                        <p className="font-semibold ">Dec 25, 2024</p>
                     </div>
                     <div className="flex flex-col gap-1 text-sm">
                        <p className="text-gray-500">From Date</p>
                        <p className="font-bold">Jan 08, 2025</p>
                     </div>
                  </div>
                  <div className="flex flex-col  p-3">
                     <div className="mb-4">
                        <div className="rounded-full p-2 bg-red-100 flex items-center justify-center ">
                           <p className="text-red-500 text-xs font-extrabold">Rejected</p>
                        </div>
                     </div>
                     <div className="flex flex-col gap-1  text-sm">
                        <p className="text-gray-500">To Date</p>
                        <p className="font-bold">Jan 19, 2025</p>
                     </div>
                  </div>
               </div>
          <div className="flex justify-between   rounded-md bg-slate-300 font-poppins ">
                  <div className="flex flex-col  p-3">
                     <div className="flex items-center gap-2 mb-5">
                        <TbClockHour4 className="font-poppins"/>
                        <p className="font-semibold ">Dec 25, 2024</p>
                     </div>
                     <div className="flex flex-col gap-1 text-sm">
                        <p className="text-gray-500">From Date</p>
                        <p className="font-bold">Jan 04, 2025</p>
                     </div>
                  </div>
                  <div className="flex flex-col  p-3">
                     <div className="mb-4">
                        <div className="rounded-full p-2 bg-green-100 flex items-center justify-center ">
                           <p className="text-green-400 text-xs font-extrabold">Approved</p>
                        </div>
                     </div>
                     <div className="flex flex-col gap-1  text-sm">
                        <p className="text-gray-500">To Date</p>
                        <p className="font-bold">Jan 8, 2025</p>
                     </div>
                  </div>
               </div>
      </div>
      </div>
    
   </div>
</div>

  </>
  )
}

export default Leaves