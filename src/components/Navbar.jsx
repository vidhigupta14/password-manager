import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-14 flex items-center justify-between p-3 bg-[#9159d1] text-white'>
        <h3 className='text-2xl font-bold'>PassGo</h3>
        <ul className="flex space-x-4 font-medium text-sm">
            <li className='hover:text-[#e7d7fa]'><a href="/">Home</a></li>
            <li className='hover:text-[#e7d7fa]'><a href="/about">About</a></li>
            <li className='hover:text-[#e7d7fa]'><a href="/contact">Contact</a></li>
        </ul>
        <button className=' bg-violet-100 text-[#9159d1] p-2 w-24 rounded-md m-1 font-medium hover:bg-[#eae2f3]'>Login</button>
    </nav>
  )
}

export default Navbar