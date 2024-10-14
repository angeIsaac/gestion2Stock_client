"use client";

import { Edit, Trash } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion";

export const renderRow = (row, index) => {
    return (
        <motion.tr
        key={row.name} className="space-x-2 md:border-b border-gray-200 text-sm hover:bg-blue-100"
        initial={{opacity:0, y: 10}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: index * 0.1, duration: 0.5}}>
            <td className="md:p-5 py-3">
                <div className="md:flex hidden">
                    <Image src={"https://img.freepik.com/vecteurs-libre/conception-du-logo-golden-bird_1195-336.jpg?t=st=1728314020~exp=1728317620~hmac=5048c001ceaa49209d8b7bbc5300876140395b9b1b2520427a15725b6e7390ac&w=740"}
                        alt={row.nom}
                        width={50}
                        height={50}
                        quality={100}
                        className="rounded-lg bg-cover"
                    />
                </div>
                <div className="md:hidden flex flex-col items-center justify-center py-4 rounded-lg ring-1 ring-slate-900/5 shadow px-3 ">
                    <Image src={"https://img.freepik.com/vecteurs-libre/conception-du-logo-golden-bird_1195-336.jpg?t=st=1728314020~exp=1728317620~hmac=5048c001ceaa49209d8b7bbc5300876140395b9b1b2520427a15725b6e7390ac&w=740"} alt={row.nom}
                        width={50}
                        height={50}
                        quality={100}
                        className="rounded-lg bg-cover w-24"
                    />
                    <h1 className="font-semibold text-lg leading-4 tracking-normal mt-3 text-left"> {row.name} </h1>
                    <div className="flex space-x-4 mt-4">
                        <p className="text-left text-lg"> {row.prix} </p>
                        <p className="text-left text-lg"> {row.poids} </p>
                    </div>
                </div>
            </td>
            <td className="hidden md:table-cell md:p-5 p-3 ">
                <span>{row.name}</span>
            </td>
            <td className="hidden md:table-cell md:p-5 p-3">
                <span> {row.quantite} </span>
            </td>
            <td className="hidden md:table-cell md:p-5 p-3 ">
                <span> {row.prix} </span>
            </td>
            <td className="hidden md:table-cell md:p-5 p-3 ">
                <span> {row.poids} </span>
            </td>
            <td className="hidden md:table-cell md:p-5 p-3">
                <span> {row.montantTotal} </span>
            </td>
            <td className="hidden md:table-cell md:p-5 p-3">
                <div className="flex justify-between items-center px-2">
                    <span> {row.montantTotal} </span>
                    <div className="inline-flex space-x-4">
                        <span className="px-3 text-center text-red-300 py-2 text-sm transition-transform transform active:scale-90 duration-300" onClick={() => {}}>
                            <Trash />
                        </span>
                        <span className="px-3 py-1 rounded-full text-gray-500 text-sm transition-transform transform active:scale-90 duration-300" onClick={() => {}}>
                            <Edit />
                        </span>
                    </div>
                </div>
            </td>
        </motion.tr>
    )
}