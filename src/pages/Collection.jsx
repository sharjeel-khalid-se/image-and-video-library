import React from 'react'
import { useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'


const Collection = () => {
  const collection = useSelector(state => state.collection.items)
  console.log(collection)
  return (
    <div  className='flex flex-wrap justify-between w-full p-10 overflow-auto gap-5'>
      {collection.map((item, idx)=>{
        return <div key={idx}>
          {<CollectionCard item={item}/>}
        </div>
      })}
    </div>
  )
}

export default Collection