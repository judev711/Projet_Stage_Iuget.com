// import React from "react";
import { Link } from "react-router-dom";
const Acceuil = () => {
  return (
    <div className="h-screen flex  flex-col justify-center items-center bg-slate-200">
      <div>
          <img className="w-64 h-64 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
        </div>
      <div className="w-full grid grid-cols-2 justify-center p-5 ">
        
        <div className="bg-white  p-3">
          <h1 className="text-2xl font-bold text-center justify-center">
            Follow Me In The Dark
          </h1>
        </div>
        <div className="bg-blue-600  p-3  font-bold text-white text-xl max-sm:font-semibold  text-center justify-center">
          <h1>My Name is</h1>
          <h1>Theodore*711</h1>
        </div>
        <div className="mt-10 justify-center items-center">
          <Link to="/Login">
            <p className="bg-blue-600 p-3 font-bold rounded-lg text-white">Get started</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Acceuil;
