import React from 'react';
import './EmployerViewJob.css';

const placeholderImage = "https://images.freeimages.com/fic/images/icons/2770/ios_7_icons/512/user_male.png"; // Placeholder image URL

const jobPostings = [
  {
    title: 'Software Engineer',
    description: 'Develop and maintain web applications using React and Node.js.',
    location: 'San Francisco, CA',
    candidates: {
      interested: [
        { name: 'Alice Johnson', matchScore: 95, profilePhoto: placeholderImage },
        { name: 'Bob Smith', matchScore: 90, profilePhoto: placeholderImage }
      ],
      potential: [
        { name: 'Charlie Nguyen', matchScore: 85, profilePhoto: placeholderImage },
        { name: 'Diana Rose', matchScore: 80, profilePhoto: placeholderImage },
        { name: 'Ethan Brown', matchScore: 78, profilePhoto: placeholderImage }
      ]
    }
  },
  {
    title: 'Data Scientist',
    description: 'Analyze data and build predictive models to support decision-making.',
    location: 'New York, NY',
    candidates: {
      interested: [
        { name: 'Lily Cooper', matchScore: 93, profilePhoto: placeholderImage },
        { name: 'Jake Thompson', matchScore: 89, profilePhoto: placeholderImage }
      ],
      potential: [
        { name: 'Sophia Davis', matchScore: 87, profilePhoto: placeholderImage },
        { name: 'Mia Gonzalez', matchScore: 83, profilePhoto: placeholderImage },
        { name: 'Lucas Lee', matchScore: 81, profilePhoto: placeholderImage }
      ]
    }
  },
  {
    title: 'Marketing Manager',
    description: 'Lead marketing strategies and campaigns for a fast-growing company.',
    location: 'Chicago, IL',
    candidates: {
      interested: [
        { name: 'Emma Clark', matchScore: 94, profilePhoto: placeholderImage },
        { name: 'Henry Wright', matchScore: 88, profilePhoto: placeholderImage }
      ],
      potential: [
        { name: 'Olivia Turner', matchScore: 87, profilePhoto: placeholderImage },
        { name: 'Noah Harris', matchScore: 85, profilePhoto: placeholderImage },
        { name: 'Liam Martinez', matchScore: 83, profilePhoto: placeholderImage }
      ]
    }
  }
];

const CandidateCard = ({ name, matchScore, profilePhoto }) => {
  return (
    <div className="candidate-card">
      <div className="candidate-info">
        <img src={profilePhoto} alt={`${name}'s profile`} className="profile-photo" />
        <div className="candidate-details">
          <h4 className="candidate-name">{name}</h4>
          <p className="match-score">Match Score: {matchScore}%</p>
        </div>
      </div>
    </div>
  );
};

const EmployerViewJob = () => {
  return (
    <div className="job-postings">
      {jobPostings.map((job, index) => (
        <div key={index} className="job-card">
          <h2 className="job-title">{job.title}</h2>
          <p className="job-location">Location: {job.location}</p>
          <p className="job-description">{job.description}</p>
          <div className="candidates-columns">
            <div className="interested-column">
              <h3>Interested Candidates</h3>
              <div className="candidate-cards">
                {job.candidates.interested.map((candidate, idx) => (
                  <CandidateCard
                    key={idx}
                    name={candidate.name}
                    matchScore={candidate.matchScore}
                    profilePhoto={candidate.profilePhoto}
                  />
                ))}
              </div>
            </div>
            <div className="potential-column">
              <h3>Potential Matches</h3>
              <div className="candidate-cards">
                {job.candidates.potential.map((candidate, idx) => (
                  <CandidateCard
                    key={idx}
                    name={candidate.name}
                    matchScore={candidate.matchScore}
                    profilePhoto={candidate.profilePhoto}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployerViewJob;
