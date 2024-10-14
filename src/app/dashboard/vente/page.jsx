"use client";
import React from 'react'
import Table from '@/app/ui/Table'
import { vente, data } from "@/app/ui/data";
import VentRenderRow from "@/app/ui/VentRenderRow";

const Vente = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>La liste des ventes</h1>
      <div>
        <Table columns={vente} data={data} renderRow={VentRenderRow}/>
      </div>
    </div>
  )
}

export default Vente
