import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material'
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material'

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

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleCreateNewUser = () => {
    setCurrentUser(null)
    setUserName('')
    setUserLastName('')
    setIsSubmitted(false)
    setOpenDialog(true)
  }

  const handleEditUser = (user: User) => {
    setCurrentUser(user)
    setUserName(user.name)
    setUserLastName(user.lastName)
    setIsSubmitted(false)
    setOpenDialog(true)
  }

  const handleSaveUser = () => {
    setIsSubmitted(true)

    if (!userName.trim() || !userLastName.trim()) return

    const newUserId = currentUser ? currentUser.id : `user_${users.length + 1}`
    const updatedUser = {
      id: newUserId,
      name: userName,
      lastName: userLastName,
    }

    if (currentUser) {
      setUsers(
        users.map((user) => (user.id === currentUser.id ? updatedUser : user))
      )
    } else {
      setUsers([...users, updatedUser])
    }

    setOpenDialog(false)
  }

  const handleDeleteUser = (userId: string) => {
    if (window.confirm(t('confirm_delete_user'))) {
      setUsers(users.filter((user) => user.id !== userId))
    }
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const nameError = isSubmitted && !userName.trim() ? t('please_fill_name') : ''
  const lastNameError =
    isSubmitted && !userLastName.trim() ? t('please_fill_lastname') : ''

  return (
    <Box sx={{ p: 3, fontFamily: 'serif' }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontFamily: 'serif' }}
      >
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

      <TableContainer component={Paper} sx={{ fontFamily: 'serif' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('user_id')}</TableCell>
              <TableCell>{t('name')}</TableCell>
              <TableCell>{t('last_name')}</TableCell>
              <TableCell align="right">{t('edit')}</TableCell>
              <TableCell align="right">{t('delete')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleEditUser(user)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => handleDeleteUser(user.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle sx={{ fontFamily: 'serif' }}>
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
            error={!!nameError}
            helperText={nameError}
            sx={{ fontFamily: 'serif' }}
          />
          <TextField
            margin="dense"
            label={t('last_name')}
            type="text"
            fullWidth
            variant="standard"
            value={userLastName}
            onChange={(e) => setUserLastName(e.target.value)}
            error={!!lastNameError}
            helperText={lastNameError}
            sx={{ fontFamily: 'serif' }}
          />
        </DialogContent>
        <DialogActions sx={{ fontFamily: 'serif' }}>
          <Button onClick={handleCloseDialog}>{t('cancel')}</Button>
          <Button
            onClick={handleSaveUser}
            disabled={!userName.trim() || !userLastName.trim()}
          >
            {t('save')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default Administration
