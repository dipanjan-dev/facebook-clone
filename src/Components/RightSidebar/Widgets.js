import { Avatar } from '@mui/material';
import React from 'react'
import FriendList from '../FrinedList/FriendList';
import './Widgets.css';


import Page__Logo from '../../icons/pagelogo.jpg'

// ICONS
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';


const Widgets = () => {

  var profile__pic = 'https://scontent.fccu1-2.fna.fbcdn.net/v/t39.30808-1/280396433_1010597713158298_1874602699582778090_n.jpg?stp=c103.57.1000.1000a_dst-jpg_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2EffYTxdpMkAX_sSUCu&_nc_ht=scontent.fccu1-2.fna&oh=00_AT-_OlysxRJDpgC2ouUyoYv0koSQqWLCF0EEQzv2N813kw&oe=62D53F9D'

  return (
    <div className='widgets'>
      <div className="pages__profile">
        <div className="pages__profile__header">
          <div className="pages__profile__heade__left">
            <h4>Your Pages and Profile</h4>
          </div>
          <MoreHorizOutlinedIcon />
        </div>
        <div className="pages">
          <Avatar src={Page__Logo} />
          <p>Atmosphere</p>
        </div>
        <div className="wigets__notifiations">
          <div className="notification">
            <NotificationsActiveOutlinedIcon /> <p>1 Notification</p>
          </div>
          <div className="notification">
            <EventAvailableOutlinedIcon /> <p>Create Promotion</p>
          </div>
        </div>
      </div>

      {/* BIRTHDAY EVENT */}
      <div className="event">
        <div className="event__header">
            <h4>Birthdays</h4>
        </div>
        <div className="event__body">
          <div className="events__notification">
          <Avatar src='https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/9-o1e6LN_TX.png'/>
          <p><span>Sourav Mukherjee's</span> Birthday is today</p>
          </div>
        </div>
      </div>
      <FriendList  Header="Contacts" />
    </div>
  )
}

export default Widgets