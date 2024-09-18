import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
        <>
        <nav className='navbartdm'>
            <ul>
                <li>
                    <Link to ='/'> Home</Link>
                </li>
                <li>
                    <Link to ='/Consejo'> Consejo de Administración</Link>
                </li>
                
            </ul>
        </nav>
        </>
    )
}

export default Navbar
