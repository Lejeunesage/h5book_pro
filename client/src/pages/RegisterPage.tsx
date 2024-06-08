import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth"; 
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
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
            <RegisterForm />
        </div>
    );
};

export default RegisterPage;
