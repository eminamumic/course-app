import React from 'react'
import { Box } from '@mui/material'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 3,
        padding: 3,
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <Card
        title={t('course_management')}
        image="../image/coursemenagment.jpg"
        onClick={() => navigate('/course-management')}
      />
      <Card
        title={t('course_overview')}
        image="../image/coursoverview.jpg"
        onClick={() => navigate('/course-overview')}
      />
      <Card
        title={t('administration')}
        image="../image/administration.jpg"
        onClick={() => navigate('/administration')}
      />
    </Box>
  )
}

export default Home
