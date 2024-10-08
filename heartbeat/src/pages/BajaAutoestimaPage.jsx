// En src/pages/BajaAutoestimaPage.js
import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const BajaAutoestimaPage = () => {
  return (
    <Container maxWidth="md">
      <Paper style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>Baja autoestima</Typography>
        <Typography paragraph>
          Explora estrategias para mejorar la autoestima y sentirte seguro en tus propias capacidades. Aquí se ofrecerán consejos y técnicas para valorarte más.
        </Typography>
        {/* Añade más contenido como imágenes, videos o listas según necesites */}
      </Paper>
    </Container>
  );
};

export default BajaAutoestimaPage;
