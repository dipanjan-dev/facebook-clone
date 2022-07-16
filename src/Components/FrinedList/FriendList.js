import React from 'react';
import './FriendList.css';


// ICONS
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
import Friends from './Friends';




const FriendList = ({Header}) => {
  
  var profile__pic = 'https://scontent.fccu1-2.fna.fbcdn.net/v/t39.30808-1/280396433_1010597713158298_1874602699582778090_n.jpg?stp=c103.57.1000.1000a_dst-jpg_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2EffYTxdpMkAX_sSUCu&_nc_ht=scontent.fccu1-2.fna&oh=00_AT-_OlysxRJDpgC2ouUyoYv0koSQqWLCF0EEQzv2N813kw&oe=62D53F9D'

  return (
    <div className='friendList'>
      <div className="friend__header">
        <div className="friend__header__left">
          <h4>{Header}</h4>
        </div>
        <div className="friend__header__right">
        <VideoCallIcon />
        <SearchIcon />
        <MoreHorizIcon />
        </div>
      
      </div>
      <Friends avater={profile__pic} friendName="Biltu Chakraborty"/>
      <Friends friendName="Kàpïl Bâsû"/>
      <Friends friendName="Joyeeta Adhikary"/>
      <Friends friendName="Shoumi Banerjee"/>
      <Friends friendName="Arnab Chakraborty"/>
      <Friends friendName="Suniti Roy Chowdhury"/>
    </div>
  )
}

export default FriendList