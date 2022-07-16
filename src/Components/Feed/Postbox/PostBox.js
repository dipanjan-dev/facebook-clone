import { Avatar } from '@mui/material'
import React from 'react'
import './PostBox.css';

// ICONS
import VideocamIcon from '@mui/icons-material/Videocam';
import CollectionsIcon from '@mui/icons-material/Collections';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const PostBox = ({profilepic}) => {
  
  return (
    <div className='post__box'>
      <div className="post__box__top">
        <Avatar src={profilepic}/>
        <form action="">
          <input type="text" placeholder="What's on your Mind, Dipanjan?"/>
        </form>
      </div>
      <div className="post__box__bottom">
        <div className="post__box__bottom__option">
            <VideocamIcon style={{color:`red`}} fontSize="medium"/>
            <p>Live Video</p>
          </div>
        <div className="post__box__bottom__option">
            <CollectionsIcon style={{color:`#14C38E`}} fontSize="medium"/>
            <p>Photo / Video</p>
          </div>
        <div className="post__box__bottom__option">
            <EmojiEmotionsIcon style={{color:`#FFD24C`}} fontSize="medium"/>
            <p>Feelings / Activity</p>
          </div>
      </div>
    </div>
  )
}

export default PostBox