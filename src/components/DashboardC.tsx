// import React from 'react'
import {  SetStateAction, useState,useEffect, useRef } from "react"
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
import { MdDarkMode } from "react-icons/md";


const DashboardC = () => {
  const [Tab, setTab]=useState(1);
 
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
  //
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
 //------------------------------profil--------------------------------------------------
 const ProfilRef = useRef<HTMLDivElement>(null);
  //const ButtonRef = useRef<HTMLButtonElement>(null);
  const handleClickOutside = (event: MouseEvent) => {
    if (
      ProfilRef.current &&
      !ProfilRef.current.contains(event.target as Node)
    ) {
      setopen(false);
       event.stopPropagation()
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  //

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
    <nav  className={`fixed top-0 z-50 w-full bg-[#7e22ce] border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700`}>
  <div className="px-3 py-3 lg:px-5 lg:pl-3 ">
    <div className="flex items-center justify-between">
      {/* navbar logo */}
      <div  className="flex items-center justify-start rtl:justify-end " onClick={toggle2}>
        
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
        <div className="flex items-center ms-3">
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

<aside   className={`fixed  top-0 left-0 z-40  h-screen  pt-20  ${!isSidebarOpen ?'w-16':'w-56'}    bg-violet-100 border-r border-gray-200 transition-all duration-700  dark:bg-gray-800 dark:border-gray-700`} >
   <div  className={`h-full  px-[0.80rem] pb-4 overflow-y-auto  dark:bg-gray-800   `}>
      <ul className={`space-y-3 font-medium     ` }>
        {/* icon Dashboard */}
         <li className="">
          <Link to='/employee/dashboard'>
            <a href="#" className="flex items-center  p-2 text-gray-900 rounded-lg dark:text-white  hover:bg-gray-100 dark:hover:bg-gray-700 group ">
               <BiHome className={`flex-shrink-0 w-5 h-5 ${Tab ===1 ? 'text-blue-600 font-bold':'text-gray-500'}      dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white   `}/>
               <span  onClick={()=>HandlesTab(1)} className={`${Tab ===1 ? 'text-blue-600 font-bold':'text-gray-900'} ms-3 ${!open2 && 'hidden'}  `} > Dashboard</span>
            </a>
            </Link>
         </li>
         <li>
         {/* profil users */}
            <Link to='/userdetail' >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <FiUser className={`flex-shrink-0 w-5 h-5 ${Tab ===2 ? 'text-blue-600 font-bold':'text-gray-500'}  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`} />
                  
               <span onClick={()=>HandlesTab(2)} className={`${Tab===2 ? 'text-blue-600 font-bold':'text-gray-900'} ms-3 whitespace-nowrap ${!open2 && 'hidden'} `} >Profile</span>
               
            </a>
            </Link>
         {/* profil users */}
         </li>
         <li>
         {/* Leaves Applications */}
          <Link to='/Leaves' >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <MdOutlineDateRange className={`flex-shrink-0 w-5 h-5 ${Tab ===3 ? 'text-blue-600 font-bold':'text-gray-500'}  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`} />
               <span  onClick={()=>HandlesTab(3)} className={`${Tab===3 ? 'text-blue-600 font-bold':'text-gray-900'} flex-1 ms-3 whitespace-nowrap ${!open2 && 'hidden'} `}>Leave Applications</span>
            </a>
            </Link>
         {/* Leaves Applications */}
         </li>
         <li>
          {/* Notifications */}
          <Link to='/Notifications' >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <IoNotificationsOutline  className={`flex-shrink-0 w-5 h-5 ${Tab ===4 ? 'text-blue-600 font-bold':'text-gray-500'} dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}/>
               <span  onClick={()=>HandlesTab(4)} className={`${Tab===4 ? 'text-blue-600 font-bold':'text-gray-900'} flex-1 ms-3 whitespace-nowrap ${!open2 && 'hidden'} `}>Notifications</span>
            </a>
            {/* Notifications */}
            </Link>
         </li>
         <li>
          {/* reportproblems */}
          <Link to='/Reportproblem' >
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               
               <MdReportGmailerrorred className={`flex-shrink-0 w-5 h-5 ${Tab ===5 ? 'text-blue-600 font-bold':'text-gray-500'}  dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white`}/>
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
   <div   className={`p-4 border-2 bg-blue-100  transition-transform  border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-10`}>
      <div className=" mb-4 bg-gray-50 dark:bg-gray-800 rounded-md">
        {/* les trois premiers grid (1re colone) */}
            <div className="flex justify-between items-center p-3 mb">
               <div className="flex items-center">
                     <div className="p-1 bg-blue-500 rounded-lg w-1 h-[30px] "></div>
                     <p className="mx-2 text-lg font-semibold text-gray-900">Good Day , Theo</p>
               </div>
               <div className="bg-green-500 rounded-lg p-3 flex items-center  max-sm:hidden">
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
        {/* start analytics */}
   
        <div>
          <img src="data:image/png;base64,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" alt="Anlytics @711" className="w-42 h-72 sm:w-20 sm:h-20"/>
        </div>
        <div>
          <img src="data:image/png;base64,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" alt="Anlytics @711"className="w-42 h-72 max-sm:w-20 max-sm:h-20"/>
        </div>
          


        
            
      </div>
      {/* end analytics */}
      <div className="grid grid-cols-2 gap-4">
         <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
          
            <p className="text-2xl text-gray-400 dark:text-gray-500">
               
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