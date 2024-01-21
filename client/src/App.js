import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from './components/login/LoginComponent';
import RegisterComponent from './components/register/RegisterComponent';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="" element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent/>} />
          <Route path="/next-page" element={<RegisterComponent/>} />

        </Routes>
    </Router>
  );
};

export default App;
