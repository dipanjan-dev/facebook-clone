import React from 'react'
import './Post.css'

import Like from '../../../icons/like.svg'

// ICON
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar, IconButton } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GifIcon from '@mui/icons-material/Gif';
import GifBoxIcon from '@mui/icons-material/GifBox';

// API
import PostAPI from './../../../api/PostAPi'

const Post = ({ profilepic, username, caption, timestamp, image, like , comments}) => {
  return (
    <div className='post'>
      <div className="post__top">
        <div className="post__top__left">
          <Avatar src={profilepic} />
          <div className="post__info">
            <h4>{username}</h4>
            <p>{timestamp}<PublicIcon fontSize='small' /></p>
          </div>
        </div>
        <div className="post__top__right">
          <MoreHorizIcon />
        </div>
      </div>
      <div className="post__middle">
        <p>{caption}</p>
        {image && <img src={image} alt="" />}
      </div>

      {/* INFO LIKE COMMENTS */}

      <div className="post__likes__and__comment">
        <div className="post__like">
         {like && <Avatar src={Like} /> }
          <p>{like}</p>
        </div>
        <div className="post__comments">
          {comments && <p>{comments} comments</p>}
        </div>
      </div>

      {/* LIKE COMMENT SHARE BUTTON */}
      <div className="post__bottom">
        <div className="post__bottom__option">
          <ThumbUpOutlinedIcon fontSize='small' />
          <p>Like</p>
        </div>
        <div className="post__bottom__option">
          <ChatBubbleOutlineOutlinedIcon fontSize='small' />
          <p>Comment</p>
        </div>
        <div className="post__bottom__option">
          <ShareOutlinedIcon fontSize='small' />
          <p>Share</p>
        </div>
      </div>


      {/* POST COMMENT */}
      <div className="post__comment">
        <div className="post__comment__avater">
          <Avatar src={profilepic} />
        </div>
        <div className="post__input__box">
          <input type="text" placeholder='Write a comment...' />
          <div className="post__comment__options">
            <CameraAltIcon />
            <EmojiEmotionsIcon />
            <GifBoxIcon />
          </div>
        </div>
      </div>

      {/* COMMENT AREA */}
      <div className="post__comment__area">
        <div className="post__comment__area__avater">
          <Avatar src={profilepic} />
        </div>
        <div className="post__comment__area__text">
          <h4>Dipanjan Mukherjee</h4>
          <p>What a coincidence I'm leaving Mumbai today for atleast 2 years . Let's see how they are when I be back . Bye bye Mumbai.</p>
        </div>
      </div>
    </div>
  )
}

export default Post
