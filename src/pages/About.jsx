import React from 'react'
import '../stylesheet/abaout.css';
import Scroll from '../components/scroll'
import Cards from '../components/Cards'
import LikeBtn from '../components/LikeBtn';

const About = () => {
  return (
    <>
      <div className='about-container'>
        <Scroll />


<Cards />
<LikeBtn />
      </div>
      


    </>
  )
}

export default About