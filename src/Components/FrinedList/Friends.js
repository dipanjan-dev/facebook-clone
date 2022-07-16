import { Avatar } from '@mui/material'
import React from 'react'

const Friends = ({avater, friendName}) => {
    return (
        <div>
            <div className='list__friends'>
                <div className="friend online">
                    <Avatar src={avater} />
                    <p>{friendName}</p>
                </div>
            </div>

        </div>
    )
}

export default Friends
