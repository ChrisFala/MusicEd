import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>MusicEd</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Classrooms">My Classes</Link>
                <Link to="/Exercises">Exercises</Link>
            </div>
        </nav>
    );
}

export default Navbar