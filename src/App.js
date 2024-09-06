import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ServiceProvider from './ServiceProvider';
import Quote from './Quote';
import './App.css';

function App() {
  return (
    <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/service-provider" element={<ServiceProvider />} />
                <Route path="/quote" element={<Quote />} />
            </Routes>
        </Router>
    
  );
}

export default App;
