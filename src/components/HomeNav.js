import React from "react"
import { Link } from "react-router-dom"

function HomeNav() {
  return (
    <div className="nav-menu">
      <div className="card">
        <Link to="admin-login">
          <i className="fa-solid fa-gears"></i>
          <h3>Admin</h3>
        </Link>
      </div>

      <div className="card">
        <Link to="student-login">
          <i className="fa-solid fa-graduation-cap"></i>
          <h3>Student</h3>
        </Link>
      </div>

      <div className="card">
        <Link to="lecturer-login">
          <i className="fa-solid fa-chalkboard-user"></i>
          <h3>Lecturer</h3>
        </Link>
      </div>
    </div>
  )
}

export default HomeNav
