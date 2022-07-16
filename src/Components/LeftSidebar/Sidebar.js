import React from 'react';
import SidebarOptions from './SidebarOptions';
import './Sidebar.css'

// ICON
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';




const Sidebar = () => {
  var profile__pic = 'https://scontent.fccu1-2.fna.fbcdn.net/v/t39.30808-1/280396433_1010597713158298_1874602699582778090_n.jpg?stp=c103.57.1000.1000a_dst-jpg_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2EffYTxdpMkAX_sSUCu&_nc_ht=scontent.fccu1-2.fna&oh=00_AT-_OlysxRJDpgC2ouUyoYv0koSQqWLCF0EEQzv2N813kw&oe=62D53F9D'
  return (
    <div className='sidebar'>
        <SidebarOptions  src={profile__pic} title="Dipanjan Mukherjee" />
        <SidebarOptions  src='https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png' title="Friends" />
        <SidebarOptions  src='https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png' title="Marketplace" />
        <SidebarOptions  src='https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png' title="Groups" />
        <SidebarOptions  src='https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png' title="Watch" />
        <SidebarOptions  src='https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png' title="Memoris" />
        <SidebarOptions  src='https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png' title="Saved" />
        <SidebarOptions  src='https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/i7hepQ2OeZg.png' title="Pages" />
        <SidebarOptions  Icon={KeyboardArrowDownIcon} title="See More" />
    </div>
  )
}

export default Sidebar