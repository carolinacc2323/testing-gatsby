import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import './Layout.css'
import Navbar from './Navbar/Navbar'

const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
        <header className='header'>
          <StaticImage src='../images/logopatri.jpg' 
          width={300} 
          height={100}
          placeholder='blurred'
          layout='constrained'
          className='logotipo'
          />
            <h1>Esto es el header</h1>
            
        </header>
        <div>
            {children}
        </div>
        <footer>
            <p>Esto es el footer</p>
        </footer>
    </>
  )
}

export default Layout
