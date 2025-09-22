import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'

const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state)
  }

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Course Management', path: '/course-management' },
    { text: 'Course Overview', path: '/course-overview' },
    { text: 'Administration', path: '/administration' },
  ]

  const handleNavigation = (path: string) => {
    navigate(path)
    setOpen(false)
  }

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => handleNavigation(item.path)}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default HamburgerMenu
