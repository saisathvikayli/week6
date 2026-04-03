import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'

function Rootlayout() {
  return (
    <div>
        <Header/>
        <div className='min-h-screen mx-20 p-20 bg-gray-100'>
            <Outlet/>
        </div>
       
    </div>
  )
}

export default Rootlayout