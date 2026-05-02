import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex justify-between items-center-safe bg-blue-800 text-white px-6 py-5'>
        <h1 className='text-2xl font-bold'>Media</h1>
        <div className='flex items-center justify-between gap-5'>
            <Link to={'/'} className='bg-white text-black px-4 py-2 rounded text-xl'>Search</Link>
            <Link to={'/collection'} className='bg-white text-black px-4 py-2 rounded text-xl'>Collection</Link>
        </div>
    </div>
  )
}

export default Navbar