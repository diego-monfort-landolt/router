import React, {useState} from 'react'
import '../stylesheet/likebtn.css'
import { AiFillLike } from "react-icons/ai";




const LikeBtn = () => {
  const [likes, setLikes] = useState(10);
   const [liked, setLiked] = useState(false);
  return (
   <>
       <button
         className={`like-button ${liked ? 'liked' : ''}`}
         onClick={() => {
            setLikes(likes + 1);
            setLiked(true);
           
         }}
      >
         {likes} <AiFillLike className='likbtn'/>
      </button>
   
      
   </>
  )
}

export default LikeBtn