import React, { useState } from "react";
import axios from "axios";

const AddStudentForm = () => {
  const [student, setStudent] = useState({
    name: "",
    rollNo: "",
    scores: {
      Java: 0,
      CPP: 0,
      Python: 0,
      GenAI: 0,
      FSD: 0,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in student.scores) {
      setStudent({
        ...student,
        scores: {
          ...student.scores,
          [name]: parseInt(value, 10),
        },
      });
    } else {
      setStudent({ ...student, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/student", student);
      alert(response.data.message);
      setStudent({
        name: "",
        rollNo: "",
        scores: {
          Java: 0,
          CPP: 0,
          Python: 0,
          GenAI: 0,
          FSD: 0,
        },
      });
    } catch (error) {
      console.error("Error adding student:", error);
      alert("Failed to add student.");
    }
  };

  return (
    <div>
      <h3>Add Student</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Roll Number</label>
          <input
            type="text"
            name="rollNo"
            className="form-control"
            value={student.rollNo}
            onChange={handleChange}
            required
          />
        </div>
        {["Java", "CPP", "Python", "GenAI", "FSD"].map((subject) => (
          <div className="mb-3" key={subject}>
            <label>{subject} Score</label>
            <input
              type="number"
              name={subject}
              className="form-control"
              value={student.scores[subject]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudentForm;
