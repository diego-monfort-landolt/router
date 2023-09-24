import React from 'react'
import '../stylesheet/home.css'
import rain from '../images/rain.jpg';
import { AiOutlineCode } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";




const Home = () => {
  return (
    <>
      <div className='container-main'>
        <div className='image-cont'>
          <img src={rain} alt='bild' />
        </div>
        <div className='content'>
          <h2>{<AiOutlineCode className='icon-eins'/>}DiegoDev</h2>
          <h3>Frontend Developer</h3>
          <Link to='https://github.com/diego-monfort-landolt'><AiFillGithub  className='git-btn'/></Link>
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, ipsum dolor! Minus similique placeat sint hic maxime, cumque qui vitae magni consequuntur saepe rem molestiae et non nesciunt minima rerum?</p>

      </div>


    </>
  )
}

export default Home