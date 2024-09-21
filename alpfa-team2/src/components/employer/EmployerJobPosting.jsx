import React, { useState } from 'react';

const EmployerJobPosting = () => {
  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    company: '',
    workplaceType: 'On-site',
    jobLocation: '',
    jobType: 'Full-time',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Details:', jobDetails);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Create Job Posting</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="jobTitle">
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={jobDetails.jobTitle}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="company">
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={jobDetails.company}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="workplaceType">
                Workplace Type
              </label>
              <select
                id="workplaceType"
                name="workplaceType"
                value={jobDetails.workplaceType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="On-site">On-site</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="jobLocation">
                Job Location
              </label>
              <input
                type="text"
                id="jobLocation"
                name="jobLocation"
                value={jobDetails.jobLocation}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="jobType">
              Job Type
            </label>
            <select
              id="jobType"
              name="jobType"
              value={jobDetails.jobType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={jobDetails.description}
              onChange={handleChange}
              rows="6"
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployerJobPosting;