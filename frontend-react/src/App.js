import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddStudentForm from "./components/AddStudentForm";
import StudentsTable from "./components/StudentsTable";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Student App
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Add Student
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/students">
                    View Students
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>
          <Routes>
            <Route path="/" element={<AddStudentForm />} />
            <Route path="/students" element={<StudentsTable />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
