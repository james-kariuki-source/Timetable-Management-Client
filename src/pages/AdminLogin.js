import React from "react"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import "./forms.module.css"

function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)

  const submit = async (e) => {
    e.preventDefault()

    await fetch("http://localhost:8080/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    })

    setRedirect(true)
  }

  if (redirect) {
    return <Navigate to="/admin-dashboard" />
  }

  return (
    <form onSubmit={submit}>
      <i className="fa-solid fa-gears"></i>
      <h1>ADMIN LOGIN</h1>
      <input
        type="email"
        placeholder="Enter your email"
        autoFocus
        autoComplete="off"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        autoComplete="off"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="submit" value="LOGIN" />
    </form>
  )
}

export default AdminLogin
