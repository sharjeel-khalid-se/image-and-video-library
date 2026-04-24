import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tab = () => {
    const tabs = ["photos" , "vidoes"]
    const dispatch = useDispatch()
    const activeTab = useSelector((state)=>state.search.activeTab)

  return (
    <div className='flex gap-5 justify-center items-center mt-4'>
        {tabs.map((elem, idx)=>(
            <button key={idx} 
             className={`${elem==activeTab?"bg-blue-900":"bg-gray-800"} px-6 py-4 rounded active:scale-105 transition`}
              onClick={()=>dispatch(setActiveTab(elem))}>
                {elem}
            </button>
        ))}
    </div>
  )
}

export default Tab