import React, { useContext } from 'react'
import './styles/app.scss';
import { DarkModeContext } from './context/darkModeContext';
import NavBar from './components/navbar/NavBar';
import LeftBar from './components/LeftBar/LeftBar';
import { RouterProvider, createBrowserRouter, Outlet, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Blogs from './pages/blog/Blogs';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import Footer from './components/footer/Footer';

const Layout = () => {
    const {darkMode} = useContext(DarkModeContext);
    const location = useLocation();
    const showFooter = location.pathname != "/";
    const showLeftbar = ['/contact', '/blogs', '/blog/','/about'].some(path => location.pathname.startsWith(path));
    return (
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
            <div className="main-bg">
                <NavBar />
                <div style={{display: "flex"}}>
                    {!showLeftbar && <LeftBar />}
                    <div style={{flex: 6}}>
                        <Outlet />
                    </div>
                </div>
                {showFooter && <Footer/>}
            </div>
        </div>
      )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: (<Layout/>),
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/blogs',
                element: <Blogs/>
            },
            {
                path: '/blog/:id',
                element: <Blog/>
            },
            {
                path: '/about',
                element: <About/>
            }
        ]
    }
]);

const App = () => {
    return <RouterProvider router={router} />
}

export default App