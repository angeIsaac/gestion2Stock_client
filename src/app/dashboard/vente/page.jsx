"use client";
import React from 'react'
import Table from '@/app/ui/Table'
import { vente, data } from "@/app/ui/data";
import VentRenderRow from "@/app/ui/VentRenderRow";
import { Search } from 'lucide-react';
import Input from '@/app/ui/input';
import SearchModal from "@/app/ui/searchModal";

const Vente = () => {
  return (
    <div className='bg-white ring-1 ring-slate-900/5 rounded-lg py-4 px-2 shadow-sm'>
      <h1 className='text-3xl font-bold'>Liste des ventes</h1>
      <div>
        <div className='flex justify-end space-x-5 mb-4'>
          <div className='flex items-center relative'>
            <SearchModal />
          </div>
          <div className=''>
            <button onClick={() => { document.getElementById("my_modal").showModal()}} className='px-3 py-2 rounded-lg ring-1 ring-slate-900/5 bg-indigo-900 text-white hover:bg-indigo-800 transition-transform transform active:scale-90 duration-300 '>
              Ajouter une vente
            </button>
            <dialog id='my_modal' className='modal'>
              <div className='modal-box bg-white p-10'>
                <div>
                  <Input type="number" placeholder='quantité' label={"Quantité"} className='px-3 py-3 border outline-none rounded-lg bg-gray-100 focus:border-blue-100 border-gray-100 focus:border-2' />
                  <Input type="text" placeholder='produit' label={"produit"} className='px-3 py-3 border outline-none rounded-lg bg-gray-100 focus:border-blue-100 border-gray-100 focus:border-2' />
                  <Input type="number" placeholder='montant' label={"montant"} className='px-3 py-3 border outline-none rounded-lg bg-gray-100 focus:border-2 focus:border-blue-100 border-gray-100' />
                  <Input type="text" placeholder='client' label={"client"} className='px-3 py-3 border outline-none rounded-lg bg-gray-100 focus:border-2 focus:border-blue-100 border-gray-100' />
                </div>
                <div className='modal-action'>
                  <button className='btn btn-primary text-white'>
                    Ajouter
                  </button>
                  <form action="" method='dialog'>
                    <button className='btn btn-outline hover:btn-ghost'>
                      Annuler
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <div className='overflow-x-auto'>
        <Table columns={vente} data={data} renderRow={VentRenderRow} />
      </div>
    </div>
  )
}

export default Vente
