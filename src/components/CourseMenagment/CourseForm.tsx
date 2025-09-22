import React from 'react'
import {
  Box,
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
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
        <TextField
          label="Course Name"
          variant="outlined"
          sx={{ flex: '1 1 200px' }}
        />
        <TextField
          label="Number of Participants"
          type="number"
          variant="outlined"
          defaultValue={0}
          sx={{ flex: '1 1 200px' }}
        />
        <FormControl sx={{ flex: '1 1 200px' }}>
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
        <FormControl sx={{ flex: '1 1 200px' }}>
          <InputLabel>Course Department</InputLabel>
          <Select defaultValue="">
            <MenuItem value="">All</MenuItem>
            <MenuItem value="java">Java</MenuItem>
            <MenuItem value=".net">.NET</MenuItem>
            <MenuItem value="sap">SAP</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <FormGroup row sx={{ mb: 2 }}>
        <FormControlLabel control={<Checkbox />} label="Developers" />
        <FormControlLabel control={<Checkbox />} label="Managers" />
        <FormControlLabel control={<Checkbox />} label="Administration" />
      </FormGroup>

      <Box>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Create New Course
        </Button>
        <Button variant="outlined" color="secondary">
          Save
        </Button>
      </Box>
    </Box>
  )
}

export default CourseForm
