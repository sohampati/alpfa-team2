import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployerHomePage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="w-full bg-gray-100">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-red-600 text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Post Your Open Roles on ALPFA Recruitment</h1>
        <p className="text-xl mb-6 text-center max-w-lg">
          Easily target highly qualified Latino candidates.
        </p>
        <button onClick={() => navigate('/employer-form')} className="mt-4 bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600">
          Create Job Posts
        </button>
      </div>
    </div>
  );
};

export default EmployerHomePage;
