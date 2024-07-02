import { Link, NavLink } from "react-router-dom";

const NavBar = ()=>{
 return (
    <nav className="navbar">
        <NavLink to="/">
            <h1>Task</h1>
        </NavLink>
        <div className="links">
            <NavLink to="register">Register</NavLink>
            <NavLink to="/" >Login</NavLink>
        </div>
    </nav>
 )   
}



export default NavBar;