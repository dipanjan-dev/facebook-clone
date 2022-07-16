import React from 'react';
import './Feed.css'
import Post from './Post/Post';
import PostBox from './Postbox/PostBox';
import Story from './Stroy/Story';
import PostAPI from '../../api/PostAPi';

const Feed = () => {
        var profile__pic = 'https://scontent.fccu1-2.fna.fbcdn.net/v/t39.30808-1/280396433_1010597713158298_1874602699582778090_n.jpg?stp=c103.57.1000.1000a_dst-jpg_s320x320&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=2EffYTxdpMkAX_sSUCu&_nc_ht=scontent.fccu1-2.fna&oh=00_AT-_OlysxRJDpgC2ouUyoYv0koSQqWLCF0EEQzv2N813kw&oe=62D53F9D'


        function postView(postData){
                
                return(
                <Post 
                profilepic={postData.profile_picture} 
                username={postData.name} 
                caption={postData.post_caption}
                timestamp={postData.post_time} 
                like={postData.post_like} 
                comments={postData.post_comments}  
                image={postData.post_image} 
                />  
                )
        }

        return (
                <div className='__feed'>
                        <Story profilepic={profile__pic} />
                        <PostBox profilepic={profile__pic} />


                        {/* POSTS */}
                        {/* <Post profilepic={PostAPI[0].profile_picture} username={PostAPI[0].username} 
                        caption={PostAPI[0].post_caption}  timestamp={PostAPI[0].post_time}  like={PostAPI[0].post_like}  comments={PostAPI[0].post_comments}  image={PostAPI[0].post_image} /> */}
                        {PostAPI.map(postView)}
                </div>
        )
}

export default Feed