import React from 'react'
import SearchBar from './components/SearchBar'
import Tab from './components/Tab'
import ResultGrid from './components/ResultGrid'

const App = () => {
  return (
    <div className='bg-gray-900 text-white h-screen w-full'>
      <SearchBar/>
      <Tab/>
      <ResultGrid/>
    </div>
  )
}

export default App