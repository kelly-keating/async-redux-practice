import React from 'react'

const Post = ({post}) => (
  <div>
    <img className='thumbnail' src={post.thumbnail} />
    {post.title}
  </div>
)

export default Post
