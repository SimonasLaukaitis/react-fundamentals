import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 

        <nav className="navbar">
            <h1>Simo blogas</h1>
            <div className="links">
            
                <Link to="/">Home</Link>
                <Link to="/blogdetails">Blog details</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New blog</Link>
            </div>

        </nav>

     );
}
 
export default Navbar;