import React from 'react'
import {
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material'

const CourseFilter: React.FC = () => {
  return (
    <Box sx={{ border: '1px solid #ccc', p: 2, borderRadius: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField fullWidth label="Course Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel>Course Department</InputLabel>
            <Select defaultValue="">
              <MenuItem value="">All</MenuItem>
              <MenuItem value="java">Java</MenuItem>
              <MenuItem value=".net">.NET</MenuItem>
              <MenuItem value="sap">SAP</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl>
            <RadioGroup row defaultValue="technical">
              <FormControlLabel
                value="technical"
                control={<Radio />}
                label="Technical"
              />
              <FormControlLabel
                value="softskills"
                control={<Radio />}
                label="Soft Skills"
              />
              <FormControlLabel
                value="business"
                control={<Radio />}
                label="Business"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CourseFilter
