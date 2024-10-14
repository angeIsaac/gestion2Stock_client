"use client";
import React from 'react'
import Table from '@/app/ui/Table';
import { columns } from '@/app/ui/data';
import { renderRow } from "@/app/ui/renderRow"
import { data } from "@/app/ui/data"
import {
  fetchProduits,
  getError,
  getProduits,
  getStatus
} from "@/lib/feature/produit/produitSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ArrowDownToLine, ArrowDownWideNarrow, Search } from 'lucide-react';
import Modal from "@/app/ui/modal"

const Products = () => {
  const dispatch = useDispatch();
  const produits = useSelector(getProduits);
  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const [search, setSearch] = useState('');
  const getValues = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProduits());
    }
  }, [status, dispatch]);

  return (
    <div className='mt-2 flex flex-col justify-start px-6 py-3 w-full ring-1 ring-slate-900/5 rounded-lg p-4 shadow-sm bg-white'>
      <div className='flex flex-col md:flex-row md:justify-between items-center w-full'>
        <h1 className='text-center text-2xl font-bold text-gray-500'>Liste des produits</h1>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col md:flex-row  justify-between md:items-center space-y-5 py-3 px-4 '>
            <label className='input input-bordered flex items-center gap-2 bg-gray-50'>
              <input type="text" className='grow' name="search" onChange={getValues} id="search" placeholder='rechercher un produit' value={search} />
              <Search className='text-gray-500' size={20} />
            </label>
            <div className="flex items-center justify-center space-x-5 pl-4">
              <span className=' inline-flex px-2 py-2 items-center justify-center  hover:bg-blue-100 duration-300  rounded-full bg-gray-100 transition-transform transform active:scale-90'>
                <ArrowDownToLine />
              </span>
              <span className='inline-flex px-2 py-2 items-center justify-center  hover:bg-blue-100 duration-300  rounded-full bg-gray-100 transition-transform transform active:scale-90 '>
                <ArrowDownWideNarrow />
              </span>
              <span>
                <Modal />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='overflow-x-auto'>
        <Table columns={columns} data={data} renderRow={renderRow} />
      </div>
    </div >
  )
}
export default Products
