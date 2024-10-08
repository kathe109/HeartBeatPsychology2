// En src/pages/OtrosPage.js
import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const OtrosPage = () => {
  return (
    <Container maxWidth="md">
      <Paper style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>Otros problemas</Typography>
        <Typography paragraph>
          Encuentra ayuda y recursos para una variedad de problemas que pueden no encajar en otras categorías, como problemas familiares, salir del clóset, entre otros.
        </Typography>
        {/* Considera agregar recursos útiles, enlaces a apoyo profesional, etc. */}
      </Paper>
    </Container>
  );
};

export default OtrosPage;
