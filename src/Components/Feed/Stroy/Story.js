import { Avatar } from '@mui/material'
import React from 'react'
import './Story.css'

const Story = ({profilepic}) => {
  return (
    <div className='story__feed'>
        <div className="story" style={{backgroundImage:`url('https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
            <Avatar src={profilepic}/>
            <p>Dipanjan Mukherjee</p>
        </div>
        <div className="story" style={{backgroundImage:`url('https://images.pexels.com/photos/6243730/pexels-photo-6243730.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`}}>
            <Avatar />
            <p>Sourav Mukherjee</p>
        </div>
        <div className="story" style={{backgroundImage:`url('https://images.pexels.com/photos/6635703/pexels-photo-6635703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
            <Avatar src='https://scontent.fccu1-2.fna.fbcdn.net/v/t39.30808-6/286976637_393445192843050_158297997316451138_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=le6kRypM-pkAX_ibNyz&_nc_ht=scontent.fccu1-2.fna&oh=00_AT_VzlOFTpLdZgh6hk289bjQNlU3Z8KoYjSRS8TDi7gGSw&oe=62D69CFB'/>
            <p>Suniti Roy Chowdhury</p>
        </div>
        <div className="story" style={{backgroundImage:`url('https://images.pexels.com/photos/7447888/pexels-photo-7447888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}>
            <Avatar />
            <p>Vikash Kr Soni</p>
        </div>
        <div className="story" style={{backgroundImage:`url('https://images.pexels.com/photos/4906452/pexels-photo-4906452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
            <Avatar />
            <p>Kunal Mukherjee</p>
        </div>
    </div>
  )
}

export default Story
