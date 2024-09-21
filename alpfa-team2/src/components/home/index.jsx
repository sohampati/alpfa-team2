import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';

const Header = () => {
  const { userLoggedIn, currentUser, signOutUser } = useAuth();

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800/70 text-white py-4 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/home" className="text-xl font-bold">Home</Link>

        <nav>
          <ul className="flex space-x-4">
            {!userLoggedIn ? (
              <>
                <li>
                  <Link to="/login" className="hover:text-gray-400">Sign In</Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-gray-400">Register</Link>
                </li>
              </>
            ) : (
              <li>
                <button onClick={signOutUser} className="hover:text-gray-400">Sign Out</button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;