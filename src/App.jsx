import React from 'react'
import SearchBar from './components/SearchBar'
import Tab from './components/Tab'

const App = () => {
  return (
    <div className='bg-gray-900 text-white h-screen w-full'>
      <SearchBar/>
      <Tab/>
    </div>
  )
}

export default App