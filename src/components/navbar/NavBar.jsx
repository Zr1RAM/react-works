import React from 'react'
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import ThemeSwitcher from './ThemeSwitcher';
import { Link } from "react-router-dom";
import HomeIcon from '../homeIcon/HomeIcon';

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            <HomeIcon/>
            <div className="give-a-star">
                <StarIcon className='star'/>
                <span>Give a Star</span>
            </div>
        </div>
        <div className="center">
            <a href="">Themes</a>
            <a href="">Tools</a>
            <a href="">Examples</a>
            <a href="">Bundles</a>
            <Link  to="/blogs" style={{ textDecoration: 'none' }}><a href="">Blog</a></Link>
            <Link  to="/contact" style={{ textDecoration: 'none' }}><a href="">Contact</a></Link>
        </div>
        <div className="right">
            <SearchIcon className="search-icon" onClick={()=>console.log("kill me")}/>
            <ThemeSwitcher />
            <button>Need Custom Development?</button>
        </div>
    </div>
  )
}

export default NavBar