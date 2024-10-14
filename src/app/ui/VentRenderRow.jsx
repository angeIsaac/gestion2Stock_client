import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const VentRenderRow = (item, index) => {
    return (
        <motion.tr
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className='text-sm hover:bg-gray-200 space-x-2'
        >
            <td className='p-5'>
                <div>Date de vente</div>
            </td>
            <td className='p-5'>
                <div>
                    <div className='flex items-center space-x-2'>
                        <Image src='https://img.freepik.com/vecteurs-libre/conception-du-logo-golden-bird_1195-336.jpg?t=st=1728314020~exp=1728317620~hmac=5048c001ceaa49209d8b7bbc5300876140395b9b1b2520427a15725b6e7390ac&w=740'
                            width={30}
                            height={30}
                            quality={100}
                            className='rounded-full bg-cover'
                        />
                        <div className='flex items-center space-x-2'>
                            <div>{item.name}</div>
                            <div>{item.poids}</div>
                        </div>
                    </div>
                </div>
            </td>
            <td className='p-5'>
                <div>
                    {item.quantite}
                </div>
            </td>
            <td className='p-5'>
                <div className='flex items-center space-x-3'>
                    <Image
                        src={"https://img.freepik.com/vecteurs-libre/conception-du-logo-golden-bird_1195-336.jpg?t=st=1728314020~exp=1728317620~hmac=5048c001ceaa49209d8b7bbc5300876140395b9b1b2520427a15725b6e7390ac&w=740"
                        }
                        width={30}
                        height={30}
                        quality={100}
                        className='rounded-full bg-cover'
                    />
                    <div>
                        nom
                    </div>
                </div>
            </td>
            <td className='p-5'>
                <div>
                    {item.montantTotal}
                </div>
            </td>
        </motion.tr>
    )
}

export default VentRenderRow
