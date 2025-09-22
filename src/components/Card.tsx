import React from 'react'
import { Card as MUICard, Typography, CardMedia, Box } from '@mui/material'

interface CardProps {
  title: string
  image: string
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({ title, image, onClick }) => {
  return (
    <MUICard
      onClick={onClick}
      sx={{
        width: 350,
        height: 230,
        cursor: 'pointer',
        boxShadow: 3,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        '&:hover': { boxShadow: 6, transform: 'scale(1.02)' },
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',

        overflow: 'hidden',
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          p: 1,
          textAlign: 'left',
        }}
      >
        <Typography variant="h6" component="div" sx={{ fontFamily: 'serif' }}>
          {title}
        </Typography>
      </Box>
    </MUICard>
  )
}

export default Card
