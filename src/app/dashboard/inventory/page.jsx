import React from 'react'
import { data } from "@/app/ui/data"

const Inventaitre = () => {
  const column = ["Refference", "image", "Nom", "Poids", "Quantité"]
  return (
    <div className='flex flex-col px-4 bg-white ring-1 ring-slate-900/5 rounded-lg py-4  shadow-sm w-full'>
      <div className='flex flex-col md:flex-row md:justify-between justify-center md:items-center'>
        <div>
          <h1 className='text-lg md:text-3xl font-bold'><span className='text-orange-400 text-4xl font-extrabold'>In</span>ventaire</h1>
        </div>
        <div>
          <input type="date" name="date" id="date" className='bg-blue-100 h-8 outline-none focus:ring-1 focus:ring-blue-300 py-2 px-2 rounded-md ' />
        </div>
      </div>
      <div className='w-full overflow-auto p-4 mt-4'>
        <table className='w-full border border-slate-600 border-collapse'>
          <caption className='text-lg font-bold caption-top p-3 uppercase mb-3'>
            Inventaire du mois de novembre
          </caption>
          <thead>
            <tr>
              {
                column.map(item => (<th key={item} className='text-sm text-left p-4 text-black-500 border border-slate-600 bg-slate-300'> {item} </th>))
              }
            </tr>
          </thead>
          <tbody>
              {
                data.map((item) => (
                  <tr key={item} className='border border-slate-600 hover:bg-blue-100'>
                    <td className='border p-4 border-slate-600'>refference</td>
                    <td className='border p-4 border-slate-600'>image</td>
                    <td className='border p-4 border-slate-600'>nom</td>
                    <td className='border p-4 border-slate-600'>poids</td>
                    <td className='border p-4 border-slate-600'>Quantité</td>
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Inventaitre
