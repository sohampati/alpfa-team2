import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">You're All Set!</h1>
      <p className="text-lg mb-6">An email has been sent to the employer indicating your interest in the position.</p>
      <Link to="/home">
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default ConfirmationPage;
