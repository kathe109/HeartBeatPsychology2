// En src/pages/PerdiAMiMejorAmigoPage.js
import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

const PerdiAMiMejorAmigoPage = () => {
  return (
    <Container maxWidth="md">
      <Paper style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>Perdí a mi mejor amigo/a</Typography>
        <Typography paragraph>
          Reflexiona sobre cómo superar la pérdida de una amistad importante y las formas de reconectar o cerrar ciclos sin resentimientos.
        </Typography>
        {/* Añade otros elementos necesarios para enriquecer la información */}
      </Paper>
    </Container>
  );
};

export default PerdiAMiMejorAmigoPage;
