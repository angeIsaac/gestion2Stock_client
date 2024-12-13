"use client";
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { data } from "@/app/ui/data"
import { motion } from "framer-motion"

const page = () => {
    const [nomFournisseur, setNonFourisseur] = useState('');
    const [adresse, setAdresse] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [ville, setVille] = useState('');
  return (
    <section className="bg-white ring-1 ring-slate-900/5 rounded-lg py-4 px-5 shadow-sm w-full">
      <h1 className="text-2xl font-semibold text-left mb-2 p-2">
        Liste des fournisseurs
      </h1>
      <div className="flex justify-end items-center p-4">
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="h-10 bg-blue-300 text-white rounded-md px-4 py-2 hover:bg-blue-500 transition-transform transform active:scale-90 duration-200"
        >
          ajouter un fournisseurs
        </button>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white">
            <div>
              <h1 className="text-2xl font-semibold text-left mb-4 p-2">
                Ajouter un fournisseur
              </h1>
              <div className="flex flex-col space-y-4 p-4">
                <label htmlFor="nomFournisseur" className="text-sm font-semibold">
                  Nom du fournisseur
                </label>
                <input
                  type="text"
                  name="nomFournisseur"
                  id="nomFournisseur"
                  value={nomFournisseur}
                  onChange={(e) => setNonFourisseur(e.target.value)}
                  className="input input-bordered bg-white border border-blue-300"
                />
                <label htmlFor="adresse" className="text-sm font-semibold">
                  Adresse
                </label>
                <input
                  type="text"
                  name="adresse"
                  id="adresse"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                  className="input input-bordered bg-white border border-blue-300"
                />
                <label htmlFor="telephone" className="text-sm font-semibold">
                  Telephone
                </label>
                <input
                  type="text"
                  name="telephone"
                  id="telephone"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  className="input input-bordered bg-white border border-blue-300"
                />
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered bg-white border border-blue-300"
                />
                <label htmlFor="ville" className="text-sm font-semibold">
                  Ville
                </label>
                <input
                  type="text"
                  name="ville"
                  id="ville"
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
                  className="input input-bordered bg-white border border-blue-300"
                />
              </div>
            </div>
            <div className="modal-action">
              <button className="btn bg-white border border-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white">ajouter</button>
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn hover:bg-white">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <div>
        <motion.table
        className="w-full overflow-x-auto mt-3">
          <thead className="mb-4 px-2">
            <motion.tr
            className="p-2">
              <th className="text-left text-gray-600 text-base">Nom</th>
              <th className="text-left text-gray-600 text-base">Adresse</th>
              <th className="text-left text-gray-600 text-base">Telephone</th>
              <th className="text-left text-gray-600 text-base">Email</th>
              <th className="text-left text-gray-600 text-base">Ville</th>
              <th className="text-left text-gray-600 text-base">Action</th>
            </motion.tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <motion.tr
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
               className="hover:bg-blue-100">
                <td className="text-base text-gray-600 py-4 text-left">
                  {"item.nom"}
                </td>
                <td className="text-base text-gray-600 py-4 text-left ">
                  {"item.adresse"}
                </td>
                <td className="text-base text-gray-600 py-4 text-left ">
                  {"item.telephone"}
                </td>
                <td className="text-base text-gray-600 py-4 text-left ">
                  {"item.email"}
                </td>
                <td className="text-base text-gray-600 py-4 text-left ">
                  {"item.ville"}
                </td>
                <td className="text-base text-gray-600 py-4 text-left ">
                </td>
              </motion.tr>
            ))}
        </tbody>
        </motion.table>
      </div>
    </section>
  );
};

export default page;
