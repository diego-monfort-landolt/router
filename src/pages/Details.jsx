

import '../stylesheet/details.css'
import { motion } from "framer-motion"

const Details = () => {
  

  return (



    <>

      <div className='Section-details'>
        <div className='title'>
          <motion.h2 
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{
            duration: 3,
            ease: 'easeInOut'
          }}
          
          >Hey there...</motion.h2>
        </div>
        </div>
       
      



    </>
  )
}

export default Details