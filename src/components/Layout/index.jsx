import { Grid } from '@mui/material'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import './style.css'

export default function Layout({children}) {
  return (
    <div  style={{display:"grid", gridTemplateRows:"100px calc(100% - 200px) 100px"}}>
    
            <Header />
        {/* <div style={{ backgroundImage:"url(/bg3.png)", backgroundSize:"cover"}}> */}
        <div >
            {/* <img className='bg' src={"/bg3.png"}/>
            <div className='content'> */}
            
                {children}
                {/* </div> */}
            
        </div>
        
            <Footer />
           
    </div>
  )
}
