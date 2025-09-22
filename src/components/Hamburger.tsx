import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { t } = useTranslation() // hook za prevod

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state)
  }

  const menuItems = [
    { textKey: 'menu.home', path: '/' },
    { textKey: 'menu.courseManagement', path: '/course-management' },
    { textKey: 'menu.courseOverview', path: '/course-overview' },
    { textKey: 'menu.administration', path: '/administration' },
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
                key={item.textKey}
                onClick={() => handleNavigation(item.path)}
              >
                <ListItemText primary={t(item.textKey)} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default HamburgerMenu
