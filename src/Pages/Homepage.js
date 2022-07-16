import React from 'react'
import Feed from '../Components/Feed/Feed'
import Header from '../Components/Header/Header'
import Sidebar from '../Components/LeftSidebar/Sidebar'
import Widgets from '../Components/RightSidebar/Widgets'

const Homepage = () => {
  return (
    <>
        <Header />
        <div className="app__body">
        <Sidebar />
          <Feed />
        <Widgets />
        </div>

    </>
  )
}

export default Homepage