// components/Navbar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

function Navbar() {
  const { userLoggedIn, signOut, currentUser } = useAuth();

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">My Website</h1>
        <div className="flex items-center">
          <Link to="/home" className="text-white mx-2 hover:underline">
            Home
          </Link>
          {userLoggedIn ? (
            <>
              <span className="text-white mx-2">
                Hello, {currentUser?.email}
              </span>
              <button onClick={signOut} className="text-white mx-2">
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/login" className="text-white mx-2 hover:underline">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
