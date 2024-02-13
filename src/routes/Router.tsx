import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../pages/Home'


const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;