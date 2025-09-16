import React,{useEffect,useRef} from 'react'
import Typed from 'typed.js'
import { motion } from "framer-motion";

const About = () => {

const typedRef=useRef(null);
useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["About Me"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
    cursorChar: '_',
    });
    return () => typed.destroy();
  }, []);

const typeTwoRef=useRef(null)
  useEffect(() =>{
    const typeTwo= new Typed(typeTwoRef.current, {
strings:['Tech is my passion, Innovation is my drive.', 'Hire Me!'],
typeSpeed:50,
backSpeed:30,
loop:true,
// showCursor:true,
//    cursorChar: '_',
    });
    return () => typeTwo.destroy()
  },[])
  return (
   <> 
   
   <div className>
   <div className=' ml-36 mb-20'>


    <motion.h1 
    initial={{y:-150,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:1, ease:"easeOut", }}
    viewport={{once:true, amount:0.8}}
    
    
    className='text-6xl font-extrabold mb-9  '> 
      <span className='text-3xl text-neutral-500'>Introduction</span> <br /> <span ref={typedRef}></span>
      </motion.h1>





    
    < motion.div 

    className='  text-lg  text-neutral-400  rounded-2xl cursor-pointer w-200 p-9
    
     backdrop-blur-sm  shadow-2xl   hover: hover:scale-102 transition duration-300 ease-out'

  //   whileTap={{ scale: 0.95 }}
  //   transition={{  duration:0.8, ease:"easeOut",  }}
  //  initial={{x:-200, opacity:0 }}
  //  whileInView={{x:0, opacity:1,boxShadow: "0px 0px 20px rgba(14, 2, 9, 0)"}}
  //  viewport={{once:true, amount:0.8}}
initial={{x:-200, opacity:0}}
whileInView={{x:0, opacity:1}}
  transition={{ duration: 0.8, ease: "easeOut" }}

viewport={{once:true, amount:0.8}}
    >
      <p>
  Hi i'm daniel a software Engineer with passion for creating innovative solutions that <br />improve the lives of those around me. 
  I'm currently pursing a degree in software  <br /> Engineering at Nnamdi Azikiwe University Awka.
  
  I'm always eager to learn and grow <br /> as a developer, and i look forward to connecting with like-minded individuals in the tech industry.
    </p>
    
      
    </motion.div>

  
   <div >
<motion.div
initial={{x:200, opacity:0}}
whileInView={{x:0, opacity:1}}
  transition={{ duration: 0.8, ease: "easeOut" }}

viewport={{once:true, amount:0.8}}
>
<p ref={typeTwoRef}  className='ml-120 min-h-32 text-3xl text-purple-500 font-extrabold mt-10 '></p>
      </motion.div>
    </div>
   </div>
    

</div>
      
    </>
  )
}

export default About