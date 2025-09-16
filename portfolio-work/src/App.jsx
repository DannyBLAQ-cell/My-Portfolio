import React from 'react'
import Navbar from './component/Navbar'
import BlobCursor from './component/BlobCursor'
import Hero from './component/Hero'
import TrueFocus from './component/TrueFocus';
import About from './component/About'
import Tech from './component/Tech'
import './index.css'

const App = () => {
  return (
   <>
<section>
   <div  className="relative w-screen min-h-screen">
   <Navbar />
   <BlobCursor
  blobType="circle"
  fillColor="#5227FF"
  trailCount={3}
  sizes={[50, 55, 75]}
  innerSizes={[20, 35, 25]}
  innerColor="rgba(255,255,255,0.8)"
  opacities={[0.6, 0.6, 0.6]}
  shadowColor="rgba(0,0,0,0.75)"
  shadowBlur={5}
  shadowOffsetX={10}
  shadowOffsetY={10}
  filterStdDeviation={30}
  useFilter={true}
  fastDuration={0.1}
  slowDuration={0.5}
  zIndex={-1}
  opacity={0.8}
/> 
<Hero />



<TrueFocus 
sentence="HELLO, I'M"
manualMode={false}
blurAmount={5}
borderColor="purple"
animationDuration={1}
pauseBetweenAnimations={1}
/> 


  </div> 
  
   <About />

   <Tech/>
  </section> </> 
  )
}

export default App