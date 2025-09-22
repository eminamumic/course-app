import React from 'react'
import './i18n'
import { Container, Box } from '@mui/material'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  )
}

export default App
