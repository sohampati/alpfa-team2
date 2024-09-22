import React, { useState } from 'react';

const EmployerJobPosting = () => {
  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    company: '',
    workplaceType: 'On-site',
    jobLocation: '',
    jobType: 'Full-time',
    description: '',
    responsibilities: '',
    keywords: '',
    skills: '',
    payRange: '',
    email: '',
    phoneNumber: '',
    location: '', // New field for location
    currentDate: '', // New field for current date
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Details:', jobDetails);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-20 mt-100">
      <div className="w-full max-w-3xl bg-white p-8 shadow-md rounded-lg mt-20">
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

          {/* New Responsibilities Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="responsibilities">
              Responsibilities
            </label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              value={jobDetails.responsibilities}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>

          {/* New Keywords Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="keywords">
              Keywords (comma-separated)
            </label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              value={jobDetails.keywords}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* New Skills Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="skills">
              Required Skills (comma-separated)
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={jobDetails.skills}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* New Pay Range Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="payRange">
              Pay Range
            </label>
            <input
              type="text"
              id="payRange"
              name="payRange"
              value={jobDetails.payRange}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g., $50,000 - $70,000"
            />
          </div>

          {/* New Location Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={jobDetails.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          {/* New Current Date Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="currentDate">
              Posting Date
            </label>
            <input
              type="date"
              id="currentDate"
              name="currentDate"
              value={jobDetails.currentDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={jobDetails.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={jobDetails.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
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
