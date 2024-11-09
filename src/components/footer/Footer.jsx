import React from 'react';
import './footer.scss';
import HomeIcon from '../homeIcon/HomeIcon';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';

const footerContent = [
    {
        title: 'Statichunt',
        items: [
            "About",
            "Contact",
            "Blog",
            "Write For Us",
            "Disclaimer",
        ],
    },
    {
        title: 'Themes',
        items: [
            "Astro Themes",
            "Hugo Themes",
            "Nextjs Templates",
            "Gatsy Themes",
            "Jekyll Themes",
            "Hexo Themes",
            "Nuxtjs Themes",
            "Eleventy Themes",
        ],
    },
    {
        title: 'Tools',
        items: [
            "Chat",
            "E-Commerce",
            "CMS",
            "Feedback",
            "Form",
            "Helper",
            "Hosting",
            "Search",
        ],
    },
];

const RowItem = ({title, items}) => {
    return <div className='each-column'>
        <h3>{title}</h3>
        <hr />
        <ul className={ `row-item ${items.length > 5 ? 'double-columned-row-item' : ''}`}>
            {items.map((item, _index) => {
                return <li key={_index}>{item}</li>
            })}
        </ul>
    </div>
}

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-links">
            <div className="row">
                {footerContent.map((itemContent, _index) => {
                    const { title, items } = itemContent;
                    return <RowItem key={_index} title={title} items={items}/>
                })}
            </div>
        </div>
        <div className="bottom-bar">
            <HomeIcon style={{color: 'white'}}/>
            <div className="connect-with-us">
                <span>Connect with us:</span>
                <FaTwitter className='icon-item'/>
                <FaGithub className='icon-item'/>
                <FaDiscord className='icon-item'/>
            </div>
            <h6>MAINTAINER @ZEON STUDIO TEAM</h6>
        </div>
    </div>
  )
}

export default Footer;