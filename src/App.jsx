import { useState } from 'react'
import { BrowserRouter, Outlet } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './Header'
import { Content } from './router/Content'

function App() {

  return (
    <>
      <div className='container'>
        <div>
          <Header />
        </div>
        <div className='main_content'>
          <div className='DFL W1X JSTCC'>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
