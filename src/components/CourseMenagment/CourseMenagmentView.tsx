import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import CourseFilter from './CourseFilter'
import CourseForm from './CourseForm'

const CourseManagementView: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Course Management
      </Typography>

      <Box sx={{ mb: 3 }}>
        <CourseFilter />
      </Box>

      <Box>
        <CourseForm />
      </Box>
    </Box>
  )
}

export default CourseManagementView
