import './blogPost.scss';
import { Link } from 'react-router-dom';

const BlogPost = ({blogPost, style={}}) => {
  const {img, tags, title, authorName, timeStamp, description, index} = blogPost;
  return (
    <div className="blog-post" style={style}>
      <img 
        src={img} 
        alt="" 
      />
      <div className="blog-details">
        <div className="tags">
        {tags?.map((tag) => {
          return <a href="" key={tag}>{tag}</a>
        })}
        </div>
        <Link to={`/blog/${index}`}><h2><a href="" id='blog-title'>{title}</a></h2></Link>
        <ul>
          <li>
            <a href="" className='author-name'>
              <img 
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20230927%2Foriginal%2Fpngtree-web-browser-3d-illustration-png-image_13158556.png&f=1&nofb=1&ipt=9254786edf54c1cd65379c23ecdacec4ac85befb4330a7bf50780b2bc219c4af&ipo=images" 
                alt="" 
              />
              <span>{authorName}</span>
            </a>
          </li>
          <li>
            {timeStamp}
          </li>
        </ul>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default BlogPost