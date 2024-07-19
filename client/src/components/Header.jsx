import { Navbar } from 'flowbite-react'
import {Link} from 'react-router-dom'
import React from 'react'

export default function Header() {
  return (
    <Navbar className='border-b-2'>
        <Link to='/'>
        <span className='bg-red-500'>krish</span> Blog
        </Link>
    </Navbar>
  )
}
