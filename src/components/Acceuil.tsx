// import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'; // Import from react-icons/fa
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";
const Acceuil = () => {
  const [openIndex, setOpenIndex] = useState <number | null>(null);

  const faqs = [
    { question: "Qu'est-ce que React ?", answer: "React est une bibliothèque JavaScript pour construire des interfaces utilisateur." },
    { question: "Qu'est-ce que Tailwind CSS ?", answer: "Tailwind CSS est un framework de design utilitaire pour construire rapidement des interfaces modernes." },
    { question: "Comment fonctionne useState ?", answer: "useState est un hook qui permet de gérer l'état local dans un composant fonctionnel React." },
  ];

  const toggleFAQ = (index:number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className=" ">
      <nav className="bg-violet-800 text-white p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto items-center md:flex md:justify-between  ">
        {/* Logo */}
        <div className="flex justify-between">
          <div className="text-xl font-extrabold p-3 bg-violet-300 rounded cursor-pointer">e@BuyClock</div>

          {/* Hamburger Menu for Mobile */}
          <button
          className="md:hidden  transition-all duration-600 "
          onClick={toggleMenu}
          
          >
          {isOpen ? (
            <FaTimes  className="h-6 w-6 " />
          ) : (
            <FaBars className="h-6 w-6 " />
          )}
        </button>
        </div>
        

        {/* Navigation Links */}
        <div className="">
          <ul
          className={`md:flex gap-6 text-lg md:gap-20 max-md:justify-center max-md:items-center   ${
            isOpen ? 'flex flex-col' : 'hidden'
          }`}
         >
          <li>
            <a href="#home" className="hover:text-gray-400 block py-2 md:py-0">
              Welcome
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400 block py-2 md:py-0">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-400 block py-2 md:py-0">
              Our Services
            </a>
          </li>
          <li>
            <Link to="/login">
            <a href="" className="hover:text-gray-400 text-2xl block py-2 md:py-0">
              <FiUser/>
            </a>
            </Link>
          </li>
        </ul>
        </div>
        {/* end */}
      </div>
    </nav>
    <div className="bg-[url('https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0OTg2fDB8MXxjb2xsZWN0aW9ufDF8NDU3ODM0fHx8fHwyfHwxNzM2Njk3OTM3fA&ixlib=rb-4.0.3&q=80&w=400')] bg-cover h-[700px] flex items-center justify-center  brightness-50 max-sm:h-[400px] ">
    <div className="flex justify-center items-center p-3">
      <p className="text-white xl:text-[3rem] max-sm:text-[2rem] text-center font-extrabold text-wrap">Suivez Vos Heures De Travail En Temps Réel Avec e@BuyClock - Votre Partenaire De Confiance</p>
    </div>
    </div>
    <div className="flex flex-col gap-3 mt-5 p-6 bg-white ">
      <h1 className="text-center text-3xl  font-extrabold text-violet-600">Bienvenue Chez e@BuyClock</h1>
      <p className=" text-start text-[1rem]">e@BuyClock  est une application web, spécialisée dans la gestion de suivi de presence des employés. Nous vous accompagnons pour atteindre vos objectifs et réaliser votre potentiel.</p>
    </div>
    <div className="bg-slate-300 text-center ">
      <div className="p-10">
        <h1 className="text-3xl   font-extrabold text-violet-600 ">Prestation De service</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 justify-center p-4">
        <div className="flex flex-col mb-10">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VzdGlvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="h-[25rem]"/>
          <div className="flex flex-col gap-2">
          <h1 className="mt-5 text-xl font-bold text-violet-700">Coaching individuels</h1>
          <p className="text-1rem">Coaching personnalisé pour exploiter votre potentiel</p>
          <button className="bg-violet-700 p-2 rounded flex justify-center font-bold ">Bientot Disponible</button>
        </div>
        </div>
        {/* deuxieme grid */}
        <div className="flex flex-col mb-10">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdlc3Rpb24lMjAlMjBkJ2hvcmFpcmV8ZW58MHx8MHx8fDA%3D" alt="" className="h-[25rem]"/>
          <div className="flex flex-col gap-2">
          <h1 className="mt-5 text-xl font-bold text-violet-700">Formation en développement personnel</h1>
          <p className="text-1rem">Formations pour renforcer vos compétences</p>
          <button className="bg-violet-700 p-2 rounded flex justify-center font-bold ">Bientot Disponible</button>
        </div>
        </div>
        {/* troisieme grid */}
        <div className="flex flex-col mb-10">
          <img src="https://media.istockphoto.com/id/486561416/photo/portrait-of-successful-applauding-young-people-sitting-in-line.jpg?s=1024x1024&w=is&k=20&c=xpfLrFcesLwVhz1f_4Zc8QIrzjyzR6bOaJQ495Lx2_I=" alt="" className="h-[25rem]"/>
          <div className="flex flex-col gap-2">
          <h1 className="mt-5 text-xl font-bold text-violet-700">Ateliers De Motivation</h1>
          <p className="text-1rem">Ateliers de motivation pour booster votre confiance</p>
          <button className="bg-violet-700 p-2 rounded flex justify-center font-bold ">Bientot Disponible</button>
        </div>
        </div>
      </div>
      <div className="bg-white p-10">
        <h1 className="text-3xl   font-extrabold text-violet-600 ">Foire aux questions</h1>
        {/* foire aux question */}
        <div>
          <div className="max-w-xl mx-auto mt-10 space-y- transition-all  ">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className=" shadow-sm  transition-all "
        >
          <div
            className="flex justify-between  items-center cursor-pointer bg-violet-700 p-4"
            onClick={() => toggleFAQ(index)}
          >
            <h2 className="text-lg font-medium">{faq.question}</h2>
            <div
              className={`transform transition-transform duration-300  ${
                openIndex === index ? "rotate-90" : ""
              }`}
            >
              ▼
            </div>
          </div>
          <div className={`bg-white w-full border overflow-hidden duration-500 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0' }`}>
            {openIndex === index && (
            <p className={`text-gray-600 mt-10 mb-10`}>{faq.answer}</p>
          )}
          </div>
          
        </div>
      ))}
    </div>

        </div>
        {/* foire aux question */}
      </div>
      <div className=" bg-violet-700 text-white p-3 flex flex-col ">
        <div>
          <h1 className="text-2xl font-bold mt-10 mb-10  ">
“IsDev m'a aidé à dépasser mes limites et à atteindre mes objectifs. Leur approche personnalisée et leur expertise m'ont vraiment impressionné.”
</h1>
<p>[Jean Dupont]</p>
        </div>
        
      </div>
      
      

    </div>
    </div>
  );
};

export default Acceuil;
