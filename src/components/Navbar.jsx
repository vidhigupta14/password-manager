import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-14 flex items-center justify-between p-3 bg-violet-500 text-white'>
        <h3 className='text-2xl font-bold'>PassGo</h3>
        <ul className="flex space-x-4 font-medium text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        <button className=' bg-violet-100 text-violet-700 p-2 w-24 rounded-md m-1 font-medium'>Login</button>
    </nav>
  )
}

export default Navbar