"use client";
import Image from 'next/image';

const ListItems = ({ items }) => {
    return (
        <li className='flex items-center p-5 justify-between flex-row border-b hover:bg-gray-200'>
            <span>date</span>
            <div className='flex justify-center items-center space-x-4'>
                <Image src={"https://img.freepik.com/vecteurs-libre/conception-du-logo-golden-bird_1195-336.jpg?t=st=1728314020~exp=1728317620~hmac=5048c001ceaa49209d8b7bbc5300876140395b9b1b2520427a15725b6e7390ac&w=740"}
                    alt={items.name}
                    width={50}
                    className='rounded-full bg-cover'
                    height={50}
                    quality={100} />
                <h1 className='text-sm'>{items.name}</h1>
            </div>
            <div>quantite</div>
            <div>prix</div>
            <div className='flex items-center justify-center space-x-5'>
                <button >supprimer</button>
                <button>ajouter</button>
            </div>
        </li>
    )
}

export default ListItems
