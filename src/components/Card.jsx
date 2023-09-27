import '../stylesheet/card.css';
import { motion } from "framer-motion"


const Card = () => {
  return (
    <>


      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='cont-dragcard'>
          <h3>This is a simple Card</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus in voluptate asperiores amet nulla pariatur vero nisi provident consequuntur tempora sequi, sunt id? Ratione eos cupiditate magnam laudantium voluptates.</p>
        <motion.div
          className='dragcard'
          drag
          dragConstraints={{
            top: -10,
            left: -10,
            right: 50,
            bottom: 50,
          }}
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 9, repeat: Infinity }}
          
        />

      </motion.div>



    </>
  )
}

export default Card