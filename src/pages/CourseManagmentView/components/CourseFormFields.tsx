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
  return (
    <>
      <Card sx={{ mb: 4, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Basic data
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
                label="Course name"
                name="courseName"
                value={formValues.courseName}
                onChange={onInputChange}
                error={!!errors.courseName}
                helperText={errors.courseName}
              />
            </Box>
            <Box sx={{ flex: 1, minWidth: { xs: 'auto', sm: 250 } }}>
              <TextField
                fullWidth
                label="Number of participants"
                name="numberOfParticipants"
                type="number"
                value={formValues.numberOfParticipants}
                onChange={onInputChange}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Course classification
          </Typography>
          <RadioGroup
            row
            name="courseClassification"
            value={formValues.courseClassification}
            onChange={onRadioChange}
          >
            <FormControlLabel
              value="Technical"
              control={<Radio />}
              label="Technical"
            />
            <FormControlLabel
              value="Soft skills"
              control={<Radio />}
              label="Soft skills"
            />
            <FormControlLabel
              value="Business"
              control={<Radio />}
              label="Business"
            />
          </RadioGroup>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Course department
          </Typography>
          <TextField
            select
            fullWidth
            name="courseDepartment"
            value={formValues.courseDepartment}
            onChange={onInputChange}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Java">Java</MenuItem>
            <MenuItem value=".NET">.NET</MenuItem>
            <MenuItem value="SAP">SAP</MenuItem>
          </TextField>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Course participant group
          </Typography>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={formValues.participantGroups.developers}
                  onChange={onCheckboxChange}
                  name="developers"
                />
              }
              label="Developers"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formValues.participantGroups.managers}
                  onChange={onCheckboxChange}
                  name="managers"
                />
              }
              label="Managers"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formValues.participantGroups.hr}
                  onChange={onCheckboxChange}
                  name="hr"
                />
              }
              label="HR"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={formValues.participantGroups.administration}
                  onChange={onCheckboxChange}
                  name="administration"
                />
              }
              label="Administration"
            />
          </FormGroup>
        </CardContent>
      </Card>
    </>
  )
}
