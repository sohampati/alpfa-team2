import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header"; // You can keep this or replace it with Navbar
import Home from "./components/home";
import Navbar from "./components/navbar"; // Import the Navbar component
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
  ];

  let routesElement = useRoutes(routesArray);

  return (
    <AuthProvider>
      <Navbar /> {/* Include Navbar here */}
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
