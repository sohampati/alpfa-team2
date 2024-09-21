import React from 'react';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-100">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between h-screen bg-gradient-to-r from-blue-600 to-red-600 text-white p-8">
        <div className="flex flex-col items-start max-w-lg">
          <h1 className="text-4xl font-bold mb-4">
            {currentUser ? `Hi ${currentUser.email}, explore some job opportunities that are right for you!` : 'Meet Your AI-Powered Job Matchmaker'}
          </h1>
          {!currentUser && (
            <p className="text-xl mb-6">
              Tell us who you are and what you’re looking for — we’ll match you with top internships and entry-level jobs tailored for you.
            </p>
          )}
          {!currentUser ? (
            <button onClick={() => navigate('/auth/signup')} className="bg-gray-400 text-black px-6 py-2 rounded-full hover:bg-gray-500">
              Sign Up For Free
            </button>
          ) : (
            <button onClick={() => navigate('/jobs-internships')} className="mt-4 bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600">
              Explore Jobs
            </button>
          )}
        </div>

        {/* "Our Story" Section */}
        <section className="p-6 max-w-lg bg-white shadow-md rounded-lg mt-10 lg:mt-0 lg:ml-10">
          <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            <strong>ALPFA (Association of Latino Professionals For America)</strong> was the first national Latino professional association in the United States, established in Los Angeles in 1972. Throughout our 52-year history, we have experienced steady growth and demonstrated consistent value. ALPFA continues to build upon its proud legacy with a mission: To empower and develop Latino men and women as leaders of character for the nation, in every sector of the global economy.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-gray-700">
            ALPFA currently serves more than 116,000+ professional and student members across the country – a number we plan to grow aggressively to 300,000 within the next two years. In addition to networking and professional leadership development opportunities, our members have access to over 50,000 paid summer internships and experienced job opportunities through hundreds of Fortune 1000 corporate partners. We aspire to be the business partner of choice for companies seeking to hire and develop Latino talent.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;