import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConfirmationPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">You're All Set!</h1>
      <p className="text-lg mb-6">Your resume has been successfully submitted. We'll be in touch soon.</p>
      <button
        onClick={goToHome}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ConfirmationPage;
