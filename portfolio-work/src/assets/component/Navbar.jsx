import React from 'react'

const Navbar = () => {
  return (
<>

<section className='flex  justify-center m-9'>

<div>
    <img src="portfolio-work/src/assets/images/ChatGPT Image Sep 12, 2025, 10_41_56 PM.png" alt="" />
</div>
    <ul className='flex gap-7 bg-black text-white p-8 rounded-full shadow-2xl w-95 items-center justify-center' >
        <li className='hover: hover:scale-110 transition duration-300 ease-in-out cursor-pointer hover:animate-bounce'>HOME</li>
        <li  className='hover: hover:scale-110 transition duration-300 ease-in-out cursor-pointer hover:animate-bounce'>PROJECTS</li>
        <li  className='hover: hover:scale-110 transition duration-300 ease-in-out cursor-pointer hover:animate-bounce'>CONTACT</li>
    </ul>
</section>
</>
  )
}

export default Navbar