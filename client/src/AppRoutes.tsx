import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import SocialNetworkPage from "./pages/SocialNetworkPage";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<SocialNetworkPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
