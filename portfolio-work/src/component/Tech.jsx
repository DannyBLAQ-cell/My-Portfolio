import {useEffect,useRef,useState} from 'react'
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { motion } from "framer-motion";
const tech=[
  "/src/assets/tech/css.png"
  ,"/src/assets/tech/html.png"
  ,"/src/assets/tech/javascript.png"
  ,"/src/assets/tech/reactjs.png"
  ,"/src/assets/tech/nodejs.png"
  ,"/src/assets/tech/git.png"
  ,"/src/assets/tech/2056022.png"
  ,"/src/assets/tech/tailwind.png"



];
const Tech = () => {
      const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

    useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE, // required
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.00,
          scaleMobile: 1.0,
          color:0xe11f,       // net line color
          backgroundColor:0x1111ac, // background color
          points: 15.0,          // number of points in the net
          maxDistance: 18.0,     // max distance between points before linking
          spacing: 16.0          // spacing between points
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
    <section className='mb-28'>
    <div  ref={vantaRef}
    className="w-full h-140 flex flex-col">
         <h1 className="text-4xl font-bold text-red-700 ml-30 mt-12 ">My Skills <br /><span className='font-extrabold text-7xl text-white'>Technologies.</span></h1>
    
  <div className="overflow-hidden w-full py-6 mt-12">
     <motion.div
            className="flex gap-8 "
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
               
            }}
              // whileHover={{ scale: 1.2, rotate: 5 }}
            style={{ width: "max-content" }}
          >
            {[...tech, ...tech,...tech].map((src, index) => (
              <img
                key={src + index}
                src={src}
                alt={`tech-${index}`}
                className="w-auto h-24 shadow-2xl object-contain rounded-xl shadow-xl bg-neutral-900 p-3 hover: hover:rotate-[30deg] transition duration-300 hover:scale-107"
              />
            ))}
          </motion.div>
  </div>
    
    
    </div>


   </section>
    </>
  )
}

export default Tech