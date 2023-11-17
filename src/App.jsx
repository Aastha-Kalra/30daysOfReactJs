import {React} from 'react'
import SearchFilter from './components/SearchFilter'
import ItemsPerPage from './components/ItemsPerPage'
import ColorPicker from './components/ColorPicker'
import Responsive from './components/Responsive'
import BharatClock from './components/BhartClock'
import Meal from './components/Meal/Meal'

function App() {


  return (
  <div className='bg-black min-h-screen'>
  {/* <SearchFilter/> */}
  {/* <ItemsPerPage/> */}
  {/* <ColorPicker/> */}
  {/* <Responsive/> */}
  {/* <BharatClock/> */}
  <Meal/>

  
  </div>
  )
}

export default App
