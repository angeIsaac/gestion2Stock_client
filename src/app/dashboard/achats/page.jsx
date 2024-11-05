"use client";
import React from 'react'
import { ArrowDownToLine, Plus } from "lucide-react";
import { useState, useEffect } from 'react';
import ListeCard from '@/app/ui/ListeCard';
import { data } from '@/app/ui/data'; 

const Achats = () => {
  const [date, setDate] = useState('');
  return (
    <div className='px-7 md:px-4 mt-8 flex flex-col justify-center'>
      <h1 className='md:text-3xl font-semibold text-lg mb-3 p-4'>Liste des produits achetés</h1>
      <div className='flex flex-col md:flex-row justify-end'>
        <div className='flex justify-center items-center space-x-3'>
          <button onClick={() => { }} className='p-3 rounded-full hover:bg-blue-100 duration-300 transform transition-transform active:scale-90'> <Plus /> </button>
          <button onClick={()=>{}} className='p-3 rounded-full hover:bg-blue-100 duration-300 transform transition-transform active:scale-90'> <ArrowDownToLine /> </button>
          <input onChange={(e) => { setDate(e.target.value)}} value={date} type="date" id='date' name='date' className='bg-gray-200 ml-3 p-2 w-50 rounded-lg focus:outline-none focus:ring-1 hover:bg-blue-100 hover:ring-1 hover:ring-blue-100' />
        </div>
      </div>
      <div>
        <ListeCard data={data} />
      </div>
    </div>
  )
}

export default Achats
