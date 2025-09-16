import React from 'react'



const Navbar = () => {

  return (
<>

<section className='flex  justify-center self-center p-6   fixed z-1000  backdrop-blur-sm top-0 w-screen'>
<div>
   <img src="src/assets/images/initials-2.png" alt="" className='w-25 hover: hover:animate-ping justify-left' />

</div>
    <ul className='flex gap-7 bg-black text-white p-8 rounded-full shadow-2xl w-95 items-center justify-center' >
        <li className='hover: hover:scale-110 transition duration-300 ease-in-out cursor-pointer hover:animate-bounce'>ABOUT</li>
        <li  className='hover: hover:scale-110 transition duration-300 ease-in-out cursor-pointer hover:animate-bounce'>PROJECTS</li>
        <li  className='hover: hover:scale-110 transition duration-300 ease-in-out cursor-pointer hover:animate-bounce'>CONTACT</li>
    </ul>
</section>
</>
  )
}

export default Navbar

