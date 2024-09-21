import React from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate, Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
  };

  const handleSignIn = () => {
    navigate('/auth/signin');
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-gray-600 font-semibold text-lg">
          ALPFA Recruitment
        </Link>
        <div className="flex space-x-6">
          <Link to="/jobs-internships" className="text-gray-800 hover:text-blue-600">
            Jobs & Internships
          </Link>
          <Link to="/employer" className="text-gray-800 hover:text-blue-600">
            For Employers
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {currentUser ? (
            <>
              <button onClick={handleSignOut} className="text-gray-800 hover:text-blue-600">
                Log Out
              </button>
              <Link to="/bio" className="text-black">
                <FaUserCircle className="text-2xl" />
              </Link>
            </>
          ) : (
            <>
              <button onClick={handleSignIn} className="text-gray-800 hover:text-blue-600">
                Log In
              </button>
              <button onClick={() => navigate('/auth/signup')} className="bg-[#404040] text-white px-4 py-2 rounded-full shadow-md hover:bg-gray-600">
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;