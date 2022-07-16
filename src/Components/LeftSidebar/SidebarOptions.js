import { Avatar, Icon } from '@mui/material'
import React from 'react'
import './SidebarOptions.css'

const SidebarOptions = ({src,Icon,title}) => {
  return (
    <div className='sidebar__row'>
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <p>{title}</p>
    </div>
  )
}

export default SidebarOptions