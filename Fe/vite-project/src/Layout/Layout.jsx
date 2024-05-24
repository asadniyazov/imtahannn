import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer1 from './footer1'

import Navbar from './Navbar'

function Layout() {
  return (
<>
<Navbar></Navbar>
<Outlet></Outlet>
<Footer1></Footer1>
</>
  )
}

export default Layout