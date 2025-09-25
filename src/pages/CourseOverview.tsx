import { useState } from 'react'
import {
  Box,
  Typography,
  Switch,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TablePagination,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SearchIcon from '@mui/icons-material/Search'
import { useTranslation } from 'react-i18next'
import type { CourseFormValues } from '../pages/CourseManagmentView/CourseManagment.types'

interface CourseOverviewProps {
  courses: CourseFormValues[]
  setCourses: React.Dispatch<React.SetStateAction<CourseFormValues[]>>
}

export const CourseOverview = ({
  courses,
  setCourses,
}: CourseOverviewProps) => {
  const { t } = useTranslation()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [showAll, setShowAll] = useState(true)
  const [openDialog, setOpenDialog] = useState(false)
  const [courseToDelete, setCourseToDelete] = useState<string | null>(null)

  const filteredCourses = showAll
    ? courses
    : courses.filter((course) => course.id)
  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, filteredCourses.length - page * rowsPerPage)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleShowAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowAll(event.target.checked)
  }

  const handleDeleteClick = (courseId: string) => {
    setCourseToDelete(courseId)
    setOpenDialog(true)
  }

  const handleConfirmDelete = () => {
    if (courseToDelete) {
      setCourses(courses.filter((course) => course.id !== courseToDelete))
      setOpenDialog(false)
      setCourseToDelete(null)
    }
  }

  const handleCancelDelete = () => {
    setOpenDialog(false)
    setCourseToDelete(null)
  }

  return (
    <Box sx={{ p: 4, maxWidth: 1000, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        {t('course_overview')}
      </Typography>

      <FormControlLabel
        control={<Switch checked={showAll} onChange={handleShowAllChange} />}
        label={t('show_all_courses')}
      />

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('course_name')}</TableCell>
              <TableCell>{t('course_classification')}</TableCell>
              <TableCell>{t('course_department')}</TableCell>
              <TableCell>{t('course_participant_group')}</TableCell>
              <TableCell align="right">{t('number_of_participants')}</TableCell>
              <TableCell align="center">{t('actions')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCourses
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((course) => (
                <TableRow key={course.id}>
                  <TableCell>{course.courseName}</TableCell>
                  <TableCell>{course.courseClassification}</TableCell>
                  <TableCell>{course.courseDepartment}</TableCell>
                  <TableCell>
                    {Object.entries(course.participantGroups)
                      .filter(([, isChecked]) => isChecked)
                      .map(([groupName]) => t(groupName.toLowerCase()))
                      .join(', ')}
                  </TableCell>
                  <TableCell align="right">
                    {course.numberOfParticipants}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton disabled>
                      <SearchIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteClick(course.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredCourses.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage={t('rows_per_page')}
      />

      <Dialog open={openDialog} onClose={handleCancelDelete}>
        <DialogTitle>{t('confirm_delete')}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t('confirm_delete_course')}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete}>{t('cancel')}</Button>
          <Button onClick={handleConfirmDelete} color="error">
            {t('delete')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
