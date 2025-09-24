import {
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Box,
} from '@mui/material'
import type { CourseFilterValues } from '../CourseManagment.types'

interface FilterSectionProps {
  filters: CourseFilterValues
  onFilterChange: (name: keyof CourseFilterValues, value: string) => void
  courses: CourseFilterValues[]
}

export const FilterSection = ({
  filters,
  onFilterChange,
  courses,
}: FilterSectionProps) => {
  const uniqueCourseNames = [...new Set(courses.map((c) => c.courseName))]

  return (
    <Card sx={{ mb: 4, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Filter
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <TextField
            select
            fullWidth
            label="Course name"
            value={filters.courseName || ''}
            onChange={(e) => onFilterChange('courseName', e.target.value)}
            size="small"
            sx={{ flex: 1 }}
          >
            <MenuItem value="">-- Select a course --</MenuItem>
            {uniqueCourseNames.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            fullWidth
            label="Course department"
            value={filters.courseDepartment || ''}
            onChange={(e) => onFilterChange('courseDepartment', e.target.value)}
            size="small"
            sx={{ flex: 1 }}
          >
            <MenuItem value="">-- Select department --</MenuItem>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Java">Java</MenuItem>
            <MenuItem value=".NET">.NET</MenuItem>
            <MenuItem value="SAP">SAP</MenuItem>
          </TextField>
          <TextField
            select
            fullWidth
            label="Course classification"
            value={filters.courseClassification || ''}
            onChange={(e) =>
              onFilterChange('courseClassification', e.target.value)
            }
            size="small"
            sx={{ flex: 1 }}
          >
            <MenuItem value="">-- Select classification --</MenuItem>
            <MenuItem value="Technical">Technical</MenuItem>
            <MenuItem value="Soft skills">Soft skills</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
          </TextField>
        </Box>
      </CardContent>
    </Card>
  )
}
