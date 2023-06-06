import React from "react"
import "./forms.module.css"

function AdminLogin() {
  return (
    <form>
      <i className="fa-solid fa-chalkboard-user"></i>
      <h1>LECTURER LOGIN</h1>
      <input type="email" placeholder="Enter your email" autoFocus autoComplete="off" />
      <input type="password" placeholder="password" autoComplete="off" />
      <input type="submit" value="LOGIN" />
    </form>
  )
}

export default AdminLogin
