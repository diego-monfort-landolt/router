import React, { useState } from 'react'
import '../stylesheet/likebtn.css'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";


const LikeBtn = () => {
  const [likes, setLikes] = useState(10);
  const [liked, setLiked] = useState(false);

  const [like, setLike] = useState(100)
  const [disLike, setDisLike] = useState(5)

  const [likeactive, setLikeactive] = useState(false);
  const [dislikeactive, setDisLikeactive] = useState(false)

  function likef() {
    if (likeactive) {
      setLikeactive(false);
      setLike(like - 1)
    } else {
      setLikeactive(true)
      setLike(like + 1)
      if (dislikeactive) {
        setDisLikeactive(false)
        setLike(like + 1)
        setDisLike(disLike - 1)
      }
    }
  }

  function dislikef() {
    if (dislikeactive) {
      setDisLikeactive(false);
      setDisLike(disLike - 1)
    } else {
      setDisLikeactive(true)
      setDisLike(disLike + 1)
      if (likeactive) {
        setLikeactive(false)
        setDisLike(disLike + 1)
        setLike(like - 1)
      }
    }
  }
  return (
    <>
      <div className='contbtn'><button
        className={`like-button ${liked ? 'liked' : ''}`}
        onClick={() => {
          setLikes(likes + 1);
          setLiked(true);

        }}
      >
        {likes} <AiFillLike className='likbtn' />
      </button>

        <div className='otherbtn'>
          <button onClick={likef} className={[likeactive ? 'active-like' : null, 'button'].join(' ')} ><AiFillLike className='likbtn' />{like} </button>
          <button onClick={dislikef} className={[dislikeactive ? 'active-disLike' : null, 'button'].join(' ')}><AiFillDislike className='likbtn' />{disLike} </button>
        </div>
      </div>
    </>
  )
}

export default LikeBtn