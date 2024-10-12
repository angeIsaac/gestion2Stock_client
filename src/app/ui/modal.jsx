import { Plus } from 'lucide-react'
import Reac, { useState, useEffect } from 'react'
import Input from "@/app/ui/input";

const Modal = () => {
    const [nom, setNom] = useState('')
    const [prix, setPrix] = useState('')
    const [poids, setPoids] = useState('')
    const [seuil, setSeuil] = useState('')
    const [quantite, setQuantite] = useState('')
    const [refference, setRefference] = useState('')
    const [fournisseur, setFournisseur] = useState('')
    return (
        <div>
            <span onClick={() => { document.getElementById('my_modal_4').showModal() }} className='inline-flex px-2 py-2 items-center justify-center  hover:bg-blue-100 duration-300  rounded-full bg-gray-100 transition-transform transform active:scale-90 '>
                <Plus />
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl bg-white">
                        <div className='flex items-center justify-between'>
                            <Input type='text' label={"Nom"} value={nom} handlerChange={(e) => setNom(e.target.value)} placeholder={"Nom du produit"} className={"input input-bordered w-full max-w-xs bg-white focus:outline-blue-200 outline-none "}/>
                            <Input type='number' value={prix} handlerChange={(e) => setPrix(e.target.value)} label={"Prix"} placeholder={"le prix"} className={"input input-bordered w-full max-w-xs bg-white focus:outline-blue-200 outline-none "} />
                            <div className='flex items-center space-x-5'>
                                <Input label={"Poids"} value={poids} handlerChange={(e) => setPoids(e.target.value)} placeholder={"le poids"} className={"input input-bordered w-full max-w-xs bg-white focus:outline-blue-200 outline-none "} />
                            </div>
                        </div>
                        <div>
                            <Input label={"seuil de Stock"} value={seuil} handlerChange={(e) => setSeuil(e.target.value)} placeholder={"le seuil de stock"} type='number' className={"input input-bordered w-full bg-white focus:outline-blue-200 outline-none "} />
                        </div>
                        <div className='flex items-center justify-between'>
                            <Input label={"quantite"} value={quantite} handlerChange={(e) => setQuantite(e.target.value)} placeholder={"le stock"} type='number' className={"input  input-bordered w-full max-w-xs bg-white focus:outline-blue-200 outline-none "} />
                            <Input label={"refference"} handlerChange={(setRefference)} value={refference} placeholder={"refference"} className={"input input-bordered w-full max-w-xs bg-white focus:outline-blue-200 outline-none "} />
                            <Input label={"Fournisseur"} value={fournisseur} handlerChange={(e) => setFournisseur(e.target.value)} placeholder={"le fournisseur"} className={"input input-bordered w-full max-w-xs bg-white focus:outline-blue-200 outline-none "} />
                        </div>
                        <div className="modal-action">
                            <button className="btn">ajouter</button>
                            <form method="dialog">
                                <div>
                                    <button className="btn">annuler</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            </span>
        </div>
    )
}

export default Modal
