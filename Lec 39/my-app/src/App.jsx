import React from 'react'
import AllProducts from './components/AllProducts'
import { Link, Route, Routes } from 'react-router-dom'
import Dog from './components/Dog'
import Cat from './components/Cat'

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/dog">Dog</Link></li>
          <li><Link to="/cat">Cat</Link></li>
          <li><Link to="/allProducts">Products</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/dog' element={<Dog/>} />
        <Route path='/cat' element={<Cat/>} />
        <Route path='/allProducts' element={<AllProducts/>} />
      </Routes>


    </div>
  )
}

export default App