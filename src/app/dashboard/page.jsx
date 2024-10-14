"use client";
import React from 'react';
import UserCard from "@/app/ui/UserCard";
import { motion } from "framer-motion";
import Barchart from '@/app/ui/Barchart';
import { salesData } from "@/app/ui/data";



const Dashboard = () => {
  const data = [
    {
      info: "info",
      name: "name",
      quantite: "quantité",
      poids: "poids",
      prix: "prix",
      montantTotal: "montant total",
    },
    {
      info: "info",
      name: "name",
      quantite: "quantité",
      poids: "poids",
      prix: "prix",
      montantTotal: "montant total",
    },
    {
      info: "info",
      name: "name",
      quantite: "quantité",
      poids: "poids",
      prix: "prix",
      montantTotal: "montant total",
    },
    {
      info: "info",
      name: "name",
      quantite: "quantité",
      poids: "poids",
      prix: "prix",
      montantTotal: "montant total",
    },
  ]
  return (
    <div className='grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-x-3'>
      <div className='md:col-span-2 md:col-start-1'>
        <div className='grid md:grid-cols-3 grid-cols-1 grid-rows-3 md:grid-rows-1 grid-flow-col-dense gap-x-4 md:gap-x-3 gap-5'>
          <div>
            <UserCard />
          </div>
          <div>
            <UserCard />
          </div>
          <div>
            <UserCard />
          </div>
        </div>
        <div className='mt-10 flex justify-start'
        >
          <Barchart data={salesData} />
        </div>
      </div>
      <div>
        <motion.table
          className='w-full md:mt-0 mt-4 md:ml-3 h-[400px]'
          nitial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <thead>
            <tr className="text-left text-gray-500 text-sm">
              <motion.th
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.3, delay:0.1}}
              >info</motion.th>
              <motion.th
              initial={{opacity:0}}
              animate={{opacity:1}}
              >name</motion.th>
              <motion.th
              initial={{opacity:0}}
              animate={{opacity:1}}
              >poids</motion.th>
              <motion.th
              initial={{opacity:0}}
              animate={{opacity:1}}
              >prix</motion.th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <motion.tr key={item.name} 
              className="space-x-2 text-sm hover:bg-gray-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <td> {item.info} </td>
                <td> {item.name} </td>
                <td> {item.poids} </td>
                <td> {item.prix} </td>
              </motion.tr>
            ))
            }
          </tbody>
        </motion.table>
      </div>
    </div>
  )
}


export default Dashboard
