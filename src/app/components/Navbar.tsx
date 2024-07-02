import React from 'react'
import Image from 'next/image'
import franchin from "/public/franchin.jpg"
import {ArrowLeftSquare, ArrowRightSquare} from "lucide-react"
const Navbar = () => {

  return (
    <div>
      <Image
      src={franchin}
      alt='franchin' 
      className='m-9'
      height={35}
      width={35}
      />
      <h1>Log in <ArrowRightSquare /></h1>
    </div>
  )
}

export default Navbar
