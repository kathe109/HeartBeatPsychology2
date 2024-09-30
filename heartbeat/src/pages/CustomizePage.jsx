import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';

const CustomizePage = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Primer paso: ¡Personaliza a tu estilo!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Color</Typography>
          <Button variant="contained" color="primary">
            Elige tu color favorito
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Motivo</Typography>
          <Button variant="contained" color="secondary">
            Especifica por qué razón estás aquí
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">¡Amigo!</Typography>
          <Button variant="contained" color="success">
            Consigue un compañante ideal durante el transcurso de las sesiones
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CustomizePage;
