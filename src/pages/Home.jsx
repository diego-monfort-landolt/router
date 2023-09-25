import React from 'react'
import '../stylesheet/home.css'
import rain from '../images/rain.jpg';
import { AiOutlineCode } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion"




const Home = () => {
  return (
    <>
      <div className='container-main'>
        <div className='image-cont'>
          <img src={rain} alt='bild' />
        </div>
        <div className='content'>
          <h2 className='ober'>{<AiOutlineCode className='icon-eins' />}DiegoDev</h2>
          <h3 className='under'>Frontend Developer</h3>
          <Link to='https://github.com/diego-monfort-landolt'><AiFillGithub className='git-btn' /></Link>
        </div>
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


        
        <p>
       
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?orem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?</p>

      </div>


    </>
  )
}

export default Home