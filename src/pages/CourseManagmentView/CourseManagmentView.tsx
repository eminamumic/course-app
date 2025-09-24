import { useState, useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { FilterSection } from './components/FilterSection'
import { CourseFormFields } from './components/CourseFormFields'
import type {
  CourseFormValues,
  CourseFilterValues,
} from './CourseManagment.types'
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from 'react-i18next'

const initialFormValues: CourseFormValues = {
  courseName: '',
  numberOfParticipants: 0,
  courseClassification: 'Technical',
  courseDepartment: 'All',
  participantGroups: {
    developers: false,
    managers: false,
    hr: false,
    administration: false,
  },
}

export const CourseManagementView = () => {
  const { t } = useTranslation()
  const [formValues, setFormValues] =
    useState<CourseFormValues>(initialFormValues)
  const [filters, setFilters] = useState<CourseFilterValues>({
    courseName: null,
    courseDepartment: null,
    courseClassification: null,
  })
  const [courses, setCourses] = useState<CourseFormValues[]>([])
  const [isEditing, setIsEditing] = useState(false)
  const [errors, setErrors] = useState<{ courseName?: string }>({})

  const handleCreateCourse = () => {
    if (!formValues.courseName) {
      setErrors({ courseName: t('course_name_required') })
      return
    }
    setErrors({})

    const newCourse = { ...formValues, id: uuidv4() }
    setCourses([...courses, newCourse])
    setFormValues(initialFormValues)
    setIsEditing(false)
    alert(t('course_created_successfully'))
  }

  useEffect(() => {
    if (filters.courseName) {
      const courseToEdit = courses.find(
        (c) => c.courseName === filters.courseName
      )
      if (courseToEdit) {
        setFormValues(courseToEdit)
        setIsEditing(true)
      }
    }
  }, [filters.courseName, courses])

  const handleFilterChange = (
    name: keyof CourseFilterValues,
    value: string
  ) => {
    setFilters((prev) => ({ ...prev, [name]: value || null }))
  }

  const handleSaveEdit = () => {
    const updatedCourses = courses.map((c) =>
      c.id === formValues.id ? formValues : c
    )
    setCourses(updatedCourses)
    setIsEditing(false)
    alert(t('course_saved_successfully'))
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormValues((prev) => ({
      ...prev,
      participantGroups: {
        ...prev.participantGroups,
        [name]: checked,
      },
    }))
  }

  const handleCancel = () => {
    setFormValues(initialFormValues)
    setIsEditing(false)
    setFilters({
      courseName: null,
      courseDepartment: null,
      courseClassification: null,
    })
  }

  return (
    <Box sx={{ p: 4, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: 'serif' }}>
        {t('course_management')}
      </Typography>

      <FilterSection
        filters={filters}
        onFilterChange={handleFilterChange}
        courses={courses}
      />

      <CourseFormFields
        formValues={formValues}
        onInputChange={handleInputChange}
        onRadioChange={handleRadioChange}
        onCheckboxChange={handleCheckboxChange}
        errors={errors}
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
        {!isEditing ? (
          <Button
            variant="contained"
            disableElevation
            onClick={handleCreateCourse}
            sx={{ fontFamily: 'serif' }}
          >
            {t('create_new_course')}
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="primary"
            onClick={handleSaveEdit}
            sx={{ fontFamily: 'serif' }}
          >
            {t('save')}
          </Button>
        )}
        <Button
          variant="outlined"
          color="inherit"
          onClick={handleCancel}
          sx={{ fontFamily: 'serif' }}
        >
          {t('cancel')}
        </Button>
      </Box>
    </Box>
  )
}
