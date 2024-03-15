import React from 'react'
import Sidebar from '../ui/sidebar/sidebar'
import Navbar from '../ui/navbar/navbar'
import Footer from '../ui/footer/footer'
import style from "../../app/ui/dashboard/styles/dashboard.module.css"

const layout = ( {children} ) => {
  return (
    <div className={style.container}>
      <div className={style.menu}>
        <Sidebar/>
      </div>
      <div className={style.content}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  )
}

export default layout
