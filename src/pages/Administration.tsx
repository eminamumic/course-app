import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material'

interface User {
  id: string
  name: string
  lastName: string
}

const mockUsers: User[] = [
  { id: 'user_1', name: 'John', lastName: 'Doe' },
  { id: 'user_2', name: 'Jane', lastName: 'Smith' },
  { id: 'user_3', name: 'Peter', lastName: 'Jones' },
]

const Administration: React.FC = () => {
  const { t } = useTranslation()
  const [users, setUsers] = useState<User[]>(mockUsers)

  const [openDialog, setOpenDialog] = useState(false)
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [userName, setUserName] = useState('')
  const [userLastName, setUserLastName] = useState('')

  const handleCreateNewUser = () => {
    setCurrentUser(null)
    setUserName('')
    setUserLastName('')
    setOpenDialog(true)
  }

  const handleEditUser = (user: User) => {
    setCurrentUser(user)
    setUserName(user.name)
    setUserLastName(user.lastName)
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('administration_view')}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateNewUser}
        >
          {t('create_new_user')}
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('user_id')}</TableCell>
              <TableCell>{t('name')}</TableCell>
              <TableCell>{t('last_name')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.lastName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {currentUser ? t('edit_user') : t('create_user_title')}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label={t('name')}
            type="text"
            fullWidth
            variant="standard"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            margin="dense"
            label={t('last_name')}
            type="text"
            fullWidth
            variant="standard"
            value={userLastName}
            onChange={(e) => setUserLastName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>{t('cancel')}</Button>
          <Button onClick={handleCloseDialog}>{t('save')}</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default Administration
