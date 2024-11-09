import React from 'react';
import "./home.scss";
import { FaGithub } from 'react-icons/fa';

const tags = [
  "Premium",
  "Free",
  "Business",
  "Blog",
  "Portfolio",
  "Dashboard",
  "SaaS",
  "Boilerplate",
  "Ecommerce",
  "Documentation",
  "Others",
];

const themes = [
  {
    name: "Themefisher",
    description:
      "Themefisher offers over 120 premium and free website templates built with modern technologies like Astro, NextJs, Hugo, Tailwind, and Bootstrap.",
    image: "https://statichunt.com/_next/image?url=%2Fsponsors%2Fthemefisher-card.png&w=828&q=75", // Placeholder for the image path
  },
  {
    name: "WrapPixel",
    description:
      "80+ premium and free admin dashboard templates built with modern technologies like VueJs, React, NextJs, Angular, and Bootstrap.",
    image: "https://statichunt.com/_next/image?url=%2Fsponsors%2Fwrappixel-card.png&w=828&q=75",
  },
  {
    name: "Tremor Labs, Inc.",
    description:
      "250+ blocks and templates built with Tremor, Tailwind CSS, and React.js to build charts, dashboards, and beyond.",
    image: "https://statichunt.com/_next/image?url=%2Fsponsors%2Ftremor-card.png&w=828&q=75",
  },
  {
    name: "Zeon Studio",
    description:
      "Zeon Studio is a composable web agency offering modern web development, UI/UX design, and website migration services.",
    image: "https://statichunt.com/_next/image?url=%2Fsponsors%2Fzeonstudio-card.png&w=828&q=75",
  },
  {
    name: "Zeon Studio1",
    description:
      "Zeon Studio is a composable web agency offering modern web development, UI/UX design, and website migration services.",
    image: "https://statichunt.com/_next/image?url=%2Fsponsors%2Fzeonstudio-card.png&w=828&q=75",
  },
  {
    name: "Zeon Studio2",
    description:
      "Zeon Studio is a composable web agency offering modern web development, UI/UX design, and website migration services.",
    image: "https://statichunt.com/_next/image?url=%2Fsponsors%2Fzeonstudio-card.png&w=828&q=75",
  },
  {
    name: "Zeon Studio3",
    description:
      "Zeon Studio is a composable web agency offering modern web development, UI/UX design, and website migration services.",
    image: "https://statichunt.com/_next/image?url=%2Fsponsors%2Fzeonstudio-card.png&w=828&q=75",
  },
  {
    name: "Zeon Studio4",
    description:
      "Zeon Studio is a composable web agency offering modern web development, UI/UX design, and website migration services.",
    image: "https://statichunt.com/_next/image?url=%2Fsponsors%2Fzeonstudio-card.png&w=828&q=75",
  },
  {
    name: "Zeon Studio5",
    description:
      "Zeon Studio is a composable web agency offering modern web development, UI/UX design, and website migration services.",
    image: "https://statichunt.com/_next/image?url=%2Fsponsors%2Fzeonstudio-card.png&w=828&q=75",
  },
  {
    name: "Zeon Studio6",
    description:
      "Zeon Studio is a composable web agency offering modern web development, UI/UX design, and website migration services.",
    image: "https://statichunt.com/_next/image?url=%2Fsponsors%2Fzeonstudio-card.png&w=828&q=75",
  },
  {
    name: "Zeon Studio7",
    description:
      "Zeon Studio is a composable web agency offering modern web development, UI/UX design, and website migration services.",
    image: "https://statichunt.com/_next/image?url=%2Fsponsors%2Fzeonstudio-card.png&w=828&q=75",
  },
  {
    name: "Zeon Studio8",
    description:
      "Zeon Studio is a composable web agency offering modern web development, UI/UX design, and website migration services.",
    image: "https://statichunt.com/_next/image?url=%2Fsponsors%2Fzeonstudio-card.png&w=828&q=75",
  },
  
];

const Home = () => {
  return (
    <div className='home'>
        <header className="title-section">
            <h1>Composable <span className='highlight'>Examples</span> Library</h1>
            <p>Static hunt is the largest directory of 3900+ themes, starters, UI Kits, and tools for static site generators....</p>
            <a href=''>
                <span>
                    <FaGithub size={20}/> Submit Yours
                </span>
            </a>
        </header>
        <div className="tags">
          {tags.map((tag) => {
            return <span key={tag} className='tag'>
              {tag}
            </span>
          })}
        </div>
        <div className="theme-grid">
          {themes.map((theme) => {
            const { name, description, image } = theme;
            return <div className="theme-card" key={name}>
              <img src={image} alt={name} />
              {/* <img src="https://e-siga.uniac.ac.mz/en-US/0/Public/Candi/ImageHandlerGet/fbbff5c0-85b9-435a-ae9d-c14b05c3c69d?modelname=Candi&fldname=ValImagem" 
                  alt={name} /> */}
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          })}
        </div>
        
    </div>
  )
}

export default Home