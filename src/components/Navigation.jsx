import { Link } from "react-router-dom";
// import IMAGES from "../../public/Images";
import "../styles/navigation.css";
import { FaLinkedin } from "react-icons/fa";
import logo from "../../public/Logo.png";

function Navigation() {

    return (
        <div id="navigation">
            <div id="logo">
                <img src={logo} alt="logo" id="logo-image"/>
                <h2 id="logo-text">Charles Social Studios</h2>
            </div>


            <div id="navigation-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
            </div>

            <div id="social-media">
                <a href="https://www.linkedin.com/in/julietcharles/"><FaLinkedin id="linkedin-icon"/></a>
                <Link id="services-button" to="/services">Services</Link>
            </div>
        </div>
    )
}

export default Navigation;
