import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/home";
import EmployerHomePage from './components/employer/EmployerHomePage';
import Navbar from "./components/header/navbar"; 
import JobPostings from "./components/job_posting/JobPostings"; 
import ResumeUpload from "./components/resume_upload/ResumeUpload"; // Import ResumeUpload component
import { AuthProvider } from "./contexts/authContext";
import ResumeForm from "./components/resume_form/ResumeForm";
import { useRoutes } from "react-router-dom";

import './index.css';

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/employer",
      element: <EmployerHomePage />,
    },
    {
      path: "/job-postings",
      element: <JobPostings />,
    },
    {
      path: "/resume-upload",  // Add the new route for Resume Upload here
      element: <ResumeUpload />,
    },
    {
      path: "/resume-form", // Add the new route for Resume Form here
      element: <ResumeForm />,
    },
  ];

  let routesElement = useRoutes(routesArray);

  return (
    <AuthProvider>
      <Navbar />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
