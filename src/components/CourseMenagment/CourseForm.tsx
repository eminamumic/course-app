import React from 'react'
import {
  Box,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  RadioGroup,
  Radio,
} from '@mui/material'

const CourseForm: React.FC = () => {
  return (
    <Box sx={{ border: '1px solid #ccc', p: 3, borderRadius: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField fullWidth label="Course Name" variant="outlined" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="number"
            label="Number of Participants"
            variant="outlined"
            defaultValue={0}
          />
        </Grid>
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12} md={6}>
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
        <Grid item xs={12}>
          <FormGroup row>
            <FormControlLabel control={<Checkbox />} label="Developers" />
            <FormControlLabel control={<Checkbox />} label="Managers" />
            <FormControlLabel control={<Checkbox />} label="Administration" />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Create New Course
          </Button>
          <Button variant="outlined" color="secondary">
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CourseForm
