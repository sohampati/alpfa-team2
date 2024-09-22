import React, { useState } from 'react';
import { db } from 'C:/Users/soham/OneDrive/Desktop/MShack/alpfa-team2/alpfa-team2/src/firebase/firebase.js'; // Adjust the path to your firebase config
import { collection, addDoc } from 'firebase/firestore';

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
    e.preventDefault(); // Prevent the default form submission behavior

    const newJob = {
      ...jobDetails,
      jobCreationDate: new Date().toISOString(),
    };

    try {
      // Add the new job posting to the "Jobs" collection in Firestore
      await addDoc(collection(db, 'Jobs'), newJob);
      setFeedbackMessage('Job successfully added!');

      // Optionally reset the form after submission
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
        jobCreationDate: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Error adding job to Firestore:', error);
      setFeedbackMessage('Error adding job. Please try again.');
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-3xl bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Create Job Posting</h2>
        {feedbackMessage && <p className="text-green-500">{feedbackMessage}</p>}
        {/* Form with an onSubmit handler */}
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

          {/* Add other input fields as necessary... */}

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
const addTestDocument = async () => {
  try {
    const docRef = await addDoc(collection(db, "Jobs"), {
      name: "Test User",
      email: "test@example.com"
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};
addTestDocument();

export default EmployerJobPosting;
