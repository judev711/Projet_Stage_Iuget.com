import axios from "axios"
import { useState } from "react"
import {useNavigate} from "react-router-dom"
const Achat = () => {
  const [Tab, SetTab]=useState(1)
 
  const [Todos, SetTodos]=useState([{
    nom:"Name Product",
      quantite:"Quantity",
      Price:"Unit Price",
      id:1
  }])
  const NewId = Todos.length > 0 ? Math.max(...Todos.map(item=>item.id)) + 1:1;
  const handlesNewPurchase = ()=>{
    SetTodos([...Todos, {
      nom:"Name Product",
      quantite:"Quantity",
      Price:"Unit Price",
      id:NewId
    }]);
  };
  const handlesDelete = (id: number)=>{
    SetTodos(Todos.filter((todo)=> todo.id !== id))
  };
  const navigate = useNavigate();
  const [VALUES, SetVALUES]= useState({
    id_verification_commande:"",
    nom_produit:"",
    quantite:"",
    prix_unitaire:"",
  });
  const HandleSubmit = (event: { preventDefault: () => void })=>{
    event.preventDefault();
    axios.post("http://localhost:3000/Achat/paste",VALUES).then((res)=>{
      console.log("Infos_Achats", res.data);
      if( res.data.message == "Achat passer avec succes"){
        navigate("/Dashboard");
      }else{
        console.log("une erreur provient de votre formulaire")
      }
    })
    .catch((error)=>{
      console.error("Erreur Inconnue",error)
    })

  };
  return (
    <div className="bg-slate-400 w-full flex items-center justify-center h-screen font-mono ">
          <div className=" border-white border  p-3 items-center w-[55vw] max-sm:w-[90vw] ">
            <div className="font-poppins flex flex-col w-full gap-3 mb-4">
              <p className="font-mono font-bold text-2xl  ">Welcome in my App</p>
              <p className="text-center font-mono font-semibold">Please Make Your Purchases</p>
            </div>
            <div className="bg-green-500 flex gap-2 p-3 rounded-full mb-3">
              <p>your identity key is: </p>
              <p className="text-red-700 font-bold">2020202</p>
            </div>
            <form onSubmit={HandleSubmit}>
              
         
           {/* elements de l'achat */}
          <div className='flex flex-col   p-2 h-[250px] overflow-y-auto  lg:w-[53vw]   border-black border-2 mb-3'>
            {/* Debut Achat */}
            {Tab===1 && 
            Todos.map((todo, index)=>(
              <div key={index}>
                 <div  className="flex flex-col mb-2 items-start">
            <label htmlFor="nom_produit">{todo.nom}</label>
            <input onChange={(e)=> SetVALUES({...VALUES, nom_produit :e.target.value })} id="nom_produit" type="text" className="rounded"  required />
          </div>
          <div className="grid grid-cols-2 gap-1 mb-">
              <div className="flex flex-col mb-3">
              <label htmlFor="quantite">{todo.quantite}</label>
              <input onChange={(e)=> SetVALUES({...VALUES, quantite :e.target.value })} id="quantite" type="number" className="rounded" min="0" step={10} required />
              </div>
              <div className="flex flex-col mb-3">
              <label htmlFor="prix_unitaire">{todo.Price}</label>
              <input onChange={(e)=> SetVALUES({...VALUES, prix_unitaire :e.target.value })} id="prix_unitaire" type="number" className="rounded" min={0} step={20} required />
              </div>
          </div>
              <div onClick={() => handlesDelete(todo.id)}  className="flex justify-center bg-red-700 p-2 font-semibold rounded-md  duration-300 cursor-pointer w-[100px]">Delete</div>
              </div>
            ))
            }
          
          {/* Achat Terminer */}
          </div>
          {/* elements de l'achat */}
          <div className='flex flex-row gap-4'>
            {/* button New Purcharse */}
            {/* <div  onClick={handlesNewPurchase} className="flex justify-center bg-white p-2 font-semibold rounded-md hover:bg-green-700 duration-300 cursor-pointer">New Purchase</div> */}

           <button  type="submit" className="flex justify-center bg-white p-2 font-semibold rounded-md hover:bg-green-700 duration-300">Submit</button>
           </div>
         </form>
          </div>
          
        </div>
  )
}

export default Achat