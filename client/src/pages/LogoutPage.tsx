import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        toast.success("You have been logged out.");
        navigate("/login");
      } catch (error) {
        console.error("Error during logout:", error);
       
      }
    };

    logout();
  }, [navigate]);

  return null;
};

export default Logout;
