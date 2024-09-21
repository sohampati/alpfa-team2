import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">My Website</h1>
        <div>
          <Link to="/home" className="text-white mx-2 hover:underline">
            Home
          </Link>
          <Link to="/login" className="text-white mx-2 hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
