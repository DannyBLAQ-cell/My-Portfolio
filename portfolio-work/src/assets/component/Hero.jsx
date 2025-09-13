import React from 'react'
import { motion,motionValue,useMotionTemplate,useMotionValue,useSpring } from 'framer-motion';

const Hero = () => {


    // it create a value that can update smoothly without rerendering..if it were normal react id use state
const x= useMotionValue(0); 
const y= useMotionValue(0);

// use spring is used to animate x and y smoothly instead of jumping kinda like transitions,,stiffness controls how strong the string pulls back..damping controls how much it resists bouncing
const animateX=useSpring(x,{stiffness:40, damping:30});
const animateY=useSpring(y,{stiffness:40, damping:30});


// the function controls the mouse movement properties
const handleMouseMovement=(e)=>{
    // clientxgives mouse position hrizontally
    const{innerWidth, innerHeight}=window;
    // this is to normalise the width and height of the window ant different positions left..middle and right
    const offSetX= ((e.clientX / innerWidth)-0.5)*25;
    const offSetY= ((e.clientY / innerHeight)-0.5)*25;
// .set is to update it
x.set(offSetX);
y.set(offSetY);

}
    
  return (
   <>
   <section className='flex gap-20 '>
   <div className='m-35 mt-30'>
    <h1 className='text-7xl font-bold  mt-20 z-50 font-bold  font-bold' >
    
    </h1>

    <p className='text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-8 z-50 font-cursive'>
        DANIEL
    </p>
    <p className=' text-4xl font-bold text-gray-600 mt-6 z-50  ' >
        I'm a Software Engineer 
    </p>
   </div>

   <div className=' rounded-full mt-10 mr-20 p-1 z-50 bg-gradient-to-r from-purple-400 to-pink-600 h-110' onMouseMove={handleMouseMovement}>
    
    <motion.img 
    src='/src/assets/images/profile.png'
    alt='profile'
    style={{x:animateX,
        y:animateY,
        // this is to make the image move in the direction of the cursor
      
 }} 
 className='w-180 h-110   '

    />

   </div></section>
   </>
  )
}

export default Hero