import { Route, Routes } from 'react-router-dom'
import Home from './COMPONENTS/Home'
import First from './COMPONENTS/First'
import From from './COMPONENTS/From'
import Toggle from './COMPONENTS/Toggle'
import Nav from './COMPONENTS/Nav'

function App() {
  return (
    <div>
      <div className='nave' style={{ backgroundColor: 'cadetblue' }}>
        <Nav></Nav>
      </div>

      <Routes>
        <Route path='/' element={<First />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/form' element={<From />}></Route>
        <Route path='/toggle' element={<Toggle />}></Route>
      </Routes>
    </div>
  )
}

export default App
