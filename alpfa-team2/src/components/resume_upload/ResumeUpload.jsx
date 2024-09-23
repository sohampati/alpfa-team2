import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ResumeUpload = () => {
  const navigate = useNavigate(); // Get the navigate function
  const [file, setFile] = useState(null);
  const [parsedData, setParsedData] = useState(null);
  const [rawApiResponse, setRawApiResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError(null);
  };

  const extractRelevantFields = (data) => {
    return {
      DocumentID: data.DocumentMetadata?.DocumentId || '',
      certifications: data.Value?.ResumeData?.Certifications || [],
      contactInfo: data.Value?.ResumeData?.ContactInformation || {},
      education: data.Value?.ResumeData?.Education || [],
      embeddingVector: [],
      experience: data.Value?.ResumeData?.EmploymentHistory || [],
      fileURL: '',
      languages: data.Value?.ResumeData?.Languages || [],
      parsedText: data.Value?.ResumeData?.ProfessionalSummary || '',
      preferredLocation: data.Value?.ResumeData?.PreferredLocations?.[0] || {},
      resumeId: data.DocumentMetadata?.DocumentId || '',
      skills: data.Value?.ResumeData?.Skills || [],
      userId: ''
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file');
      return;
    }

    const reader = new FileReader();
    reader.onload = async (event) => {
      const base64String = event.target.result.split(',')[1];
      const modifiedDate = new Date(file.lastModified).toISOString().split('T')[0];

      const data = {
        DocumentAsBase64String: base64String,
        DocumentLastModified: modifiedDate
      };

      try {
        const response = await fetch('https://api.us.textkernel.com/tx/v10/parser/resume', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Tx-AccountId': '34160386',
            'Tx-ServiceKey': 'lY8pMx7YjZqRI/CtFXoK/PZvNjZs5q+80/+hM6EU'
          },
          body: JSON.stringify(data)
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        setRawApiResponse(jsonResponse);
        const relevantData = extractRelevantFields(jsonResponse);
        console.log('Extracted relevant data:', relevantData);
        setParsedData(relevantData);
        navigate('/resume-form', { state: { parsedData: relevantData } }); // Navigate after parsing
      } catch (error) {
        console.error('Error during API call:', error);
        setError('An error occurred while processing the file. Please try again.');
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Upload Your Resume</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center">
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-600 hover:file:bg-blue-200"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
        {error && (
          <div className="mt-4 text-red-600">
            {error}
          </div>
        )}
        {parsedData && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Parsed Resume Data:</h3>
            <pre className="overflow-auto max-h-60 text-sm">{JSON.stringify(parsedData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeUpload;
