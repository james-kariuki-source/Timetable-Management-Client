import React from "react"
import { useEffect, useState } from "react"
import "./dashboard.module.css"
import { AdminContent } from "../components"

function Dashboard() {
  const [name, setName] = useState("")

  useEffect(() => {
    ;(async () => {
      const response = await fetch("http://localhost:8080/admin/dashboard", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      })

      const content = await response.json()

      setName(content.name)
    })()
  })

  return (
      <AdminContent name={name}/>
  )
}

export default Dashboard
