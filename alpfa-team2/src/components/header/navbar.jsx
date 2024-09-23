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
    <nav className="bg-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-white font-semibold text-lg">
          ALPFA Recruitment
        </Link>
        <div className="flex space-x-6">
          <Link to="/home" className="text-white hover:text-blue-300">
            Home
          </Link>
          <Link to="/job-postings" className="text-white hover:text-blue-300">
            Job Postings
          </Link>
          <Link to="/employer" className="text-white hover:text-blue-300">
            For Employers
          </Link>
          <Link to="/resume-upload" className="text-white hover:text-blue-300">
            Resume Upload
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {currentUser ? (
            <>
              <button onClick={handleSignOut} className="text-white hover:text-blue-300">
                Log Out
              </button>
              <Link to="/user-bio" className="text-white hover:text-blue-300">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                  <FaUserCircle className="text-3xl text-white" />
                </div>
              </Link>
            </>
          ) : (
            <>
              <button onClick={handleSignIn} className="text-white hover:text-blue-300">
                Log In
              </button>
              <button onClick={() => navigate('/auth/signup')} className="bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200">
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