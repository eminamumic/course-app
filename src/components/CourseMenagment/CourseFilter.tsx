import React from 'react'
import {
  Box,
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
      {/* Flex container za filter polja */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        <TextField
          label="Course Name"
          variant="outlined"
          sx={{ flex: '1 1 200px' }}
        />

        <FormControl sx={{ flex: '1 1 200px' }}>
          <InputLabel>Course Department</InputLabel>
          <Select defaultValue="">
            <MenuItem value="">All</MenuItem>
            <MenuItem value="java">Java</MenuItem>
            <MenuItem value=".net">.NET</MenuItem>
            <MenuItem value="sap">SAP</MenuItem>
          </Select>
        </FormControl>

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
      </Box>
    </Box>
  )
}

export default CourseFilter
