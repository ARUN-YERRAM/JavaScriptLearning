import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [editRow, setEditRow] = useState(null); // Track which row is being edited
  const [updatedScores, setUpdatedScores] = useState({}); // Track updated scores for the row

  // Fetch all students' full information
  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/allstudents",
        {
          headers: {
            "ngrok-skip-browser-warning": true,
          },
        }
      );
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle delete button click
  const handleDeleteClick = async (rollNo) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the student with Roll Number: ${rollNo}?`
    );
    if (confirmDelete) {
      try {
        const response = await axios.delete(
          `http://localhost:4000/student/${rollNo}`,
          {
            headers: {
              "ngrok-skip-browser-warning": true,
            },
          }
        );
        alert(response.data.message);
        fetchStudents(); // Refresh table data after deletion
      } catch (error) {
        console.error("Error deleting student:", error);
        alert("Failed to delete student.");
      }
    }
  };

  // Handle update button click
  const handleUpdateClick = (rollNo, scores) => {
    setEditRow(rollNo); // Set the row to edit mode
    setUpdatedScores(scores); // Set initial scores for editing
  };

  // Handle input change for updated scores
  const handleScoreChange = (e) => {
    const { name, value } = e.target;
    setUpdatedScores((prevScores) => ({
      ...prevScores,
      [name]: parseInt(value, 10),
    }));
  };

  // Handle submit button click to save updated scores
  const handleSubmitClick = async (rollNo) => {
    try {
      const response = await axios.put(
        `https://04c1-2409-408c-1c8b-502c-947c-eff2-4e16-c4ec.ngrok-free.app/student/${rollNo}`,
        { scores: updatedScores },
        {
          headers: {
            "ngrok-skip-browser-warning": true,
          },
        }
      );
      alert(response.data.message);
      setEditRow(null); // Exit edit mode
      fetchStudents(); // Refresh table data after update
    } catch (error) {
      console.error("Error updating student:", error);
      alert("Failed to update student.");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Students List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Java</th>
            <th>CPP</th>
            <th>Python</th>
            <th>GenAI</th>
            <th>FSD</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.rollNo}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              {["Java", "CPP", "Python", "GenAI", "FSD"].map((subject) => (
                <td key={subject}>
                  {editRow === student.rollNo ? (
                    <input
                      type="number"
                      name={subject}
                      className="form-control"
                      value={updatedScores[subject]}
                      onChange={handleScoreChange}
                    />
                  ) : (
                    student.scores[subject]
                  )}
                </td>
              ))}
              <td>
                {editRow === student.rollNo ? (
                  <button
                    className="btn btn-success"
                    onClick={() => handleSubmitClick(student.rollNo)}
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    className="btn btn-primary me-2"
                    onClick={() =>
                      handleUpdateClick(student.rollNo, student.scores)
                    }
                  >
                    Update
                  </button>
                )}
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteClick(student.rollNo)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;
