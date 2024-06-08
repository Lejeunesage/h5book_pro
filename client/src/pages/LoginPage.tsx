import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth"; 
import LoginForm from "../components/auth/LoginForm";

const LoginPage:React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/"); 
    }
  }, [navigate]);

  if (isAuthenticated()) {
    return <Navigate to="/" />;
  }

  return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <LoginForm />
        </div>
    );
};

export default LoginPage;
