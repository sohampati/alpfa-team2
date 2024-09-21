import React from 'react';
import { useAuth } from '../../contexts/authContext';

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div className="w-full">
      {/* Hero Section with Responsive YouTube Video */}
      <div className="flex justify-center items-center w-full h-screen">
        <div className="relative w-1/2" style={{ paddingBottom: '48.125%', position: 'relative', height: 0 }}>
          <iframe
            src="https://www.youtube.com/embed/gxPMkQV39tU?autoplay=1&mute=1"
            title="ALPFA Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* "Our Story" Section */}
      <section className="p-3 max-w-4xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
        <p className="text-lg leading-relaxed">
          <strong>ALPFA (Association of Latino Professionals For America)</strong> was the first national Latino professional association in the United States, established in Los Angeles in 1972. Throughout our 52-year history we have experienced steady growth and demonstrated consistent value. ALPFA continues to build upon its proud legacy with a mission: To empower and develop Latino men and women as leaders of character for the nation, in every sector of the global economy.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          ALPFA currently serves more than 116,000+ professional and student members across the country – a number we plan to grow aggressively to 300,000 within the next two years. In addition to networking and professional leadership development opportunities, our members have access to over 50,000 paid summer internships and experienced job opportunities through hundreds of Fortune 1000 corporate partners. We aspire to be the business partner of choice for companies seeking to hire and develop Latino talent.
        </p>
      </section>
    </div>
  );
};

export default Home;
