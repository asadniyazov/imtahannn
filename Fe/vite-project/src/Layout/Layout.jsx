import React from 'react'
import { Outlet } from 'react-router-dom'
import footer from './footer'
import footer1 from './footer1'

import Navbar from './Navbar'

function Layout() {
  return (
<>
<Navbar></Navbar>
<Outlet></Outlet>
<footer1></footer1>
</>
  )
}

export default Layout