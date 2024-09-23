import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/home";
import EmployerHomePage from './components/employer/EmployerHomePage';
import EmployerCreateJob from "./components/employer/EmployerJobPosting";
import EmployerViewJob from "./components/employer/EmployerViewJob";
import Navbar from "./components/header/navbar"; 
import JobPostings from "./components/job_posting/JobPostings"; 
import ResumeUpload from "./components/resume_upload/ResumeUpload"; 
import { AuthProvider } from "./contexts/authContext";
import ResumeForm from "./components/resume_form/ResumeForm";
import UserBio from "./components/user_bio/index";
import Footer from './components/footer/index';
import ConfirmationResumePage from "./components/confirmation/ConfirmationResumePage"
import ConfirmationEmailPage from "./components/confirmation/ConfirmationEmailPage"
import ConfirmationJobListing from "./components/confirmation/ConfirmationJobListing";
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
      path: "/employer-form", 
      element: <EmployerCreateJob />,
    }, 
    {
      path: "/employer-view", 
      element: <EmployerViewJob />,
    },
    {
      path: "/job-postings",
      element: <JobPostings />,
    },
    {
      path: "/resume-upload",  
      element: <ResumeUpload />,
    },
    {
      path: "/resume-form", 
      element: <ResumeForm />,
    },
    {
      path: "/user-bio", 
      element: <UserBio />,
    },
    {
      path: "/confirmation-resume", 
      element: <ConfirmationResumePage />,
    },
    {
      path: "/confirmation-email", 
      element: <ConfirmationEmailPage />,
    },
    {
      path: "/confirmation-job-listing", 
      element: <ConfirmationJobListing />,
    },
  ];

  let routesElement = useRoutes(routesArray);

  return (
    <AuthProvider>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col">
        <main className="flex-grow">{routesElement}</main>
        <Footer /> {/* Ensure footer stays at the bottom */}
      </div>
    </AuthProvider>
  );
}

export default App;
