import React, { useState, useEffect } from 'react'

const QueryInput = ({ handler , search}) => {
    const [query, setQuery] = useState('')
    return (
        <span>
            <input type="text" name="" value={query} onChange={e => setQuery(e.target.value)}  id="" className='bg-white italic px-2 ml-3 border-b border-l-0 border-r-0 border-blue-500 focus:outline-none text-sm  py-1 w-16' />
        </span>
    )
}

export default QueryInput
