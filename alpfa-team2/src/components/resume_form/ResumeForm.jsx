import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ResumeForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    education: [],
    gpa: '',
    experiences: []
  });

  useEffect(() => {
    const parsedData = location.state?.parsedData;
    console.log('Received parsed data:', parsedData);
    if (parsedData) {
      setResumeData(parsedData)
      setFormData({
        name: `${parsedData.contactInfo.CandidateName?.GivenName || ''} ${parsedData.contactInfo.CandidateName?.FamilyName || ''}`.trim(),
        email: parsedData.contactInfo.EmailAddresses?.[0] || '',
        phone: parsedData.contactInfo.Telephones?.[0]?.Raw || '',
        linkedin: parsedData.contactInfo.WebAddresses?.find(web => web.Type === "LinkedIn")?.Address || '',
        education: parsedData.education?.EducationDetails?.map(edu => ({
          degree: edu.Degree?.Name?.Raw || '',
          institution: edu.SchoolName?.Raw || '',
          startDate: edu.StartDate?.Date || '',
          endDate: edu.EndDate?.Date || ''
        })) || [],
        gpa: parsedData.education?.EducationDetails?.[0]?.GPA?.Score || '',
        experiences: parsedData.experience?.Positions?.map(exp => ({
          title: exp.JobTitle?.Raw || '',
          company: exp.Employer?.Name?.Raw || '',
          startDate: exp.StartDate?.Date || '',
          endDate: exp.EndDate?.Date || '',
          description: exp.Description || ''
        })) || []
      });
    }
  }, [location.state]);

  const handleChange = (e, index, field) => {
    const { name, value } = e.target;
    setFormData(prevData => {
      if (field === 'education') {
        const newEducation = [...prevData.education];
        newEducation[index] = { ...newEducation[index], [name]: value };
        return { ...prevData, education: newEducation };
      } else if (field === 'experiences') {
        const newExperiences = [...prevData.experiences];
        newExperiences[index] = { ...newExperiences[index], [name]: value };
        return { ...prevData, experiences: newExperiences };
      } else {
        return { ...prevData, [name]: value };
      }
    });
  };

  const handleDeleteExperience = (index) => {
    setFormData(prevData => ({
      ...prevData,
      experiences: prevData.experiences.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Redirect to confirmation page
    navigate('/confirmation-resume');
  
    // try {
    //   const response = await fetch('https://38f8-35-202-218-83.ngrok-free.app/upload_resume', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(resumeData), // Send the formData as a JSON payload
    //   });
  
    //   const result = await response.json();
    //   if (response.ok) {
    //     console.log('Resume uploaded successfully:', result);
    //     // Handle success response (e.g., show success message to the user)
    //   } else {
    //     console.error('Error uploading resume:', result.error);
    //     // Handle error response (e.g., show error message to the user)
    //   }
    // } catch (error) {
    //   console.error('Network error:', error);
    //   // Handle network error
    // }
  };
  

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-6">Resume Information</h2>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-bold">Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => handleChange(e)}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-bold">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1 font-bold">Phone</label>
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => handleChange(e)}
            required
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="linkedin" className="block mb-1 font-bold">LinkedIn</label>
          <input
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={(e) => handleChange(e)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label htmlFor="gpa" className="block mb-1 font-bold">GPA</label>
          <input
            id="gpa"
            name="gpa"
            value={formData.gpa}
            onChange={(e) => handleChange(e)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-bold">Education</label>
          {formData.education.map((edu, index) => (
            <div key={index} className="space-y-2 mb-4">
              <input
                name="degree"
                value={edu.degree}
                onChange={(e) => handleChange(e, index, 'education')}
                placeholder="Degree"
                className="w-full p-2 border rounded"
              />
              <input
                name="institution"
                value={edu.institution}
                onChange={(e) => handleChange(e, index, 'education')}
                placeholder="Institution"
                className="w-full p-2 border rounded"
              />
              <div className="flex gap-2">
                <input
                  name="startDate"
                  type="date"
                  value={edu.startDate}
                  onChange={(e) => handleChange(e, index, 'education')}
                  className="flex-1 p-2 border rounded"
                />
                <input
                  name="endDate"
                  type="date"
                  value={edu.endDate}
                  onChange={(e) => handleChange(e, index, 'education')}
                  className="flex-1 p-2 border rounded"
                />
              </div>
            </div>
          ))}
        </div>

        <div>
          <label className="block mb-1 font-bold">Experiences</label>
          {formData.experiences.map((exp, index) => (
            <div key={index} className="space-y-2 mb-4 p-4 border rounded">
              <input
                name="title"
                value={exp.title}
                onChange={(e) => handleChange(e, index, 'experiences')}
                placeholder="Job Title"
                className="w-full p-2 border rounded"
              />
              <input
                name="company"
                value={exp.company}
                onChange={(e) => handleChange(e, index, 'experiences')}
                placeholder="Company"
                className="w-full p-2 border rounded"
              />
              <div className="flex gap-2">
                <input
                  name="startDate"
                  type="date"
                  value={exp.startDate}
                  onChange={(e) => handleChange(e, index, 'experiences')}
                  className="flex-1 p-2 border rounded"
                />
                <input
                  name="endDate"
                  type="date"
                  value={exp.endDate}
                  onChange={(e) => handleChange(e, index, 'experiences')}
                  className="flex-1 p-2 border rounded"
                />
              </div>
              <textarea
                name="description"
                value={exp.description}
                onChange={(e) => handleChange(e, index, 'experiences')}
                placeholder="Job Description"
                className="w-full p-2 border rounded h-24"
              />
              <button
                type="button"
                onClick={() => handleDeleteExperience(index)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete Experience
              </button>
            </div>
          ))}
        </div>
      </div>

      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
    </form>
  );
};

export default ResumeForm;