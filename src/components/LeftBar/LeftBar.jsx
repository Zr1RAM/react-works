import './leftbar.scss';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

const staticSiteGeneratorItems = [
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "Nextjs",
        itemNo: "1495"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "Astro",
        itemNo: "163"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "Hugo",
        itemNo: "496"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "Gatsby",
        itemNo: "554"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "NuxtJs",
        itemNo: "84"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "Jekyll",
        itemNo: "169"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "Hexo",
        itemNo: "759"
    },
];
const cssFrameworkItems = [
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "Tailwind",
        itemNo: "1136"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "Bootstrap",
        itemNo: "354"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "Bulma",
        itemNo: "45"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "Chakra",
        itemNo: "189"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "Mui",
        itemNo: "13"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "SCSS",
        itemNo: "480"
    },
];
const jamstackCMSItems = [
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "Markdown",
        itemNo: "740"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "Sanity",
        itemNo: "32"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "Contentful",
        itemNo: "52"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "Decap",
        itemNo: "11"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "Tina",
        itemNo: "12"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "CloudCannon",
        itemNo: "8"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "GraphCMS",
        itemNo: "1"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "Spinal",
        itemNo: "1"
    },
    {
        img: "https://statichunt.com/images/icons/nextjs.svg",
        itemName: "StaticCMS",
        itemNo: "2"
    },
];

const SideBarSubMenu = ({title, items}) => {
    const [toggle, setToggle] = useState(true);
    return (
        <div className="side-bar-sub-menu">
            <div className="sub-menu-title" onClick={()=>setToggle(!toggle)}>
            <h3>{title}</h3>
            {toggle ? <KeyboardArrowDownIcon/> : <KeyboardArrowRightIcon/>}
            </div>
            {toggle && <div className="sub-menu-items">
                {
                    items.map((item) => {
                        const { img, itemName, itemNo } = item;
                        return <div className="sub-menu-item" key={itemName}>
                        <img src={img} alt="" />
                        <span>{itemName}</span>
                        <span>{itemNo}</span>
                    </div>
                    })
                }
            </div>}
        </div>
    )
}

const LeftBar = () => {
  return (
    <div className='left-bar'>
        <SideBarSubMenu key="1" title={"Static Site Generator"} items={staticSiteGeneratorItems}/>
        <SideBarSubMenu key="2" title={"CSS Framework"} items={cssFrameworkItems}/>
        <SideBarSubMenu key="3" title={"Jamstack CMS"} items={jamstackCMSItems}/>
    </div>
  )
}

export default LeftBar;