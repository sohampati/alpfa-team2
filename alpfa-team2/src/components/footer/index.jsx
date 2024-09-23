import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black p-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-semibold text-lg">
          ALPFA Recruitment
        </div>
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
      </div>
    </footer>
  );
};

export default Footer;