import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./components/home";
import EmployerHomePage from './components/employer/EmployerHomePage';
import Navbar from "./components/header/navbar"; 
import { AuthProvider } from "./contexts/authContext";
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
