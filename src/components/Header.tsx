import React from 'react'
import { useTranslation } from 'react-i18next'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

import LanguageSwitcher from './LanguageSwitcher'
import HamburgerMenu from './Hamburger'

const Header: React.FC = () => {
  const { t } = useTranslation()

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <HamburgerMenu></HamburgerMenu>
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {t('app_name')}
        </Typography>
        <LanguageSwitcher />
      </Toolbar>
    </AppBar>
  )
}

export default Header
