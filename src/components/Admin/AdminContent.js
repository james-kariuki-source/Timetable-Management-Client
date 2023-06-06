import React, { useState } from "react"
import {
  SupervisorAccountSharp,
  Dashboard,
  School,
  LocationCity,
  CalendarMonth,
  AdminPanelSettings,
  Logout,
} from "@mui/icons-material/"
import "./admin.css"
import Admins from "./Admins"
import Lecturers from "./Lecturers"
import Navbar from "./Navbar"
import Premises from "./Premises"
import Students from "./Students"
import Timetable from "./Timetable"

function AdminContent(props) {
  const [currentTab, setCurrentTab] = useState()

  const tabs = [
    {
      id: 1,
      tabTitle: "Dashboard",
      tabIcon: <Dashboard />,
      title: <h1>Dashboard</h1>,
      content: "first",
    },
    {
      id: 2,
      tabTitle: "Students",
      tabIcon: <School />,
      title: <h1>Students</h1>,
      content: <Students />,
    },
    {
      id: 3,
      tabTitle: "Lecturer",
      tabIcon: <SupervisorAccountSharp />,
      title: <h1>Lecturers</h1>,
      content: <Lecturers />,
    },
    {
      id: 4,
      tabTitle: "Premises",
      tabIcon: <LocationCity />,
      title: <h1>Premises</h1>,
      content: <Premises />,
    },
    {
      id: 5,
      tabTitle: "Timetable",
      tabIcon: <CalendarMonth />,
      title: <h1>Timetable</h1>,
      content: <Timetable />,
    },
    {
      id: 6,
      tabTitle: "Admins",
      tabIcon: <AdminPanelSettings />,
      title: <h1>System Administrators</h1>,
      content: <Admins />,
    },
    {
      id: 7,
      tabTitle: "Logout",
      tabIcon: <Logout />,
      title: "Logout",
      content: "first",
    },
  ]

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id)
  }

  return (
    <div className="admin-content">
      <div className="tabs">
        {tabs.map((tab, i) => (
          <button
            key={i}
            id={tab.id}
            disabled={currentTab === `${tab.id}`}
            onClick={handleTabClick}
          >
            {tab.tabIcon}
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content">
        <Navbar name={props.name} />
        {tabs.map((tab, i) => (
          <div key={i}>
            {currentTab === `${tab.id}` && (
              <div>
                <p>{tab.title}</p>
                <p>{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminContent
