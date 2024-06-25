// src/components/StudentForm.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './StudentForm.css';

const StudentForm = () => {
  const [student, setStudent] = useState({ name: '', rollno: '', grade: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });
      if (response.ok) {
        toast.success('Student added successfully!');
        setStudent({ name: '', rollno: '', grade: '' });
      } else {
        toast.error('Error adding student');
      }
    } catch (error) {
      console.error('There was an error adding the student!', error);
      toast.error('Error adding student');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="student-form">
        <h2>Student Data</h2>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={student.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Roll Number:</label>
          <input type="number" name="rollno" value={student.rollno} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Grade:</label>
          <input type="number" name="grade" value={student.grade} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-button">Save</button>
      </form>
    </div>
  );
};

export default StudentForm;
