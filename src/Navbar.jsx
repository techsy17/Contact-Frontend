import { Link } from "react-router-dom";
const Navbar = ()=>{

    return(
        <nav className="navbar">
            <h1>Let's Connect</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/add">Add Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;