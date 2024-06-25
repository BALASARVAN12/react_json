// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/students">Student List</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<StudentForm />} />
          <Route path="/students" element={<StudentList />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
