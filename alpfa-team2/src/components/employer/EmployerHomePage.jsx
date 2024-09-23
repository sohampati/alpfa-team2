import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmployerHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-100">
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 to-red-200 p-8">
        <h1 className="text-4xl font-bold mb-4 text-black text-center">Post Your Open Roles on ALPFA Recruitment</h1>
        <p className="text-xl mb-8 text-center max-w-lg text-black">
          Easily target highly qualified Latino candidates.
        </p>
        <div className="flex space-x-4"> {/* Button container */}
          <button 
            onClick={() => navigate('/employer-form')} 
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 shadow-md"
          >
            Create Job Posts
          </button>
          <button 
            onClick={() => navigate('/employer-view')} 
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 shadow-md"
          >
            Manage Job Postings
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployerHomePage;