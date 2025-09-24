import {
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Box,
} from '@mui/material'
import type { CourseFilterValues } from '../CourseManagment.types'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  const uniqueCourseNames = [...new Set(courses.map((c) => c.courseName))]

  return (
    <Card sx={{ mb: 4, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'serif' }}>
          {t('filter')}
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
            label={t('course_name')}
            value={filters.courseName || ''}
            onChange={(e) => onFilterChange('courseName', e.target.value)}
            size="small"
            sx={{ flex: 1, fontFamily: 'serif' }}
          >
            <MenuItem value="" sx={{ fontFamily: 'serif' }}>
              {t('select_a_course')}
            </MenuItem>
            {uniqueCourseNames.map((name) => (
              <MenuItem key={name} value={name} sx={{ fontFamily: 'serif' }}>
                {name}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            fullWidth
            label={t('course_department')}
            value={filters.courseDepartment || ''}
            onChange={(e) => onFilterChange('courseDepartment', e.target.value)}
            size="small"
            sx={{ flex: 1, fontFamily: 'serif' }}
          >
            <MenuItem value="" sx={{ fontFamily: 'serif' }}>
              {t('select_department')}
            </MenuItem>
            <MenuItem value="All" sx={{ fontFamily: 'serif' }}>
              {t('all')}
            </MenuItem>
            <MenuItem value="Java" sx={{ fontFamily: 'serif' }}>
              {t('java')}
            </MenuItem>
            <MenuItem value=".NET" sx={{ fontFamily: 'serif' }}>
              {t('.net')}
            </MenuItem>
            <MenuItem value="SAP" sx={{ fontFamily: 'serif' }}>
              {t('sap')}
            </MenuItem>
          </TextField>
          <TextField
            select
            fullWidth
            label={t('course_classification')}
            value={filters.courseClassification || ''}
            onChange={(e) =>
              onFilterChange('courseClassification', e.target.value)
            }
            size="small"
            sx={{ flex: 1, fontFamily: 'serif' }}
          >
            <MenuItem value="" sx={{ fontFamily: 'serif' }}>
              {t('select_classification')}
            </MenuItem>
            <MenuItem value="Technical" sx={{ fontFamily: 'serif' }}>
              {t('technical')}
            </MenuItem>
            <MenuItem value="Soft skills" sx={{ fontFamily: 'serif' }}>
              {t('soft_skills')}
            </MenuItem>
            <MenuItem value="Business" sx={{ fontFamily: 'serif' }}>
              {t('business')}
            </MenuItem>
          </TextField>
        </Box>
      </CardContent>
    </Card>
  )
}
