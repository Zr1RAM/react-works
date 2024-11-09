import React from 'react'
import './blogs.scss'
import { blogPostData } from './data';
import BlogPost from '../../components/blogPost/BlogPost';


const Blogs = () => {
  return (
    <div className='blogs'>
      <div className="title-section">
        <h1>Welcome to StaticHunt Blog</h1>
        <p>Get all the news about JAMStack from Statichunt</p>
      </div>
      <div className="blog-posts">
        {blogPostData.map((blogPost, _index) => {
          blogPost.index = _index;
          return <BlogPost key={_index} blogPost={blogPost}/>
        })}
      </div>
    </div>
  )
}

export default Blogs