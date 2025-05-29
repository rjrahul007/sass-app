import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Navitems from './Navitems'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link
        href="/"
        className="">
            <div className="flex items-center gap-2 5 cursor-pointer">
                <Image src="/images/logo.svg" alt="Logo" width={40} height={40} />
            </div>
        </Link>
        <div className="flex items-center gap-8">
          <Navitems/>
        </div>
    </nav>
  )
}

export default Navbar
