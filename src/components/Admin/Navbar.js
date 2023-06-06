import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"

export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WELCOME
          </Typography>
          <div class="profile">
            <div class="info">
              <p>
                Hey, <b>{props.name}</b>
              </p>
              <small class="text-muted">Admin</small>
            </div>
            <div class="profile-photo">
              <Avatar alt="Admin" src="/static/images/avatar/1.jpg" />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
