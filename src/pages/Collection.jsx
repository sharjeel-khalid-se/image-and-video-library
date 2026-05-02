import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CollectionCard from '../components/CollectionCard'
import { clearCollection } from '../redux/features/collectionSlice'


const Collection = () => {
  const dispatch = useDispatch()
  const collection = useSelector(state => state.collection.items)

  const handleClear = () => {
    if (!collection || collection.length === 0) return
    if (window.confirm('Clear all items from your collection?')) {
      dispatch(clearCollection())
    }
  }

  return (
    <div className='w-full p-6'>
      <div className='flex justify-end mb-4'>
        {collection && collection.length > 0 && (
          <button
            onClick={handleClear}
            className='bg-red-600 text-white rounded px-3 py-1 font-medium cursor-pointer active:scale-95'
          >
            Clear Collection
          </button>
        )}
      </div>

      <div className='flex flex-wrap justify-between w-full overflow-auto gap-5'>
        {collection.map((item, idx) => (
          <div key={idx}>
            <CollectionCard item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collection