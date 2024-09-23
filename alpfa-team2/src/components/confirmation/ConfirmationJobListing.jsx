import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationJobListing = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Job Listing Submitted!</h1>
      <p className="text-lg mb-6">
        Your application has been sent to the ALPFA team for review.
      </p>
      <p className="text-md mb-8 text-gray-700">
        Check your email for updates, or go to the job listing section!
      </p>
      <Link to="/employer">
        <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition duration-300">
          Take Me Back
        </button>
      </Link>
    </div>
  );
};

export default ConfirmationJobListing