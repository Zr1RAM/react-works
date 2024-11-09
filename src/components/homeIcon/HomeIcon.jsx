import React from 'react'
import './homeIcon.scss';
import { Link } from "react-router-dom";

const HomeIcon = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="home-icon">
                <img 
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20230927%2Foriginal%2Fpngtree-web-browser-3d-illustration-png-image_13158556.png&f=1&nofb=1&ipt=9254786edf54c1cd65379c23ecdacec4ac85befb4330a7bf50780b2bc219c4af&ipo=images" 
                    alt="" 
                />
                <span>StaticHunt Clone</span>
                </div>
            </Link>
  )
}

export default HomeIcon