import React from 'react'

import { Container, Box } from '@mui/material'
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box></Box>
      </Container>
    </>
  )
}

export default App
