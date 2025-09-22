import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Divider,
} from '@mui/material'
import { AccountCircle } from '@mui/icons-material'

const LanguageSwitcher: React.FC = () => {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: { width: 200 },
        }}
      >
        <Box sx={{ px: 2, py: 1 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 'bold' }}
          >
            {t('welcome_user')}
          </Typography>
        </Box>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Typography>{t('log_out')}</Typography>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default LanguageSwitcher
