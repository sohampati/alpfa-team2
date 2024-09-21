import React from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { currentUser, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    // Stay on the home page
  };

  const handleSignIn = () => {
    navigate('/auth/signin');
  };

  return (
    <nav className="bg-[#40404080] p-4"> {/* 50% transparent */}
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white">ALPFA</h1>
        <div>
          {currentUser ? (
            <button onClick={handleSignOut} className="text-white">
              Sign Out
            </button>
          ) : (
            <button onClick={handleSignIn} className="text-white">
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
