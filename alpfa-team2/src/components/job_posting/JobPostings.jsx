import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const jobRoles = [
  { id: 1, title: "Software Engineer", company: "Google", location: "Mountain View, CA", description: "Develop and maintain software solutions." },
  { id: 2, title: "Data Scientist", company: "Amazon", location: "Seattle, WA", description: "Analyze and interpret complex data to assist decision-making." },
  { id: 3, title: "Product Manager", company: "Facebook", location: "Menlo Park, CA", description: "Lead the development of products from conception to launch." },
];

function JobCard({ job }) {
  const navigate = useNavigate();

  const handleInterestClick = () => {
    // You can also handle any logic here, like sending data or updating state
    navigate('/confirmation-email');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-xs w-full">
      <h3 className="text-xl font-semibold">{job.title}</h3>
      <p className="text-gray-700"><strong>Company:</strong> {job.company}</p>
      <p className="text-gray-700"><strong>Location:</strong> {job.location}</p>
      <p className="text-gray-600">{job.description}</p>
      <button
        onClick={handleInterestClick}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
      >
        I'm Interested
      </button>
    </div>
  );
}

function JobPostings() {
  return (
    <div className="w-full min-h-screen bg-gray-200 p-8">
      <header className="flex items-center justify-between bg-blue-500 text-white p-6 rounded-lg shadow-md">
        <Link to="/">
          <img src="/alpfa-logo.png" alt="ALPFA Logo" className="h-12" />
        </Link>
        <h1 className="text-2xl font-bold">ALPFA Job Matching</h1>
      </header>

      <main className="mt-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Job Opportunities</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {jobRoles.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default JobPostings;
