import React from 'react'

const Inventaire = () => {
  const colums = ["Refference", "Nom", "Poids", "Quantité"]
  return (
    <div className='flex flex-col px-4 py-3'>
      <div className='flex flex-col md:flex-row md:justify-between justify-center md:items-center'>
        <div>
          <h1 className='text-lg md:text-3xl font-bold'><span className='text-orange-400 text-4xl font-extrabold'>In</span>ventaire</h1>
        </div>
        <div>
          <input type="date" name="date" id="date" className='bg-blue-100 h-8 outline-none focus:ring-1 focus:ring-blue-300 py-2 px-2 rounded-md ' />
        </div>
      </div>
      <div className='w-full overflow-auto'>
        <table className='w-full'>
          <thead>
            <tr>
              {
                colums.map(item => (<th> {item} </th>))
              }
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default Inventaire
