import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Breed from './Breed'

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/breed' element={<Breed/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
