import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    
        <header className='header'>
            <div className='container logo' >

              
               <Link  href="/" >Yunica`s Website</Link>
            </div>
            <div className='links'>
               <Link href="/about">About</Link>
               <Link href="/about/team">Our Team</Link>
               <Link href="/code/repos">Codes</Link>
            </div>
        </header>
    
  )
}

export default Header