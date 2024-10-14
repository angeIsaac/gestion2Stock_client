"use client";
import React from 'react'
import Table from '@/app/ui/Table'
import { vente, data } from "@/app/ui/data";
import VentRenderRow from "@/app/ui/VentRenderRow";
import { Search } from 'lucide-react';

const Vente = () => {
  return (
    <div className='bg-white ring-1 ring-slate-900/5 rounded-lg py-4 px-2 shadow-sm'>
      <h1 className='text-3xl font-bold'>Liste des ventes</h1>
      <div>
        <div className='flex justify-end space-x-5 mb-4'>
          <div className='flex items-center relative'>
            <input type="text" placeholder='rechercher...' onChange={() => {}} name='search' id='search' className='bg-white px-2 py-2 rounded-lg input h-10 w-38 border border-gray-100' />
            <span className='absolute right-1'>
              <Search className='text-gray-500' size={20} />
            </span>
          </div>
          <div className=''>
            <button className='px-3 py-2 rounded-lg ring-1 ring-slate-900/5 bg-slate-900 text-white hover:bg-slate-800 transition-transform transform active:scale-90 duration-300 '>
              Ajouter une vente
            </button>
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
