import React, { useState, useEffect } from 'react';
import { db } from '/Users/sohamshetty/Desktop/alpfa-team2/alpfa-team2/src/firebase/firebase.js';
import { addDoc, collection, getDocs } from 'firebase/firestore';

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

    const newJob = {
      ...jobDetails,
      jobCreationDate: new Date().toISOString()
    };

    try {
      await addDoc(collection(db, 'Jobs'), newJob);
      setFeedbackMessage('Job successfully added!');

      // Optionally reset form
      setJobDetails({
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
        contactInfo: { email: '', phoneNumber: '' },
        employerId: 'User1',
        embeddingVector: [0, 0, 0, 0],
        jobCreationDate: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error adding job to Firestore:', error);
      setFeedbackMessage('Error adding job. Please try again.');
    }
  };

  // Function to fetch jobs from Firestore
  const fetchJobs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Jobs'));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
      });
    } catch (error) {
      console.error('Error fetching documents:', error.message);
    }
  };

  // Fetch jobs when the component mounts
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Create Job Posting</h2>
        {feedbackMessage && <p className="text-green-500">{feedbackMessage}</p>}
        <form onSubmit={handleSubmit}>
          {/* Form Fields */}
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

          {/* Additional form fields go here... */}

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmployerJobPosting;
