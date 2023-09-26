import '../stylesheet/details.css'
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from 'react'
import image from '../images/assets'
import assets from '../images/assets'




const Details = () => {
 
 

  return (


    <>

      <div className='container-details'>
       
        <motion.h4 
        animate={{x: 250}}
        transition={{transition: 'ease-in-out', duration: 3}}
        >Gallery</motion.h4>
        </div>
        <motion.div className='carousel'>
          <motion.div drag='x' className='inner-carousel'>
            {image.map((image) =>{
              return (
                <motion.div className='item-imag'>
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