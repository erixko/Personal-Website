import React from 'react';
import './Navbar.css';
import { Link , useLocation} from 'react-router-dom';

const Navbar = () => {

    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case '/':
                return 'Erixko.sk';
            case '/about':
                return 'About me';
            case '/projects':
                return 'Projects';
            case '/contact':
                return 'Contact';
            default:
                return '404 Not Found :(';
        }
    };

    return (
        <nav className="navbar">
            <h1>{getTitle()}</h1>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </ul>
        </nav>
    );
};

export default Navbar;