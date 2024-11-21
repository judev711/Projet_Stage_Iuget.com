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

const Profile = () => {
  const [Tab, setTab]=useState(2);
  
   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  

//   const [Open, SetOpen]= useState(true)
  const HandlesTab = (Tab: SetStateAction<number>)=>{
 setTab(Tab)
  }

  return ( <>
  
<nav className="fixed top-0 z-50 w-full bg-[#7e22ce] border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div className="px-3 py-3 lg:px-5 lg:pl-3 ">
    <div className="flex items-center justify-between">
      {/* navbar logo */}
      <div className="flex items-center justify-start rtl:justify-end">
        
        {/* burger */}
        <button onClick={toggleSidebar}  type="button" className="inline-flex items-center p-2 text-sm text-white rounded-lg font-bold focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
               <RxHamburgerMenu className={`w-6 h-6`} />
            {/* burger */}
         </button>
         
         
        <a href="#" className="flex ms-2 md:me-24">
          <img src="/src/assets/flowbite.jpg" className="h-8 w-8 me-3 rounded-full" alt="FlowBite Logo" />
          <span className="self-center text-xl text-white font-extrabold sm:text-2xl whitespace-nowrap text dark:text-white">TheoDev@711</span>
        </a>
        {/* logo */}
      </div>
      {/* end of navbar logo */}
      {/* navbar of profil */}
      <div className="flex items-center">
          <div className="flex items-center ms-3">
            {/* user profile */}
            <div className="flex items-center gap-10">
              <MdNotifications className="flex-shrink-0 w-8 h-8 cursor-pointer  text-white   dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"  >
                <span className="sr-only">Open user menu</span>
                <img className="w-12 h-12 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
              </button>
            </div>
            {/* user profil */}
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" >
              <div className="px-4 py-3" >
                <p className="text-sm text-gray-900 dark:text-white" >
                  Neil Sims
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" >
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul className="py-1" >
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" >Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" >Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" >Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" >Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>
{/* start sidebar */}
<aside  className={`fixed top-0 left-0 z-40  h-screen  pt-20 ${isSidebarOpen ? 'w-56':'w-[3,75rem] p-4'} transition-all duration-700   bg-violet-100 border-r border-gray-200  dark:bg-gray-800 dark:border-gray-700`} >
   <div  className={`h-full px-3 pb-4 overflow-y-auto  dark:bg-gray-800   `}>
      <ul className="space-y-2 font-medium">
        {/* icon Dashboard */}
         <li className="">
          <Link to='/employee/dashboard'>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <BiHome className="flex-shrink-0 w-5 h-5  text-gray-500   dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
               <span  onClick={()=>HandlesTab(1)} className={`${Tab ===1 ? 'text-blue-600 font-bold':'text-gray-900'} ms-3 ${!isSidebarOpen&&'hidden '} `}>Dashboard</span>
            </a>
            </Link>
         </li>
         <li>
         {/* profil users */}
            <Link to='/userdetail' >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <FiUser className="flex-shrink-0 w-5 h-5 text-gray-500  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  
               <span onClick={()=>HandlesTab(2)} className={`${Tab===2 ? 'text-blue-600 font-bold':'text-gray-900'} ms-3 whitespace-nowrap ${!isSidebarOpen&&'hidden '}`} >Profile</span>
               
            </a>
            </Link>
         {/* profil users */}
         </li>
         <li>
         {/* Leaves Applications */}
          <Link to='/Leaves' >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <MdOutlineDateRange className="flex-shrink-0 w-5 h-5 text-gray-500  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
               <span  onClick={()=>HandlesTab(3)} className={`${Tab===3 ? 'text-blue-600 font-bold':'text-gray-900'}flex-1 ms-3 whitespace-nowrap ${!isSidebarOpen&&'hidden '} `}>Leave Applications</span>
            </a>
            </Link>
         {/* Leaves Applications */}
         </li>
         <li>
          {/* Notifications */}
          <Link to='/Notifications' >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <IoNotificationsOutline  className="flex-shrink-0 w-5 h-5 text-gray-500  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
               <span  onClick={()=>HandlesTab(4)} className={`${Tab===4 ? 'text-blue-600 font-bold':'text-gray-900'}flex-1 ms-3 whitespace-nowrap ${!isSidebarOpen&&'hidden '}`}>Notifications</span>
            </a>
            {/* Notifications */}
            </Link>
         </li>
         <li>
          {/* reportproblems */}
          <Link to='/Reportproblem' >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <MdReportGmailerrorred className="flex-shrink-0 w-5 h-5 text-gray-500  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
               <span  onClick={()=>HandlesTab(5)} className={`${Tab===5 ? 'text-blue-600 font-bold': 'text-gray-900'} flex-1 ms-3 whitespace-nowrap ${!isSidebarOpen&&'hidden '} `}>Report a Problem</span>
            </a>
            </Link>
            {/*reportproblems  */}
         </li>
      </ul>
   </div>
</aside>
{/* End sidebar */}
<div className="p-4 ml-20 mt-5  ">
   <div  className={`p-4 border-2 bg-blue-100 ${isSidebarOpen ? 'translate-x-0':'14'} transition-transform  border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-10`}>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {/* les trois premiers grid (1re colone) */}
         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               <svg className="w-3.5 h-3.5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div>
      <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
         <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg className="w-3.5 h-3.5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
         </p>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
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
      <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
         <p className="text-2xl text-gray-400 dark:text-gray-500">
            <svg className="w-3.5 h-3.5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
         </p>
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

export default Profile