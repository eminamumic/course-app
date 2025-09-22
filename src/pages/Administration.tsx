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

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {t('administration_view')}
      </Typography>

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
    </Box>
  )
}

export default Administration
