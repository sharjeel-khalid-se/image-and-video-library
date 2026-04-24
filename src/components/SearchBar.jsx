import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import setQuery from '../redux/features/searchSlice.js'

const SearchBar = () => {
    const [search, setsearch] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(setQuery(search))
        setsearch('')
    }
  return (
    <div className='bg-gray-800 w-full py-6 px-4 '>
        <form
        onSubmit={(e)=>handleSubmit(e)}
        className='flex justify-center items-center gap-8'>
            <input type="text" placeholder='Search for photos and videos' required
                className='py-4 px-4 w-1/2 outline-none border rounded-2xl'
                value={search}
                onChange={(e)=>setsearch(e.target.value)}
            />
            <button className='border rounded-2xl py-4 px-6 bg-amber-50 text-gray-700 cursor-pointer'>Search</button>
        </form>
    </div>
  )
}

export default SearchBar