import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePase from './pages/HomePase'
import Websitelayout from './pages/layout/Websitelayout'
import "bootstrap/dist/css/bootstrap.min.css"
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Websitelayout />}>
          <Route index element={<HomePase />} />
          {/* <Route path="products">
          <Route index element={<Products products={products} />} />
          <Route path="/products/:id" element={< ProductsDetail />} />
        </Route> */}


        </Route>
      </Routes>

    </div>
  )
}

export default App
