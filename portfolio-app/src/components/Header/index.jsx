import "./style.css"
import "../../global.css"
import linkedin from "../../assets/linkedin-logo.png"
import github from "../../assets/github-logo.png"
import instagram from "../../assets/instagram-logo.png"
import { NavLink } from "react-router-dom"

const Header = () => {
    
    return (
        <header>
            <nav className="nav-header">
                <ul>
                <li>
                    <NavLink to={"/"} className="nav-option">azvdev</NavLink>
                </li>
                <li>
                    <NavLink to={"/experience"} className="nav-option">experience</NavLink>
                </li>
                <li>
                    <NavLink to={"/education"} className="nav-option">education</NavLink>
                </li>
                <li>
                    <NavLink to={"projects"} className="nav-option">projects</NavLink>
                </li>
                <span className="logo-container">
                    <a href="https://www.linkedin.com/in/tiagoazevedodev/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Linkedin"/></a>
                    <a href="https://github.com/tiagoazevedodev" target="_blank" rel="noreferrer"><img src={github} alt="GitHub"/></a>
                    <a href="https://www.instagram.com/tiagoazevedev/" target="_blank" rel="noreferrer"><img src={instagram} alt="" /></a>
                </span>
                </ul>
            </nav>
        </header>
    )
}

export default Header