// src/components/StudentList.js
import React, { useState, useEffect } from 'react';
import './StudentList.css';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:5000/students');
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('There was an error fetching the student data!', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      <div className="table-container">
        <table className="student-table">
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Roll No</th>
              <th>Grade</th>
            </tr>
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.rollno}</td>
                  <td>{student.grade}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No students found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
