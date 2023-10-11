import React from 'react'
import '../stylesheet/home.css'
import rain from '../images/rain.jpg';
import { AiOutlineCode } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion"
import Details from './Details';
import Card from '../components/Card';
import Typewriter from 'typewriter-effect';
import { AnimationOnScroll } from 'react-animation-on-scroll';






const Home = () => {


  return (
    <>
      <div className='container-main'>
        <div className='image-cont'>
          <img src={rain} alt='bild' />
        </div>
        <div className='content'>
          <h2 className='ober neonText'>{<AiOutlineCode className='icon-eins' />}DiegoDev</h2>
          <h3 className='under'><Typewriter
            options={{
              strings: ['Frontend', 'Developer', 'DiegoDev', 'Learning React'],
              autoStart: true,
              loop: true,
            }}
          /></h3>

          <Link to='https://github.com/diego-monfort-landolt'><AiFillGithub className='git-btn' /></Link>
        </div>
        <div className='Section-details'>
          <div className='title'>
            <motion.h2
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 3,
                ease: 'easeInOut'
              }}
            >Hey there...</motion.h2>
          </div>
        </div>
        <Details />
        <Card />
        <div className="scrolltxt">
          <AnimationOnScroll initiallyVisible={true} duration={5} animateIn="animate__swing">
            <h2 className='ranim'>React Animation OnScroll</h2>
          </AnimationOnScroll>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus </p>

        </div>





      </div>


    </>
  )
}

export default Home