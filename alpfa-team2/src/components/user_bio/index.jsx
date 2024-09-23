import React, { useState } from 'react';

const UserBio = () => {
  const [contactInfo, setContactInfo] = useState({ email: '', phoneNumber: '', smsNotification: 'Yes' });
  const [location, setLocation] = useState('');
  const [resume, setResume] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [workAuthorization, setWorkAuthorization] = useState('');
  const [linkedinProfile, setLinkedinProfile] = useState('');

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (e.target.name === 'resume') {
      setResume(file);
    } else {
      setProfilePhoto(file);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Profile Photo */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">👤 Profile Photo</h2>
        <p>Please upload a profile photo</p>
        {profilePhoto ? (
          <img src={URL.createObjectURL(profilePhoto)} alt="Profile" className="w-16 h-16 rounded-full" />
        ) : (
          <p>No photo uploaded.</p>
        )}
        <input
          type="file"
          name="profilePhoto"
          accept=".jpg,.png,.jpeg"
          onChange={handleFileChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
        <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
          Save Changes
        </button>
      </div>

      {/* Resume Upload */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">🔒 Resume</h2>
        <p>Please upload a PDF of your resume</p>
        <input
          type="file"
          name="resume"
          accept=".pdf"
          onChange={handleFileChange}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
        <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
          Save Changes
        </button>
      </div>

        {/* LinkedIn Profile */}
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">🔗 LinkedIn Profile</h2>
            <input
            type="url"
            value={linkedinProfile}
            onChange={(e) => setLinkedinProfile(e.target.value)}
            placeholder="Enter LinkedIn URL"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />

            <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
            Save Changes
            </button>`
            
      </div>

      {/* Location */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">🗺️ Where are you from?</h2>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Type in a state name"
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
        />
        <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
          Save Changes
        </button>
      </div>

      {/* Additional Contact Info */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">📱 Additional Contact Info</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email (alternate)</label>
            <input
              type="email"
              name="email"
              value={contactInfo.email}
              onChange={handleContactChange}
              placeholder="Enter alternative email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
            <p className="text-xs text-gray-500">Please provide us with a non-university email.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={contactInfo.phoneNumber}
              onChange={handleContactChange}
              placeholder="Enter Phone Number"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <p>Would you like to be notified via SMS when you get new matches?</p>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="smsNotification"
                  value="Yes"
                  checked={contactInfo.smsNotification === 'Yes'}
                  onChange={handleContactChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="smsNotification"
                  value="No"
                  checked={contactInfo.smsNotification === 'No'}
                  onChange={handleContactChange}
                />
                No
              </label>
            </div>
          </div>
        </div>
        <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
          Save Changes
        </button>
      </div>

      {/* Work Authorization Status */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">🛂 Work Authorization Status</h2>
        <p>Are you authorized to work lawfully in the United States?</p>
        <div className="flex space-x-4">
          <label>
            <input
              type="radio"
              name="workAuthorization"
              value="Yes"
              checked={workAuthorization === 'Yes'}
              onChange={(e) => setWorkAuthorization(e.target.value)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="workAuthorization"
              value="No"
              checked={workAuthorization === 'No'}
              onChange={(e) => setWorkAuthorization(e.target.value)}
            />
            No
          </label>
        </div>
        <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UserBio;