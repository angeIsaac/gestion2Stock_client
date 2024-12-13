"use client";
import React from "react";
import { ArrowDownToLine, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import ListeCard from "@/app/ui/ListeCard";
import { data } from "@/app/ui/data";

const Achats = () => {
  const [date, setDate] = useState("");
  const [montant, setMontant] = useState("");
  const [quantite, setQuantite] = useState("");
  const [produit, setProduit] = useState("");
  return (
    <div className="px-7 md:px-4 mt-8 flex flex-col justify-center bg-white ring-1 ring-slate-900/5 rounded-lg py-4 shadow-sm w-full">
      <h1 className="md:text-3xl font-semibold text-lg mb-3 p-4">
        Liste des produits achetés
      </h1>
      <div className="flex flex-col md:flex-row justify-end">
        <div className="flex justify-center items-center space-x-3">
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="p-3 rounded-full hover:bg-blue-100 duration-300 transform transition-transform active:scale-90"
          >
            <Plus />
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box bg-white">
              <div>
                <h1 className="text-2xl font-semibold text-left mb-4 p-2">
                  Ajouter un Achat
                </h1>
                <div className="flex flex-col space-y-4 p-4">
                  <label
                    htmlFor="montant"
                    className="text-sm font-semibold"
                  >
                    montant
                  </label>
                  <input
                    type="number"
                    name="montant"
                    id="montant"
                    value={montant}
                    onChange={(e) => setMontant(e.target.value)}
                    className="input input-bordered bg-white border border-blue-300"
                  />
                  <label htmlFor="quantite" className="text-sm font-semibold">
                    quantite
                  </label>
                  <input
                    type="number"
                    name="quantite"
                    id="quantite"
                    value={quantite}
                    onChange={(e) => setQuantite(e.target.value)}
                    className="input input-bordered bg-white border border-blue-300"
                  />
                  <label htmlFor="date" className="text-sm font-semibold">
                    date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="input input-bordered bg-white border border-blue-300"
                  />
                  <label htmlFor="nom" className="text-sm font-semibold">
                    nom du produit
                  </label>
                  <input
                    type="nom"
                    name="nom"
                    id="nom"
                    value={produit}
                    onChange={(e) => setProduit(e.target.value)}
                    className="input input-bordered bg-white border border-blue-300"
                  />
                </div>
              </div>
              <div className="modal-action">
                <button className="btn bg-white border border-blue-500 hover:bg-blue-500 hover:border-blue-500 hover:text-white">
                  ajouter
                </button>
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn hover:bg-white">Close</button>
                </form>
              </div>
            </div>
          </dialog>
          <button
            onClick={() => {}}
            className="p-3 rounded-full hover:bg-blue-100 duration-300 transform transition-transform active:scale-90"
          >
            {" "}
            <ArrowDownToLine />{" "}
          </button>
          <input
            onChange={(e) => {
              setDate(e.target.value);
            }}
            value={date}
            type="date"
            id="date"
            name="date"
            className="bg-gray-200 ml-3 p-2 w-50 rounded-lg focus:outline-none focus:ring-1 hover:bg-blue-100 hover:ring-1 hover:ring-blue-100"
          />
        </div>
      </div>
      <div>
        <ListeCard data={data} />
      </div>
    </div>
  );
};

export default Achats;
