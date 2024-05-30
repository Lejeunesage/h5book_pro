import React from 'react';
import AppRoutes from './AppRoutes';
import './index.css';



const App: React.FC = () => {
  return (
    <div className="bg-slate-100 text-primary h-screen">
      <AppRoutes />
    </div>
  );
};

export default App;
