import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './Header'

function App() {

  return (
    <>
      <div className='container'>
        <div>
          <Header />
        </div>
        <div className='main_content PSTR'>
          <div className='DFL W1X JSTCC'>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
