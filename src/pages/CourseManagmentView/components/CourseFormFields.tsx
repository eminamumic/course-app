import {
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  Checkbox,
  MenuItem,
} from '@mui/material'
import type { CourseFormValues } from '../CourseManagment.types'
import { useTranslation } from 'react-i18next'

interface CourseFormFieldsProps {
  formValues: CourseFormValues
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  onRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  errors: any
}

export const CourseFormFields = ({
  formValues,
  onInputChange,
  onRadioChange,
  onCheckboxChange,
  errors,
}: CourseFormFieldsProps) => {
  const { t } = useTranslation()

  return (
    <>
      <Card
        sx={{
          mb: 4,
          boxShadow: 'none',
          border: '1px solid #e0e0e0',
          fontFamily: 'serif',
        }}
      >
        <CardContent sx={{ fontFamily: 'serif' }}>
          <Typography variant="h6" gutterBottom sx={{ fontFamily: 'serif' }}>
            {t('basic_data')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              alignItems: 'center',
            }}
          >
            <Box sx={{ flex: 1, minWidth: { xs: 'auto', sm: 250 } }}>
              <TextField
                fullWidth
                label={t('course_name')}
                name="courseName"
                value={formValues.courseName}
                onChange={onInputChange}
                error={!!errors.courseName}
                helperText={errors.courseName}
                sx={{ fontFamily: 'serif' }}
              />
            </Box>
            <Box sx={{ flex: 1, minWidth: { xs: 'auto', sm: 250 } }}>
              <TextField
                fullWidth
                label={t('number_of_participants')}
                name="numberOfParticipants"
                type="number"
                value={formValues.numberOfParticipants}
                onChange={onInputChange}
                sx={{ fontFamily: 'serif' }}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ fontFamily: 'serif' }}>
            {t('course_classification')}
          </Typography>
          <RadioGroup
            row
            name="courseClassification"
            value={formValues.courseClassification}
            onChange={onRadioChange}
            sx={{ fontFamily: 'serif' }}
          >
            <FormControlLabel
              value="Technical"
              control={<Radio />}
              label={t('technical')}
              sx={{ fontFamily: 'serif' }}
            />
            <FormControlLabel
              value="Soft skills"
              control={<Radio />}
              label={t('soft_skills')}
              sx={{ fontFamily: 'serif' }}
            />
            <FormControlLabel
              value="Business"
              control={<Radio />}
              label={t('business')}
              sx={{ fontFamily: 'serif' }}
            />
          </RadioGroup>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ fontFamily: 'serif' }}>
            {t('course_department')}
          </Typography>
          <TextField
            select
            fullWidth
            name="courseDepartment"
            value={formValues.courseDepartment}
            onChange={onInputChange}
            sx={{ fontFamily: 'serif' }}
          >
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
        </CardContent>
      </Card>

      <Card sx={{ mb: 4, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ fontFamily: 'serif' }}>
            {t('course_participant_group')}
          </Typography>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formValues.participantGroups.developers}
                  onChange={onCheckboxChange}
                  name="developers"
                  sx={{ fontFamily: 'serif' }}
                />
              }
              label={t('developers')}
            />
            <FormControlLabel
              sx={{ fontFamily: 'serif' }}
              control={
                <Checkbox
                  checked={formValues.participantGroups.managers}
                  onChange={onCheckboxChange}
                  name="managers"
                />
              }
              label={t('managers')}
            />
            <FormControlLabel
              sx={{ fontFamily: 'serif' }}
              control={
                <Checkbox
                  checked={formValues.participantGroups.hr}
                  onChange={onCheckboxChange}
                  name="hr"
                />
              }
              label={t('hr')}
            />
            <FormControlLabel
              sx={{ fontFamily: 'serif' }}
              control={
                <Checkbox
                  checked={formValues.participantGroups.administration}
                  onChange={onCheckboxChange}
                  name="administration"
                />
              }
              label={t('administration')}
            />
          </FormGroup>
        </CardContent>
      </Card>
    </>
  )
}
