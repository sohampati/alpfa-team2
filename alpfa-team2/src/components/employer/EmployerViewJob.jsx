import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

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
    contactInfo: {
      email: '',
      phoneNumber: ''
    },
    employerId: 'User1',
    embeddingVector: [0, 0, 0, 0],
    jobCreationDate: new Date().toISOString()
  });

  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email' || name === 'phoneNumber') {
      setJobDetails((prevDetails) => ({
        ...prevDetails,
        contactInfo: {
          ...prevDetails.contactInfo,
          [name]: value
        }
      }));
    } else {
      setJobDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit triggered.");
  
    const newJob = {
      employerId: "Employer9", // This could be dynamically set or stored in state
      contactInfo: [jobDetails.contactInfo.email, jobDetails.contactInfo.phoneNumber],
      jobTitle: jobDetails.jobTitle,
      company: jobDetails.company,
      jobDescription: jobDetails.description,
      requiredSkills: jobDetails.skills.split(',').map(skill => skill.trim()),
      responsibilities: jobDetails.responsibilities.split(',').map(resp => resp.trim()),
      location: jobDetails.jobLocation,
      salaryRange: jobDetails.payRange,
      keywords: jobDetails.keywords.split(',').map(keyword => keyword.trim()),
      postDate: new Date().toISOString().split('T')[0],
      expirationDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    };
  
    console.log("New job details:", newJob);
  
    try {
      console.log("Attempting to make POST request...");
      const response = await axios.post('https://0b80-34-148-130-160.ngrok-free.app/upload_job', newJob, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("API response:", response.data);
      setFeedbackMessage('Job successfully added!');
      
      // Reset form fields here if needed
    } catch (error) {
      console.error('Error adding job:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
      setFeedbackMessage('Error adding job. Please try again.');
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Create Job Posting</h2>
        {feedbackMessage && <p className="text-green-500">{feedbackMessage}</p>}
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

          <div className="mb-4">
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
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="description">
              Job Description
            </label>
            <textarea
              id="description"
              name="description"
              value={jobDetails.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="responsibilities">
              Responsibilities
            </label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              value={jobDetails.responsibilities}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Separate responsibilities with commas"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="keywords">
              Keywords
            </label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              value={jobDetails.keywords}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g., Accountant, Financial Reporting"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="skills">
              Required Skills
            </label>
            <input
              type="text"
              id="skills"
              name="skills"
              value={jobDetails.skills}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g., QuickBooks, Excel"
            />
          </div>

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
              placeholder="e.g., $60,000 - $80,000"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Contact Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={jobDetails.contactInfo.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phoneNumber">
              Contact Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={jobDetails.contactInfo.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployerJobPosting;
