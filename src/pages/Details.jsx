import '../stylesheet/details.css'
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from 'react'
import image from '../images/assets'

const Details = () => {
  const [width, setWidth] = useState(0);

  const carousel = useRef();
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <>
      <div className='container-details'>

        <motion.h4
        className='h4title'
          animate={{ x: [10, 350, 170], opacity: 3, scale: 1 }}
          initial={{ opacity: 0, scale: 0.5 }}
        >Gallery</motion.h4>
      </div>
      <motion.div ref={carousel} whileTap={{ cursor:'grabbing' }} className='carousel'>
        <motion.div drag='x'  dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
          {image.map((image) => {
            return (
              <motion.div className='item-imag' key={image}>
                <img src={image} alt='bilder' />            
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Details