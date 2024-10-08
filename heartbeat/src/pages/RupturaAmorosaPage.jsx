// En src/pages/RupturaAmorosaPage.js
import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const RupturaAmorosaPage = () => {
  return (
    <Container maxWidth="md">
      <Paper style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>Ruptura amorosa</Typography>
        <Typography paragraph>
          Aquí va el contenido específico sobre cómo lidiar con una ruptura amorosa. Este contenido será único y podrá tener su propio diseño.
        </Typography>
        {/* Más contenido y elementos como imágenes, listas, etc. */}
      </Paper>
    </Container>
  );
};

export default RupturaAmorosaPage;
