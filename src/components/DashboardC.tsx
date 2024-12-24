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
import { FaSignOutAlt } from "react-icons/fa";
import { LuCoffee } from "react-icons/lu";
import { MdAccessTime } from "react-icons/md";


const DashboardC = () => {
  const [Tab, setTab]=useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [open, setopen]=useState(false)
const toggle = ()=>{
   setopen(!open)
}
const  [open2, setopen2] = useState(false);
const toggle2 = ()=>{
   setopen2(!open2)
}

//   const [Open, SetOpen]= useState(true)
  const HandlesTab = (Tab: SetStateAction<number>)=>{
 setTab(Tab)
  }

const today = new Date();
const formatdate = today.toLocaleDateString("en-Us",{
   year:"numeric",
   month:"long",
   day:"numeric"
 
})
 const now = new Date() ;
 const hours = now.toLocaleTimeString("FR-fr",{
   hour:"2-digit",
   minute:"2-digit",
   hour12:true,
 })

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
               <span  onClick={()=>HandlesTab(5)} className={`${Tab===5 ? 'text-blue-600 font-bold': 'text-gray-900'} flex-1 ms-3 whitespace-nowrap ${!open2 && 'hidden duration-500'} `}>Report a Problem</span>
            </a>
            </Link>
            {/*reportproblems  */}
         </li>
      </ul>
   </div>
</aside>
{/* End sidebar */}
<div className={`p-4 ml-14 mt-5 `}>
   <div  className={`p-4 border-2 bg-blue-100  transition-transform  border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-10`}>
      <div className=" mb-4 bg-gray-50 dark:bg-gray-800 rounded-md">
        {/* les trois premiers grid (1re colone) */}
            <div className="flex justify-between items-center p-3 mb">
               <div className="flex items-center">
                     <div className="p-1 bg-blue-500 rounded-lg w-1 h-[30px] "></div>
                     <p className="mx-2 text-lg font-semibold text-gray-900">Good Day , Theo</p>
               </div>
               <div className="bg-green-500 rounded-lg p-3 flex items-center cursor-wait max-sm:hidden">
                  <MdOutlineDateRange className="text-white font-semibold"/>
                  <p className="mx-2 text-white font-semibold">{formatdate}</p>
               </div>
                     
            </div>
            <hr className="border-t-2  border-black mx-3"/>
            {/* les trois grids */}
            <div className="grid grid-cols-3 gap-4 mb-4 bg-slate-300 mt-3 p-3 ">
               <div className="flex items-center justify-center rounded bg-green-400 h-36  dark:bg-gray-800  text-white  duration-300 cursor-pointer hover:scale-[1.05] lg:hover:scale-[1.02]">
                 <div className="flex flex-col items-center justify-center gap-2 ">
                     <FaSignOutAlt className="lg:text-3xl md:text-xl max-md:text-sm" />
                     <p className="text-xl max-sm:text-sm">{hours}</p>
                     <p className="text-xl max-md:text-sm max-sm:text-xs">Not Tracked</p>
                 </div>
               </div>
               <div className="flex items-center justify-center rounded bg-blue-400 h-36  dark:bg-gray-800  text-white  duration-300 cursor-pointer hover:scale-[1.05] lg:hover:scale-[1.02]">
                 <div className="flex flex-col items-center justify-center gap-2 ">
                     <LuCoffee  className="lg:text-3xl md:text-xl max-md:text-sm" />
                     <p className="text-xl max-sm:text-sm">{hours}</p>
                     <p className="text-xl max-md:text-sm">Break</p>
                 </div>
               </div>
               <div className="flex items-center justify-center rounded bg-pink-400 h-36  dark:bg-gray-800  text-white  duration-300 cursor-pointer hover:scale-[1.05] lg:hover:scale-[1.02]">
                 <div className="flex items-center flex-col   gap-2 ">
                     <MdAccessTime className="lg:text-3xl md:text-xl max-md:text-sm tex" />
                     <p className="text-xl  max-sm:text-xs">{hours}</p>
                     <p className="text-xl max-md:text-sm max-sm:text-xs">Working hours</p>
                     
                 </div>
               </div>
               
      </div>
      </div>
      {/* fin des rois premiers grids */}
      
  
      <div className="grid grid-cols-2 items-center justify-center gap-2 p-3 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <div className="">
          
<div className="max-w-sm w-full bg-black rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
  <div className="flex justify-between">
    <div>
      <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">32.4k</h5>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
    </div>
    <div
      className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      12%
      <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
      </svg>
    </div>
  </div>
  <div id="area-chart"></div>
  <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    <div className="flex justify-between items-center pt-5">
      {/* <!-- Button --> */}
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="lastDaysdropdown"
        data-dropdown-placement="bottom"
        className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
        type="button">
        Last 7 days
        <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
            </li>
          </ul>
      </div>
      <a
        href="#"
        className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
        Users Report
        <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </div>
  </div>
</div>

        </div>
        
          
<div className="max-w-sm w-full h-48 bg-black rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
  <div className="flex justify-between mb-5">
    <div>
      <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">$12,423</h5>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">Sales this week</p>
    </div>
    <div
      className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      23%
      <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
      </svg>
    </div>
  </div>
  <div id="grid-chart"></div>
  <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-5">
    <div className="flex justify-between items-center pt-5">
      {/* <!-- Button --> */}
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="lastDaysdropdown"
        data-dropdown-placement="bottom"
        className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
        type="button">
        Last 7 days
        <svg className="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
            </li>
          </ul>
      </div>
      <a
        href="#"
        className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
        Sales Report
        <svg className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </div>
  </div>
</div>

        
            
      </div>
      <div className="grid grid-cols-2 gap-4">
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div>
   </div>
</div>

  </>
  )
}

export default DashboardC