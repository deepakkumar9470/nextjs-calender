import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='navbar'>
         <div className='logo'>
            <h2>Calender App</h2>
         </div>
        
           <ul className='nav'>
             <Link href="/">Home</Link>
             <Link href="/">About</Link>
             <Link href="/">Contact</Link>
           </ul>
         
    </div>
  )
}

export default Header