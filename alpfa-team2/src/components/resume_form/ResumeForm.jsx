import './ResumeForm.css';
import React, { useState, useEffect } from 'react';

const ResumeForm = ({ parsedData }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    // Initialize form data with parsed data
    if (parsedData) {
      setFormData(parsedData);
    }
  }, [parsedData]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    if (name.startsWith('education-')) {
      const educationIndex = parseInt(name.split('-')[1]); // Extract the index
      const field = name.split('-')[2]; // Get the specific field name

      setFormData((prevData) => {
        const newEducation = [...(prevData.education || [])];
        newEducation[educationIndex] = {
          ...newEducation[educationIndex],
          [field]: value,
        };
        return { ...prevData, education: newEducation };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the final form submission (e.g., save data)
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Edit Resume Information</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Resume ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Resume ID</label>
            <input
              type="text"
              name="resumeId"
              value={formData.resumeId || ''}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          {/* Certifications */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Certifications</label>
            <input
              type="text"
              name="certifications"
              value={formData.certifications?.join(', ') || ''}
              onChange={(e) => handleChange(e)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Comma-separated certifications"
            />
          </div>

          {/* Education Entries */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Education</label>
            {formData.education && formData.education.length > 0 ? (
              formData.education.map((edu, index) => (
                <div key={index} className="mt-2">
                  <input
                    type="text"
                    name={`education-${index}-degree`}
                    value={edu.degree || ''}
                    onChange={(e) => handleChange(e, index)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    placeholder="Degree"
                  />
                  <input
                    type="text"
                    name={`education-${index}-institution`}
                    value={edu.institution || ''}
                    onChange={(e) => handleChange(e, index)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    placeholder="Institution"
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500">No education entries found.</p>
            )}
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Experience</label>
            <textarea
              name="experience"
              value={formData.experience?.map(exp => exp.jobTitle).join(', ') || ''}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Comma-separated job titles"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResumeForm;
