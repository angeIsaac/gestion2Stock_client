"use client";
import React from 'react'
import ListItems from './ListItems';

const ListeCard = ({ data }) => {
    return (
        <ul className='w-full p-3 ring-1 ring-slate-900/5 rounded-md shadow-md mt-3'>
            {
                data.map((item) => <ListItems items={item}/>)
            }
        </ul>
    )
}

export default ListeCard
