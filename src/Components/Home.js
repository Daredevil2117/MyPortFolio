import React from 'react'
import "./Style.css"
import Navbar from './Navbar'

export default function Home() {
  return (
    <div className='home'>
        <div className='flexp'>
            <Navbar/>
        </div>
        <div className='home-intro text-white'>
            <p>I'm Tejender Dubey <br/>I'm a Software Developer</p>  
        </div>
    </div>
  )
}
