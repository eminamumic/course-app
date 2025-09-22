import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material'
import { AccountCircle } from '@mui/icons-material'

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    i18n.changeLanguage(event.target.value)
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
        PaperProps={{ sx: { width: 200 } }}
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
        <Box sx={{ px: 2, py: 1 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontWeight: 'bold' }}
          >
            {t('language')}
          </Typography>
        </Box>
        <RadioGroup
          aria-label="language"
          name="language-radio-group"
          value={i18n.language}
          onChange={handleLanguageChange}
          sx={{ px: 1 }}
        >
          <MenuItem disableRipple>
            <FormControlLabel
              value="en"
              control={<Radio size="small" />}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src="https://flagcdn.com/16x12/gb.png"
                    alt="English Flag"
                    style={{ marginRight: 8 }}
                  />
                  <Typography>{t('english')}</Typography>
                </Box>
              }
            />
          </MenuItem>
          <MenuItem disableRipple>
            <FormControlLabel
              value="de"
              control={<Radio size="small" />}
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src="https://flagcdn.com/16x12/de.png"
                    alt="German Flag"
                    style={{ marginRight: 8 }}
                  />
                  <Typography>{t('german')}</Typography>
                </Box>
              }
            />
          </MenuItem>
        </RadioGroup>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Typography>{t('log_out')}</Typography>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default LanguageSwitcher
